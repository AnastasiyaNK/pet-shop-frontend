import React from 'react'
import css from './CardProduct.module.css'

const CardProduct = ({
  id,
  image,
  title,
  discountPercent,
  discont_price,
  price
}) => {
  return (
    <li key={id} className={css.item}>
      <div className={css.discountsWrapp}>
        <img
          className={css.img}
          src={`http://localhost:3333${image}`}
          alt={title}
        />
        {discountPercent > 0 && (
          <div className={css.discounts}>-{discountPercent}%</div>
        )}
      </div>

      <div className={css.cardContent}>
        <h3 className={css.itemTitle}>{title}</h3>
        <div className={css.priceContainer}>
          <div className={css.priceWrapp}>
            {discont_price ? (
              <>
                <span className={css.discountedPrice}>
                  $ {discont_price}
                </span>
                <span className={css.originalPrice}>$ {price}</span>
              </>
            ) : (
              <span className={css.price}>$ {price}</span>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardProduct