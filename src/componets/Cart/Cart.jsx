import React from "react";
import css from "./Cart.module.css";
import removeImg from "../../assets/images/ic-x.svg";
import minusImg from "../../assets/images/minus.svg";
import plusImg from "../../assets/images/plus .svg";
import dogImg from "../../assets/images/dog.jpg";
import CallToActionForm from "../CallToActionForm/CallToActionForm";
import OrderForm from "../OrderForm/OrderForm";

const Cart = () => {
  return (
    <div className={css.container}>
      <div className={css.productsSection}>
        <ul className={css.list}>
          <li className={css.item}>
            <div className={css.imgWrapp}>
              <img className={css.img} src={dogImg} alt="" />
            </div>
            <div className={css.details}>
              <h4 className={css.detailsTitle}>BELCANDO Dog Food</h4>
              <div className={css.test}>
                <div className={css.quantityControls}>
                  <button className={css.quantityBtn}>
                    <img src={minusImg} alt="minus" />
                  </button>
                  <span className={css.quantityValue}>2</span>
                  <button className={css.quantityBtn}>
                    <img src={plusImg} alt="plus" />
                  </button>
                </div>
                <div className={css.pricing}>
                  <span className={css.discountedPrice}>$ 46</span>
                  <span className={css.price}>$ 34</span>
                </div>
              </div>
            </div>
            <div className={css.removeBtnWrapp}>
              <button className={css.removeBtn}>
                <img className={css.removeImg} src={removeImg} alt="" />
              </button>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.imgWrapp}>
              <img className={css.img} src={dogImg} alt="" />
            </div>
            <div className={css.details}>
              <h4 className={css.detailsTitle}>BELCANDO Dog Food</h4>
              <div className={css.test}>
                <div className={css.quantityControls}>
                  <button className={css.quantityBtn}>
                    <img src={minusImg} alt="minus" />
                  </button>
                  <span className={css.quantityValue}>2</span>
                  <button className={css.quantityBtn}>
                    <img src={plusImg} alt="plus" />
                  </button>
                </div>
                <div className={css.pricing}>
                  <span className={css.discountedPrice}>$ 46</span>
                  <span className={css.price}>$ 34</span>
                </div>
              </div>
            </div>
            <div className={css.removeBtnWrapp}>
              <button className={css.removeBtn}>
                <img className={css.removeImg} src={removeImg} alt="" />
              </button>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.imgWrapp}>
              <img className={css.img} src={dogImg} alt="" />
            </div>
            <div className={css.details}>
              <h4 className={css.detailsTitle}>BELCANDO Dog Food</h4>
              <div className={css.test}>
                <div className={css.quantityControls}>
                  <button className={css.quantityBtn}>
                    <img src={minusImg} alt="minus" />
                  </button>
                  <span className={css.quantityValue}>2</span>
                  <button className={css.quantityBtn}>
                    <img src={plusImg} alt="plus" />
                  </button>
                </div>
                <div className={css.pricing}>
                  <span className={css.discountedPrice}>$ 46</span>
                  <span className={css.price}>$ 34</span>
                </div>
              </div>
            </div>
            <div className={css.removeBtnWrapp}>
              <button className={css.removeBtn}>
                <img className={css.removeImg} src={removeImg} alt="" />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div className={css.orderSummarySection}>
          <div className={css.orderSummary}>
            <h3 className={css.summaryTitle}>Order details</h3>
            <p className={css.itemsCount}>
              <span className={css.itemsCount}>3</span>items
            </p>
            <div className={css.totalContainer}>
              <p className={css.itemsCount}>Total</p>
              <p className={css.amount}>$ 97,20</p>
            </div>
            <OrderForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
