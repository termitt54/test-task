import React from "react";
import { Card } from "./components/Card";
import { Pagination } from "./components/Pagination";
import "./index.scss";

export const CardsField = ({card}) => {
    return(
        <div className="cards-field content__cards-field">
            {card.length 
            ? 
                <Card card={card}/>
            : 
                <div className="cards-field__empty">По Вашему запросу ничего не найдено</div>
        }
            <Pagination/>
        </div>
    )
}