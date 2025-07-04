import React from 'react'
import css from './ShoppingCart.module.css'
import { ROUTES } from '../../utils/routes';

import Cart from '../../componets/Cart/Cart';

const ShoppingCart = () => {
  return (
    <section className={css.cart}>
      <div className={css.container}>
        <Cart />
      </div>
    </section>

    // <section className={css.cart}>
    //   <div className={css.container}>
    //     <div className={css.titleWrapp}>
    //       <h2 className={css.secondTitle}>ShoppingCart</h2>
    //       <div className={css.devider}></div>
    //       <Link className={css.primaryLink} to={ROUTES.CATEGORIES}>
    //         Back to the store
    //       </Link>
    //     </div>
    //     <div className={css.wrapp}>
    //       <p className={css.text}>
    //         Looks like you have no items in your basket currently.
    //       </p>
    //       <Link className={css.spoppingLink} to={ROUTES.CATEGORIES}>
    //         Continue Shopping
    //       </Link>
    //     </div>
    //   </div>
    // </section>
  );
}

export default ShoppingCart