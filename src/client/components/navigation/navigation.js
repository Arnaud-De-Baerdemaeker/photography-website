// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {NavLink} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <nav className={"menu__container"}>
                <ul className={"menu__list"}>
                    <li className={"menu__list-item"}>
                        <NavLink
                            to={"/"}
                            // Allows to exactly match the url set in the "to" attribute
                            exact={true}
                            // Class name that is active only when the page is active
                            activeClassName={"menu__link--active"}
                            className={"menu__link"}>
                            {"ACCUEIL"}
                        </NavLink>
                    </li>
                    <li className={"menu__list-item"}>
                        <NavLink
                            to={"/gallery"}
                            // Class name that is active only when the page is active
                            activeClassName={"menu__link--active"}
                            className={"menu__link"}>
                            {"GALERIE"}
                        </NavLink>
                    </li>
                    <li className={"menu__list-item"}>
                        <NavLink
                            to={"/about"}
                            // Class name that is active only when the page is active
                            activeClassName={"menu__link--active"}
                            className={"menu__link"}>
                            {"À PROPOS"}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default hot(Navigation);
