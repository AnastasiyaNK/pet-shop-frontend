import React from 'react'
import css from './Hero.module.css'
import { Link } from 'react-router-dom';
import Button from '../ui/Button/Button';
import { ROUTES } from '../../utils/routes';

const Hero = () => {
    return (
      <div className={css.heroContainer}>
        <section className={css.hero}>
          <div className={css.heroContent}>
            <h1 className={css.heroTitle}>
              Amazing Discounts <br /> on Pets Products!
            </h1>
            <Link className={css.link} to={ROUTES.SALES}>
              <Button>Check out</Button>
            </Link>

          </div>
        </section>
      </div>
    );
}

export default Hero