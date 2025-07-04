import React, { useState } from "react";
import css from "./Cart.module.css";
import removeImg from "../../assets/images/ic-x.svg";


import dogImg from "../../assets/images/dog.jpg";
import OrderForm from "../OrderForm/OrderForm";
import QuantityControls from "../ui/QuantityControls/QuantityControls";

const Cart = () => {
    const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));
  return (
    <div className={css.productsSection}>
      <div>
        <ul className={css.list}>
          <li className={css.item}>
            <div className={css.imgWrapp}>
              <img className={css.img} src={dogImg} alt="" />
            </div>
            <div className={css.details}>
              <h4 className={css.detailsTitle}>BELCANDO Dog Food</h4>
              <div className={css.test}>
                <QuantityControls
                  quantity={quantity}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                />
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
                <QuantityControls
                  quantity={quantity}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                />
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
                <QuantityControls
                  quantity={quantity}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                />
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
