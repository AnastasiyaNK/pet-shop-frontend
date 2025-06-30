import React from 'react'
import css from './Categories.module.css'
import dogImg from '../../assets/images/dog.jpg'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const Categories = () => {
  return (
    <section className={css.categories}>
      <div className={css.container}>
        <div className={css.titleWrapp}>
          <h2 className={css.secondTitle}>Categoris</h2>
          <div className={css.devider}></div>
          <Link className={css.primaryLink} to={ROUTES.CATEGORIES}>
            All categories
          </Link>
        </div>
        <ul className={css.listCateries}>
          <li className={css.itemCateries}>
            <img className={css.imgCateries} src={dogImg} alt="dog" />
            <h3 className={css.itemTitleCateries}>Dry & Wet Food</h3>
          </li>
          <li className={css.itemCateries}>
            <img className={css.imgCateries} src={dogImg} alt="dog" />
            <h3 className={css.itemTitleCateries}>Dry & Wet Food</h3>
          </li>
          <li className={css.itemCateries}>
            <img className={css.imgCateries} src={dogImg} alt="dog" />
            <h3 className={css.itemTitleCateries}>Dry & Wet Food</h3>
          </li>
          <li className={css.itemCateries}>
            <img className={css.imgCateries} src={dogImg} alt="dog" />
            <h3 className={css.itemTitleCateries}>Dry & Wet Food</h3>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Categories