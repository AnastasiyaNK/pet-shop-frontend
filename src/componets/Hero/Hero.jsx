import React from 'react'
import css from './Hero.module.css'

const Hero = () => {
    return (
      <div className={css.heroContainer}>
        <section className={css.hero}>
          <div className={css.heroContent}>
            <h1 className={css.heroTitle}>
              Amazing Discounts o Pets Products!
            </h1>
            <button className={css.heroButton}>Check out</button>
          </div>
        </section>
      </div>
    );
}

export default Hero