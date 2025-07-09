import React from "react";
import css from "./Sale.module.css";
import { ROUTES } from "../../utils/routes";


import CardProduct from "../CardProduct/CardProduct";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/selectors";
import PrimaryLink from "../ui/PrimaryLink/PrimaryLink";
import { calculateDiscountPercent } from "../../utils/helpers";

const Sale = () => {
  const allProducts = useSelector(selectProducts);
   const saleProducts = allProducts
     .filter((product) => product.discont_price !== null)
     .slice(0, 4);
  
  
 

  return (
    <section className={css.sale}>
      <div className={css.container}>
        <div className={css.titleWrapp}>
          <h2 className={css.secondTitle}>Sale</h2>
          <div className={css.devider}></div>
          <PrimaryLink to={ROUTES.SALES}>All sales</PrimaryLink>
        </div>
        <ul className={css.listSale}>
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

export default Sale;
