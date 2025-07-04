import React from 'react'
import css from './Loader.module.css'
import { PulseLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <PulseLoader color="#36d7b7" size={15} margin={2} />
    </div>
  );
}

export default Loader