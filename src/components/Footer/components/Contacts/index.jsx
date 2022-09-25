import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export const Contacts = () => {
  return (
    <Link to="#" className="contacts footer__contacts">
      <div className="contacts__title">Контакты</div>
      <div className="contacts__address">Москва, Сверчков пер., 8, стр. 3.</div>
      <div className="contacts__number">Тел.: +7 495 628-40-87</div>
    </Link>
  );
};
