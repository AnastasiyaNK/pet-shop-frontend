import css from "./ProductById.module.css";
import QuantityControls from "../ui/QuantityControls/QuantityControls";
import Button from "../ui/Button/Button";
import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentProduct, selectProductsError, selectProductsLoading } from "../../redux/selectors";
import { fetchProductById } from "../../redux/petSlice";
import { addItemToCart } from "../../redux/cartSlice";

const ProductById = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const currentProduct = useSelector(selectCurrentProduct);
    const error = useSelector(selectProductsError);
    const isLoading = useSelector(selectProductsLoading);


  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

    useEffect(() => {
      if (productId) {
        dispatch(fetchProductById(productId));
      }
    }, [dispatch, productId]);

    const handleAddToCart = () => {
      if (!currentProduct) return;

      dispatch(
        addItemToCart({
          id: currentProduct.id,
          image: currentProduct.image,
          title: currentProduct.title,
          discont_price: currentProduct.discont_price,
          price: currentProduct.price,
          quantity,
        })
      );
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!currentProduct) return <div>Product not found</div>;

    const { image, title, discont_price, price, description } = currentProduct;

  return (
    <section className={css.productid}>
      <div className={css.container}>
        <div className={css.gridContainer}>
          
            <div className={css.imagesColumn}>
              <div className={css.thumbnail}>
                <img src={`http://localhost:3333${image}`} alt={title} />
              </div>
              <div className={css.thumbnail}>
                <img src={`http://localhost:3333${image}`} alt={title} />
              </div>
              <div className={css.thumbnail}>
                <img src={`http://localhost:3333${image}`} alt={title} />
              </div>
            </div>
         

          <div className={css.mainImage}>
            <img src={`http://localhost:3333${image}`} alt={title} />
          </div>

          <div className={css.productInfo}>
            <h1 className={css.productTitle}>{title}</h1>

            <div className={css.priceContainer}>
              {discont_price ? (
                <>
                  <span className={css.discountedPrice}>${discont_price}</span>
                  <span className={css.originalPrice}>${price}</span>
                  <span className={css.discountBadge}>
                    -{Math.round((1 - discont_price / price) * 100)}%
                  </span>
                </>
              ) : (
                <span className={css.price}>${price}</span>
              )}
            </div>

            <div className={css.actions}>
              <QuantityControls
                quantity={quantity}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
              <Button onClick={handleAddToCart} className={css.addToCartBtn}>
                Add to cart
              </Button>
            </div>

            <div className={css.description}>
              <h2 className={css.descriptionTitle}>Description</h2>
              <p className={css.descriptionText}>{description}</p>
              <button className={css.readMoreBtn}>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductById;
