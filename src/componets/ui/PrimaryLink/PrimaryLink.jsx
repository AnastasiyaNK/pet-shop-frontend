import React from 'react'
import { Link } from 'react-router-dom'
import css from './PrimaryLink.module.css'

const PrimaryLink = ({children, to}) => {
  return (
    <Link className={css.primaryLink} to={to}>
      {children}
    </Link>
  );
}

export default PrimaryLink