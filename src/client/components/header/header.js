/* eslint-disable class-methods-use-this */
import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        const url = window.location.toString();
        const path = "http://localhost:8080/";

        return (
            <header className={url === path ? "menu--home-page" : "menu--other-pages"}>
                <nav className={url === path ? "menu__navigation--home-page" : "menu__navigation--other-pages"}>
                    <ul className={url === path ? "menu__list--home-page" : "menu__list--other-pages"}>
                        <li className={url === path ? "menu__list-item--home-page" : "menu__list-item--other-pages"}>
                            <NavLink
                                to="/"
                                exact={true}
                                activeClassName={"menu__link--active"}
                                className={url === path ? "menu__link--home-page" : "menu__link--other-pages"}
                            >{"ACCUEIL"}</NavLink>
                        </li>
                        <li className={url === path ? "menu__list-item--home-page" : "menu__list-item--other-pages"}>
                            <NavLink
                                to="/gallery"
                                activeClassName={"menu__link--active"}
                                className={url === path ? "menu__link--home-page" : "menu__link--other-pages"}
                            >{"GALERIE"}</NavLink>
                        </li>
                        <li className={url === path ? "menu__list-item--home-page" : "menu__list-item--other-pages"}>
                            <NavLink
                                to="/about"
                                activeClassName={"menu__link--active"}
                                className={url === path ? "menu__link--home-page" : "menu__link--other-pages"}
                            >{"À PROPOS"}</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default hot(Header);
