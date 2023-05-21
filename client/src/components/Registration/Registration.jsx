import React, { useState } from "react";
import Input from "../../utils/Input/Input";
import "./Registration.scss";
import "../../App.scss";
import { registration } from "../../actions/user";
const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  return (
    <div className="registration">
      <div className="registration__form">
        <div className="registration__title">Регистрация</div>
        {/* <div className="form-input">
          <Input type="text" placeholder="Имя" />
        </div>
        <div className="form-input">
          <Input type="text" placeholder="Фамилия" />
        </div> */}
        <div className="form-input">
          <Input
            value={email}
            setValue={setEmail}
            type="email"
            placeholder="E-mail"
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
        <div className="form-input">
          <Input
            value={repeatPassword}
            setValue={setRepeatPassword}
            type="password"
            placeholder="Повторите пароль"
          />
        </div>

        <div className="registation__btn btn">
          <button
            onClick={() => {
              repeatPassword === password
                ? registration(email, password)
                : alert("Пароли не совпадает");
            }}
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
