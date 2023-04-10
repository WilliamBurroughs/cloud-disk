import React from "react";
import "./Footer.scss";
import Logo from "../../assets/img/logo-rgu 1.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faGithub);
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__title">
          <FontAwesomeIcon icon={faUserGraduate} size="2x" />{" "}
          <div className="">Дипломная работа: Герасимова Никиты</div>
        </div>
        <div className="footer__info">
          <FontAwesomeIcon icon="fa-brands fa-github" size="2x" />
          <div className="name">/WilliamBurroughs </div>
        </div>
        <div className="footer__pic">
          <img src={Logo} alt="Ргу" className="footer__logo" />
          <div className="footer__uni">РГУ Нефти и Газа</div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
