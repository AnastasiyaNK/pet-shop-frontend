import React from 'react'
import { NavLink } from 'react-router-dom'
import cartImg from '../../assets/images/basket-empty.svg'
import logo from '../../assets/images/pet-logo.svg'
import css from './Header.module.css'

const Header = () => {
  return (
    <div className={css.headerContainer}>
      <nav className={css.nav}>
        <div className={css.logoWrapp}>
          <NavLink to="/">
            <img className={css.logo} src={logo} alt="logo" />
          </NavLink>
        </div>

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
        >
          Main Page
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
        >
          Categories
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
        >
          All products
        </NavLink>
        <NavLink
          to="/sales"
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
        >
          All sales
        </NavLink>
        <div className={css.cartWrapp}>
          <NavLink to="/shopping">
            <img className={css.cartImg} src={cartImg} alt="cart" />
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header