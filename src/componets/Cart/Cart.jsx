import css from "./Cart.module.css";
import removeImg from "../../assets/images/ic-x.svg";

import OrderForm from "../OrderForm/OrderForm";
import QuantityControls from "../ui/QuantityControls/QuantityControls";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalAmount,
  selectTotalQuantity,
} from "../../redux/selectors";
import { removeItemFromCart, updateItemQuantity } from "../../redux/cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <div className={css.productsSection}>
      <div className={css.leftContainer}>
        <ul className={css.list}>
          {cartItems.map(
            ({ id, image, title, discont_price, price, quantity }) => {
              return (
                <li key={id} className={css.item}>
                  <div className={css.imgWrapp}>
                    <img
                      className={css.img}
                      src={`http://localhost:3333${image}`}
                      alt=""
                    />
                  </div>
                  <div className={css.details}>
                    <h4 className={css.detailsTitle}>{title}</h4>
                    <div className={css.test}>
                      <QuantityControls
                        quantity={quantity}
                        onIncrement={() =>
                          dispatch(
                            updateItemQuantity({
                              id,
                              newQuantity: quantity + 1,
                            })
                          )
                        }
                        onDecrement={() =>
                          dispatch(
                            updateItemQuantity({
                              id,
                              newQuantity: quantity - 1,
                            })
                          )
                        }
                      />
                      {discont_price ? (
                        <div className={css.pricing}>
                          <span className={css.discountedPrice}>
                            $ {discont_price}
                          </span>
                          <span className={css.price}>$ {price}</span>
                        </div>
                      ) : (
                        <div className={css.pricing}>
                          <span className={css.discountedPrice}>$ {price}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => dispatch(removeItemFromCart(id))}
                    className={css.removeBtn}
                  >
                    <img className={css.removeImg} src={removeImg} alt="" />
                  </button>
                </li>
              );
            }
          )}
        </ul>
      </div>
      <div className={css.rightContainer}>
        <div className={css.orderSummarySection}>
          <div className={css.orderSummary}>
            <h3 className={css.summaryTitle}>Order details</h3>
            <p className={css.itemsCount}>
              <span className={css.itemsCount}>{totalQuantity}</span>items
            </p>
            <div className={css.totalContainer}>
              <p className={css.itemsCount}>Total</p>
              <p className={css.amount}>$ {totalAmount}</p>
            </div>
            <OrderForm />
          </div>
        </div>
      </div>
    </div>
  );
};
