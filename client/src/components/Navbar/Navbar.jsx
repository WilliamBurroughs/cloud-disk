import React from "react";
import "./Navbar.scss";
import { CustomLink } from "../CustomLink/CustomLink";
import Logo from "../../assets/img/cloud-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";
const Navbar = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo-box">
          <img src={Logo} alt="Logo" className="navbar__logo" />
          <div className="navbar__title">Cloud</div>
        </div>
        <div className="navbar__menu">
          <ul className="navbar__list">
            <CustomLink to="/registration">
              {!isAuth && (
                <li className="navbar__item navbar__link">Регистрация</li>
              )}
            </CustomLink>
            <CustomLink to="/login">
              {!isAuth && <li className="navbar__item">Войти</li>}
            </CustomLink>
            {isAuth && (
              <li className="navbar__item" onClick={() => dispatch(logout())}>
                Выход
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
