import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import cartImg from '../../assets/images/basket-empty.svg'
import logo from '../../assets/images/pet-logo.svg'
import css from './Header.module.css'
import { useSelector } from 'react-redux'
import { selectTotalQuantity } from '../../redux/selectors'
import { MenuOutlined } from '@ant-design/icons'
import { Drawer, Menu } from 'antd'

const Header = () => {
  const totalQuantity = useSelector(selectTotalQuantity);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const menuItems = [
    {
      key: "home",
      label: (
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
          onClick={onClose}
        >
          Main Page
        </NavLink>
      ),
    },
    {
      key: "categories",
      label: (
        <NavLink
          to="/categories"
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
          onClick={onClose}
        >
          Categories
        </NavLink>
      ),
    },
    {
      key: "products",
      label: (
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
          onClick={onClose}
        >
          All products
        </NavLink>
      ),
    },
    {
      key: "sales",
      label: (
        <NavLink
          to="/sales"
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
          onClick={onClose}
        >
          All sales
        </NavLink>
      ),
    },
    {
      key: "cart",
      label: (
        <NavLink
          to="/shopping"
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
          onClick={onClose}
        >
          Shopping Cart
        </NavLink>
      ),
    },
  ];

  return (
    <div className={css.headerContainer}>
      <nav className={css.nav}>
        <div className={css.logoWrapp}>
          <NavLink to="/">
            <img className={css.logo} src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className={css.desktopNav}>
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
        </div>
        <div className={css.cartWrapp}>
          <NavLink className={css.linkShop} to="/shopping">
            <img className={css.cartImg} src={cartImg} alt="cart" />
            {totalQuantity > 0 && (
              <div className={css.counterWrapp}>{totalQuantity}</div>
            )}
          </NavLink>
        </div>

        <div className={css.mobileMenuIcon} onClick={showDrawer}>
          <MenuOutlined style={{ fontSize: "24px" }} />
        </div>
      </nav>
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={open}
        width={250}
      >
        <Menu
          mode="vertical"
          style={{ borderRight: "none" }}
          items={menuItems}
        />
      </Drawer>
    </div>
  );
};

export default Header