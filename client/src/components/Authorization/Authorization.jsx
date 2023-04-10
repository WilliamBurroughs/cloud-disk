import React, { useState } from "react";
import Input from "../../utils/Input/Input";
import "./Authorization.scss";
import "../../App.scss";
import { login } from "../../actions/user";
import { useDispatch } from "react-redux";
// import { authorization } from "../../actions/user";
const Authorization = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="authorization">
      <div className="authorization__form">
        <div className="authorization__title">Вход</div>
        <div className="form-input">
          <Input
            value={email}
            setValue={setEmail}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="form-input">
          <Input
            value={password}
            setValue={setPassword}
            type="password"
            placeholder="Пароль"
          />
        </div>

        <div className="authorization__btn btn">
          <button onClick={() => dispatch(login(email, password))}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
