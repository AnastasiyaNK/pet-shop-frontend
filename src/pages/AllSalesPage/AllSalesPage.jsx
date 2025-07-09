import css from "./AllSalesPage.module.css";

import CardProduct from "../../componets/CardProduct/CardProduct";
import Filter from "../../componets/Filter/Filter";
import { calculateDiscountPercent } from "../../utils/helpers";
import { useSelector } from "react-redux";
import { selectFilteredProducts } from "../../redux/selectors";

const AllSalesPage = () => {
  const allProducts = useSelector(selectFilteredProducts);

  const saleProducts = allProducts.filter(
    (product) => product.discont_price !== null
  );

  return (
    <section className={css.sale}>
      <div className={css.container}>
        <h2 className={css.secondTitle}>All sale</h2>
        <Filter withoutDiscount />
        <ul className={css.list}>
          {saleProducts.map(({ id, image, title, discont_price, price }) => {
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
};

export default AllSalesPage;
