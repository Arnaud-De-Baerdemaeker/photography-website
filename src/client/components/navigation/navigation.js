// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {NavLink} from "react-router-dom";

class Navigation extends Component {
    render() {
        const location = window.location.toString();
        // Change target's value when the website goes online
        const target = "http://localhost:8080/";

        return (
            <nav
                className={
                    location === target
                        ? "menu__container--home-page"
                        : "menu__container--other-pages"
                }>
                <ul className={"menu__list"}>
                    <li className={"menu__list-item"}>
                        <NavLink
                            to={"/"}
                            // Allows to exactly match the url set in the "to" attribute
                            exact={true}
                            // Class name that is active only when the page is active
                            activeClassName={"menu__link--active"}
                            className={"menu__link"}>
                            <i className={"material-icons"}>{"home"}</i>
                        </NavLink>
                    </li>
                    <li className={"menu__list-item"}>
                        <NavLink
                            to={"/gallery"}
                            // Class name that is active only when the page is active
                            activeClassName={"menu__link--active"}
                            className={"menu__link"}>
                            <i className={"material-icons"}>
                                {"photo_library"}
                            </i>
                        </NavLink>
                    </li>
                    <li className={"menu__list-item"}>
                        <NavLink
                            to={"/about"}
                            // Class name that is active only when the page is active
                            activeClassName={"menu__link--active"}
                            className={"menu__link"}>
                            <i className={"material-icons"}>{"person"}</i>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default hot(Navigation);
