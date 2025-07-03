import React, { useEffect } from 'react'
import css from './AllSalesPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../redux/selectors';
import { fetchProductsAll } from '../../redux/petSlice';
import CardProduct from '../../componets/CardProduct/CardProduct';

const AllSalesPage = () => {
  const dispatch = useDispatch()
  const allProducts = useSelector(selectProducts)
  

  const saleProducts = allProducts.filter(product => product.discont_price !== null)
  
  useEffect(() => {
    dispatch(fetchProductsAll())
  }, [dispatch])




  const calculateDiscountPercent = (price, discont_price) => {
    return Math.round(((price - discont_price)/ price) * 100)
  }
  return (
    <section className={css.sale}>
      <div className={css.container}>
        <h2 className={css.secondTitle}>All sale</h2>
        <ul className={css.list}>
          {saleProducts.map(({
            id,
            image,
            title,
            discont_price,
            price,
          }) => {
            const discountPercent = calculateDiscountPercent(
              price,
              discont_price
            );
          return (
            <CardProduct
              key={id}
              id={id}
              title={title}
              image={image}
              discountPercent={discountPercent}
              discont_price={discont_price}
              price={price}
            />
          );
          })}
        </ul>
      </div>
    </section>
  );
}

export default AllSalesPage