import React, { useEffect } from 'react'
import css from './CategoryProduct.module.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentCategory, selectProductByCategory, selectProductsLoading } from '../../redux/selectors'
import { fetchCategoryById } from '../../redux/petSlice'
import CardProduct from '../CardProduct/CardProduct'
import Loader from '../Loader/Loader'

const CategoryProduct = () => {
    const { categoryId } = useParams()
    const dispatch = useDispatch()
    const productsByCategori = useSelector(selectProductByCategory)
    const isLoading = useSelector(selectProductsLoading)
    const currentCategory = useSelector(selectCurrentCategory)

    useEffect(() => {
        dispatch(fetchCategoryById(categoryId))
    }, [dispatch, categoryId])
  
  
    if (isLoading) {
      return (
       <Loader/>
      );
    }
  
    const calculateDiscountPercent = (price, discontPrice) => {
      if (!discontPrice) return 0;
      return Math.round(((price - discontPrice) / price) * 100);
    };
  return (
    <section className={css.categoryProduct}>
      <div className={css.container}>
        <h2 className={css.secondTitle}>
          {currentCategory?.title || "Products"}
        </h2>
        {productsByCategori.length > 0 ? (
          <ul className={css.list}>
            {productsByCategori.map(
              ({ id, image, title, discont_price, price }) => {
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
              }
            )}
          </ul>
        ) : (
          <p>No products found in this category</p>
        )}
      
      </div>
    </section>
  );
}

export default CategoryProduct