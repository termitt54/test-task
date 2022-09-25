import React from "react";
import './index.scss';

export const Pagination = () => {
    return (
        <div className="pagination card__pagination">
            <div className="pagination__prev"></div>
            <div className="pagination__page pagination__page_current">1</div>
            <div className="pagination__page">2</div>
            <div className="pagination__page">3</div>
            <div className="pagination__page">4</div>
            <div className="pagination__page">5</div>
            <div className="pagination__next pagination__next_active"></div>
        </div>
    )
}