import React from "react";
import { CardsField } from "./components/CardsField";
import { Search } from "./components/Search";
import { ValueCards } from "./components/ValueCards";
import "./index.scss";

export const Content = ({card, searchCard, setSearchCard, filterRegion, setFilterRegion, onSearch}) => {
    return (
        <section className="content">
            <Search onSearch={onSearch} searchCard={searchCard} setSearchCard={setSearchCard} filterRegion={filterRegion} setFilterRegion={setFilterRegion}/>
            <ValueCards card={card}/>
            <CardsField card={card}/>
        </section>
    )
}