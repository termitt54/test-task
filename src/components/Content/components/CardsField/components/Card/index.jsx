import React from "react";
import { CardControls } from "./components/CardControls";
import "./index.scss";
import location from "../../../../../../assets/icon/location.svg"

export const Card = ({ card }) => {
  return (
    <>
      {card.map((item) => {
        return (
          <div key={item.id} className="card cards__field-card">
            <div className="card__img"><img src={item.img} alt="" /></div>
            <div className="card__info">
              <div className="card__title">{item.title}</div>
              <div className="card__geoposition"><img className="card__icon" src={location} alt="" /> {item.geoposition}</div>
              <CardControls/>
            </div>
          </div>
        );
      })}
    </>
  );
};
