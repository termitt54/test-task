import React from "react";
import "./index.scss";
import logo from '../../../../assets/img/logo.png'
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="#" className="logo footer__logo">
      <img src={logo} alt="" className="logo__img" />
      <div className="logo__title">Государственный Российский Дом народного творчества имени В.Д. Поленова</div>
    </Link>
  );
};
