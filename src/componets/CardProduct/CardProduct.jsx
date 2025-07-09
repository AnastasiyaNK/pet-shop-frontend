
import css from './CardProduct.module.css'
import Button from '../ui/Button/Button';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';



const CardProduct = ({
  id,
  image,
  title,
  discountPercent,
  discont_price,
  price
}) => {
  const dispatch = useDispatch();
  


  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(
      addItemToCart({
        id,
        image,
        title,
        discountPercent,
        discont_price,
        price,
      })
    );


  }
  return (
    <li key={id} className={css.item}>
      <Link to={`${ROUTES.PRODUCTS}/${id}`} className={css.link}>
        <div className={css.discountsWrapp}>
          <img
            className={css.img}
            src={`http://localhost:3333${image}`}
            alt={title}
          />

          <Button onClick={handleClick} className={css.button}>
            Add to cart
          </Button>

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
                  <span className={css.discountedPrice}>$ {discont_price}</span>
                  <span className={css.originalPrice}>$ {price}</span>
                </>
              ) : (
                <span className={css.price}>$ {price}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CardProduct