import React, { useState } from "react";
import "./Navbar.scss";
import { CustomLink } from "../CustomLink/CustomLink";
import Logo from "../../assets/img/cloud-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";
import { getFiles, searchFiles } from "../../actions/file";
import { showLoader } from "../../reducers/appReducer";
const Navbar = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const currentDir = useSelector((state) => state.file.currentDir);
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(false);
  function searchChangeHandler(event) {
    setSearchName(event.target.value);
    if (searchTimeout !== false) {
      clearTimeout(searchTimeout);
    }
    dispatch(showLoader());
    if (event.target.value !== "") {
      setSearchTimeout(
        setTimeout(
          (value) => {
            dispatch(searchFiles(value));
          },
          500,
          event.target.value
        )
      );
    } else {
      dispatch(getFiles(currentDir));
    }
  }
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo-box">
          <img src={Logo} alt="Logo" className="navbar__logo" />
          <div className="navbar__title">Cloud</div>
          {isAuth && (
            <input
              value={searchName}
              onChange={(event) => searchChangeHandler(event)}
              className="navbar__search"
              type="text"
              placeholder="Название файла..."
            />
          )}
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
