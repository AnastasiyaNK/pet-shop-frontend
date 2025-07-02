import React from "react";
import css from "./Sale.module.css";
import { ROUTES } from "../../utils/routes";
import seleimg from "../../assets/images/sale.jpg";
import { Link } from "react-router-dom";

const Sale = () => {
  return (
    <section className={css.sale}>
      <div className={css.container}>
        <div className={css.titleWrapp}>
          <h2 className={css.secondTitle}>Sale</h2>
          <div className={css.devider}></div>
          <Link className={css.primaryLink} to={ROUTES.SALES}>
            All sales
          </Link>
        </div>
        <ul className={css.listSale}>
          <li className={css.itemSale}>
            <div className={css.discountsWrapp}>
              <img className={css.imgSale} src={seleimg} alt="dog" />
              <div className={css.discounts}>-50%</div>
            </div>

            <div className={css.cardWrapp}>
              <h3 className={css.itemTitleSale}>Dry Dog Food for Adult </h3>
              <div className={css.priceWrapp}>
                <span className={css.price}>$ 80</span>
                <span className={css.pricesale}>$ 100</span>
              </div>
            </div>
          </li>
          <li className={css.itemSale}>
            <div className={css.discountsWrapp}>
              <img className={css.imgSale} src={seleimg} alt="dog" />
              <div className={css.discounts}>-50%</div>
            </div>

            <div className={css.cardWrapp}>
              <h3 className={css.itemTitleSale}>Dry Dog Food for Adult </h3>
              <div className={css.priceWrapp}>
                <span className={css.price}>$ 80</span>
                <span className={css.pricesale}>$ 100</span>
              </div>
            </div>
          </li>
          <li className={css.itemSale}>
            <div className={css.discountsWrapp}>
              <img className={css.imgSale} src={seleimg} alt="dog" />
              <div className={css.discounts}>-50%</div>
            </div>

            <div className={css.cardWrapp}>
              <h3 className={css.itemTitleSale}>Dry Dog Food for Adult </h3>
              <div className={css.priceWrapp}>
                <span className={css.price}>$ 80</span>
                <span className={css.pricesale}>$ 100</span>
              </div>
            </div>
          </li>
          <li className={css.itemSale}>
            <div className={css.discountsWrapp}>
              <img className={css.imgSale} src={seleimg} alt="dog" />
              <div className={css.discounts}>-50%</div>
            </div>

            <div className={css.cardWrapp}>
              <h3 className={css.itemTitleSale}>Dry Dog Food for Adult </h3>
              <div className={css.priceWrapp}>
                <span className={css.price}>$ 80</span>
                <span className={css.pricesale}>$ 100</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sale;
