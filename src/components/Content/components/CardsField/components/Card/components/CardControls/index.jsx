import React from "react";
import "./index.scss";
import info from "../../../../../../../../assets/icon/info.svg"
import photo from "../../../../../../../../assets/icon/photo.svg"
import play from "../../../../../../../../assets/icon/play.svg"
import volume from "../../../../../../../../assets/icon/volume.svg"
import geoposition from "../../../../../../../../assets/icon/geoposition.svg"
import { Link } from "react-router-dom";

export const CardControls = () => {
    return (
        <div className="controls card__controls">
            <Link to="#" className="controls__link"><img className="controls__icon" src={info} alt="" /></Link>
            <Link to="#" className="controls__link"><img className="controls__icon" src={photo} alt="" /></Link>
            <Link to="#" className="controls__link"><img className="controls__icon" src={play} alt="" /></Link>
            <Link to="#" className="controls__link"><img className="controls__icon" src={volume} alt="" /></Link>
            <Link to="#" className="controls__link"><img className="controls__icon" src={geoposition} alt="" /></Link>
        </div>
    )
}