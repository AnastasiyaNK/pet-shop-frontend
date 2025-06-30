import React from 'react'
import css from './Cta.module.css'
import CallToActionForm from '../CallToActionForm/CallToActionForm';

const Cta = () => {
  return (
    <section className={css.cta}>
      <div className={css.container}>
        <div className={css.card}>
          <h2 className={css.titleCta}>5% off on the first order</h2>
          <div className={css.formWrapp}>
            <CallToActionForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta