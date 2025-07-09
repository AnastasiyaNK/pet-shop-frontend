import React from 'react'
import css from './ShoppingCart.module.css'
import { ROUTES } from '../../utils/routes';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../../redux/selectors';
import { Cart } from '../../componets/Cart/Cart';
import ProductById from '../../componets/ProductById/ProductById';



const ShoppingCart = () => {
  const totalQuantity = useSelector(selectTotalQuantity)

  return (
    <section className={css.cart}>
      {totalQuantity === 0 ? (
        <div className={css.container}>
          <div className={css.titleWrapp}>
            <h2 className={css.secondTitle}>ShoppingCart</h2>
            <div className={css.devider}></div>
            <Link className={css.primaryLink} to={ROUTES.CATEGORIES}>
              Back to the store
            </Link>
          </div>
          <div className={css.wrapp}>
            <p className={css.text}>
              Looks like you have no items in your basket currently.
            </p>
            <Link className={css.spoppingLink} to={ROUTES.CATEGORIES}>
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className={css.container}>
          <Cart />
        </div>
      )}
    </section>
  );
}

export default ShoppingCart