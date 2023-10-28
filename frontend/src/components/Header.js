import React from "react";
import logo from '../images/logo.svg';
import { Link, useLocation, NavLink } from "react-router-dom";

function Header({ onLogOut, email }) {

  const location = useLocation();

  return (
    <header className="header content">
      <img src={logo} alt="Логотип Место" className="header__logo" />

      {location.pathname === "/signin" ? (<div className="header__container-button-link">
        <NavLink className='header__link' to='/signup'>Регистрация</NavLink> </div>) : null
      }

      {location.pathname === '/signup' ? (<div className="header__container-button-link">
        <Link className='header__link' to='/signin'>Войти</Link> </div>) : null}

      {location.pathname === '/' ? (
        <div className="header__container-button-link">
          <p className='header__email'>{email}</p>
          <Link className='header__logout' onClick={onLogOut}>Выйти</Link> </div>) : null
      }
    </header>
  )
}

export default Header;
