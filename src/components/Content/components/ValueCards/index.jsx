import React from "react";
import "./index.scss";

export const ValueCards = ({card}) => {
    return (
        <div className="value-cards content__value-cards">
            Всего объектов: {card.length}
        </div>
    )
}