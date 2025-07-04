import React, { useEffect } from 'react'
import css from './Categories.module.css'

import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories, selectCategoriesLoading } from '../../redux/selectors';
import { fetchCategoriesAll } from '../../redux/petSlice';
import { PulseLoader } from 'react-spinners';

const Categories = () => {
  const dispatch = useDispatch()
  const categories = useSelector(selectCategories) || [];
  const isLoading = useSelector(selectCategoriesLoading)

  const location = useLocation();
  const isHomePage = location.pathname === ROUTES.MAIN;
  
  

  useEffect(() => {
  dispatch(fetchCategoriesAll())
  }, [dispatch])


   if (isLoading) {
     return (
       <div className={css.spinnerContainer}>
         <PulseLoader color="#36d7b7" size={15} margin={2} />
       </div>
     );
   }
  
  const displayedCategories = isHomePage ? categories.slice(0, 4) : categories;
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
          {displayedCategories.map((category) => (
            <li key={category.id} className={css.itemCateries}>
              <Link
                className={css.linkToCategori}
                to={`${ROUTES.CATEGORIES}/${category.id}`}
              >
                <img
                  className={css.imgCateries}
                  src={`http://localhost:3333${category.image}`}
                  alt="dog"
                />
                <h3 className={css.itemTitleCateries}>{category.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Categories