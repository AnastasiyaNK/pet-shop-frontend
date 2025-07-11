import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import css from "./OrderForm.module.css";
import closeImg from "../../assets/images/close-x.svg";


const schema = yup
  .object({
    name: yup
      .string()
      .min(2, "Name must contain at least 2 characters")
      .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ'\s-]+$/, "Name can only contain letters")
      .required("Name is required"),
    phone: yup
      .string()
      .test("phone-format", "Invalid phone format", (value) => {
        // Ukraine: +380XXXXXXXXX
        const uaRegex = /^\+38\d{10}$/;
        // Germany: +49XXXXXXXXX
        const deRegex = /^\+49\d{9,12}$/;
        return uaRegex.test(value) || deRegex.test(value);
      })
      .required("Phone number is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
  })
  .required();

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsModalOpen(true);
    reset();
  }

   const closeModal = () => {
     setIsModalOpen(false);
   };

   useEffect(() => {
     const handleKeyDown = (e) => {
       if (e.key === "Escape") {
         closeModal();
       }
     };

     if (isModalOpen) {
       document.addEventListener("keydown", handleKeyDown);
       return () => document.removeEventListener("keydown", handleKeyDown);
     }
   }, [isModalOpen]);

  const formatPhoneInput = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Видаляємо всі не-цифри

    // Автоматично додаємо "+" для міжнародного формату
    if (value.length > 0 && !value.startsWith("+")) {
      // Автовизначення країни за першими цифрами
      if (value.startsWith("38")) {
        value = `+${value}`;
      } else if (value.startsWith("49")) {
        value = `+${value}`;
      }
      // Якщо користувач починає з 0, припускаємо що це локальний формат
      else if (value.startsWith("0")) {
        // Тут можна додати логіку конвертації в міжнародний формат
      }
    }

    // Обмеження довжини в залежності від країни
    if (value.startsWith("+38") && value.length > 13) return;
    if (value.startsWith("+49") && value.length > 14) return;

    e.target.value = value;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <input {...register("name")} placeholder="Name" className={css.input} />
      {errors.name?.message && (
        <p className={css.errors}>{errors.name.message}</p>
      )}
      <input
        {...register("phone")}
        onChange={formatPhoneInput}
        placeholder="Phone number"
        className={css.input}
      />
      {errors.phone?.message && (
        <p className={css.errors}>{errors.phone.message}</p>
      )}
      <input {...register("email")} placeholder="Email" className={css.input} />
      {errors.email?.message && (
        <p className={css.errors}>{errors.email.message}</p>
      )}
      <button className={css.button} type="submit">
        Order
      </button>

      {isModalOpen && (
        <div className={css.modalOverlay} onClick={closeModal}>
          <div
            className={css.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className={css.modalTitle}>Congratulations! </h4>
            <button className={css.closeButton} onClick={closeModal}>
              <img src={closeImg} alt="Close" />
            </button>

            <p className={css.modalText}>
              Your order has been successfully placed on the website.
            </p>
            <p className={css.modalText}>
              A manager will contact you shortly to confirm your order.
            </p>
          </div>
        </div>
      )}
    </form>
  );
};

export default OrderForm;
