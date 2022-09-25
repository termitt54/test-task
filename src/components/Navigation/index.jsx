import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export const Navigation = () => {
    const navLink = [
        {
            title: 'Статистика',
            href: '#'
        },
        {
            title: 'Документы',
            href: '#'
        },
        {
            title: 'Экспертный совет',
            href: '#'
        },
        {
            title: 'Публикации',
            href: '#'
        },
        {
            title: 'О проекте',
            href: '#'
        },
    ]
    return (
        <section className="navbar">
            <nav className="nav navbar__nav">
                {navLink.map(item => {
                    return (
                        <Link to={item.href} className="nav__link">{item.title}</Link>
                    )
                })}
            </nav>
        </section>
    )
}