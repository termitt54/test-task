import React from "react";
import "./index.scss";
import searchIcon from "..//../../../../../assets/icon/search.svg";

export const Top = ({ searchCard, setSearchCard}) => {
  return (
    <div className="top search__top">
      <div className="top__text">
        <div className="top__text-subtitle">Главная</div>
        <div className="top__text-title">Расширенный поиск</div>
      </div>
      <div className="top__input">
        <input
          value={searchCard}
          onChange={(e) => setSearchCard(e.target.value)}
          placeholder="Контекстный поиск"
          type="search"
          name=""
          id=""
          className="top__input-search"
        />
        <button className="btn btn_srch">
          <img src={searchIcon} alt="" />
        </button>
      </div>
    </div>
  );
};
