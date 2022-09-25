import React from "react";
import "./index.scss";
import searchIcon from "../../assets/icon/search.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <section className="header">
      <Link to="#" className="header__link">
        Реестр объектов нематериального культурного наследия народов россии
      </Link>
      <div className="header__search">
        <input
          placeholder="Поиск"
          type="search"
          name=""
          id=""
          className="header__search-input"
        />
        <button className="btn btn_srch">
          <img className="header__search-icon" src={searchIcon} alt="" />
        </button>
      </div>
    </section>
  );
};
