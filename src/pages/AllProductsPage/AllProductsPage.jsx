import React, { useEffect } from 'react'
import css from './AllProductsPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../redux/selectors';
import { fetchProductsAll } from '../../redux/petSlice';

const AllProductsPage = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)

  useEffect(() => {
    dispatch(fetchProductsAll())
  }, [dispatch])


   const calculateDiscountPercent = (price, discontPrice) => {
     if (!discontPrice) return 0;
     return Math.round(((price - discontPrice) / price) * 100);
   };
  return (
    <section className={css.product}>
      <div className={css.container}>
        <h2 className={css.secondTitle}>All product</h2>
        <ul className={css.list}>
          {products.map((product) => {
            const discountPercent = calculateDiscountPercent(
              product.price,
              product.discont_price
            );

            return (
              <li key={product.id} className={css.item}>
                <div className={css.discountsWrapp}>
                  <img
                    className={css.img}
                    src={`http://localhost:3333${product.image}`}
                    alt={product.title}
                  />
                  {discountPercent > 0 && (
                    <div className={css.discounts}>-{discountPercent}%</div>
                  )}
                </div>

                <div className={css.cardContent}>
                  <h3 className={css.itemTitle}>{product.title}</h3>
                  <div className={css.priceContainer}>
                    <div className={css.priceWrapp}>
                      {product.discont_price ? (
                        <>
                          <span className={css.discountedPrice}>
                            $ {product.discont_price}
                          </span>
                          <span className={css.originalPrice}>
                            $ {product.price}
                          </span>
                        </>
                      ) : (
                        <span className={css.price}>$ {product.price}</span>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
          {/* {products.map((product) => (
            <li key={product.id} className={css.item}>
              <div className={css.discountsWrapp}>
                <img
                  className={css.img}
                  src={`http://localhost:3333${product.image}`}
                  alt="dog"
                />
                <div className={css.discounts}>-{product.discont_price}%</div>
              </div>

              <div className={css.cardWrapp}>
                <h3 className={css.itemTitle}>{product.title} </h3>
                <div className={css.priceWrapp}>
                  <span className={css.price}>$ {product.price}</span>
                  <span className={css.pricesale}>
                    $ {product.discont_price}
                  </span>
                </div>
              </div>
            </li>
          ))} */}
        </ul>
      </div>
    </section>
  );
}

export default AllProductsPage