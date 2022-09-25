import React from "react";
import "./index.scss";
import image from '../../assets/img/image.png'
import { Logo } from "./components/Logo";
import { Contacts } from "./components/Contacts";

export const Footer = () => {
    return (
        <section className="footer">
            <Logo/>
            <Contacts/>
            <img src={image} alt="" className="footer__img" />
        </section>
    )
}