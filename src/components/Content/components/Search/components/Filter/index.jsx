import React from "react";
import "./index.scss";

export const Filter = ({filterRegion, setFilterRegion}) => {
    return (
        <div className="filter search__filter">
            <select className="filter__select" name="" id="">
                <option selected value="Все этносы">Все этносы</option>
            </select>

            <select className="filter__select" name="" id="">
                <option selected value="Все категории">Все категории</option>
            </select>

            <select value={filterRegion} onChange={(e) => setFilterRegion(e.target.value)} className="filter__select" name="" id="">
                <option selected value="Все регионы">Все регионы</option>
                <option value="Сахалинская область">Сахалинская область</option>
                <option value="Вологодская область">Вологодская область</option>
                <option value="Волгоградская область">Волгоградская область</option>
                <option value="Липецкая область">Липецкая область</option>
                <option value="Смоленская область">Смоленская область</option>
            </select>

            <select className="filter__select" name="" id="">
                <option selected value="Все языки">Все языки</option>
            </select>

            <select className="filter__select" name="" id="">
                <option selected value="Все теги">Все теги</option>
            </select>

            <select className="filter__select" name="" id="">
                <option selected value="Все авторы">Все авторы</option>
            </select>
        </div> 
    )
}