import React from "react";
import css from "./QuantityControls.module.css"; 
import minusImg from "../../../assets/images/minus.svg"
import plusImg from "../../../assets/images/plus .svg";

const QuantityControls = ({
  quantity,
  onIncrement,
  onDecrement,
  min = 1,
  max = 99,
}) => {
  return (
    <div className={css.quantityControls}>
      <button
        className={css.quantityBtn}
        onClick={onDecrement}
        disabled={quantity <= min}
      >
        <img src={minusImg} alt="Reduce" />
      </button>
      <span className={css.quantityValue}>{quantity}</span>
      <button
        className={css.quantityBtn}
        onClick={onIncrement}
        disabled={quantity >= max}
      >
        <img src={plusImg} alt="Enlarge" />
      </button>
    </div>
  );
};

export default QuantityControls;
