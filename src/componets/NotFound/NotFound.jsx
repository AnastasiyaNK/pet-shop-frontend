import React from 'react'
import css from './NotFound.module.css'
import { Link } from 'react-router-dom'
import notFaundImg from '../../assets/images/404.png'
import { ROUTES } from '../../utils/routes'

const NotFound = () => {
  return (
    <section className={css.notFound}>
      <div className={css.container}>
        <div className={css.wrapp}>
          <img className={css.img} src={notFaundImg} alt="404" />
          <h1 className={css.title}>Page Not Found</h1>
          <p className={css.text}>
            We’re sorry, the page you requested could not be found. Please go
            back to the homepage.
          </p>
          <Link className={css.link} to={ROUTES.MAIN}>Go Home</Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound