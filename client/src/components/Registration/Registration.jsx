import React, { useState } from "react";
import Input from "../../utils/Input/Input";
import "./Registration.scss";
import "../../App.scss";
import { registration } from "../../actions/user";
const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

        <div className="registation__btn btn">
          <button onClick={() => registration(email, password)}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
