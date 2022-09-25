import React from "react";
import { Filter } from "./components/Filter";
import { Top } from "./components/Top";
import "./index.scss";

export const Search = ({ searchCard, setSearchCard, filterRegion, setFilterRegion, onSearch}) => {
    return (
        <div className="search content__search">
            <Top searchCard={searchCard} setSearchCard={setSearchCard}/>
            <Filter filterRegion={filterRegion} setFilterRegion={setFilterRegion}/>
            <button onClick={onSearch} className="btn btn_search">Поиск</button>
        </div>
    )
}