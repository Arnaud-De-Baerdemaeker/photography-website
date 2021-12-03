// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {NavLink} from "react-router-dom";

class Navigation extends Component {
    render() {
        const location = window.location.toString();
        const local = "http://192.168.0.10:4000/";
        const online = "https://arnaud-de-baerdemaeker.netlify.app/";
        const lightModeOn = this.props.lightModeOn;

        function setNavBarClassName() {
            if (location === local || location === online) {
                return "menu__container--homepage";
            }
            if (lightModeOn === true) {
                return "menu__container--other-pages";
            }
            return "menu__container--other-pages dark-mode";
        }

        return (
            <nav className={setNavBarClassName()}>
                <ul className={"menu__list"}>
                    <li className={"menu__list-item"}>
                        <NavLink
                            to={"/"}
                            exact={true} // Allows to exactly match the url set in the "to" attribute
                            activeClassName={"menu__link--active"} // Class name that is active only when the page is active
                            className={"menu__link"}>
                            <i
                                className={
                                    this.props.lightModeOn
                                        ? "material-icons"
                                        : "material-icons dark-mode"
                                }>
                                {"home"}
                            </i>
                        </NavLink>
                    </li>
                    <li className={"menu__list-item"}>
                        <NavLink
                            to={"/gallery"}
                            activeClassName={"menu__link--active"} // Class name that is active only when the page is active
                            className={"menu__link"}>
                            <i
                                className={
                                    this.props.lightModeOn
                                        ? "material-icons"
                                        : "material-icons dark-mode"
                                }>
                                {"photo_library"}
                            </i>
                        </NavLink>
                    </li>
                    <li className={"menu__list-item"}>
                        <NavLink
                            to={"/about"}
                            activeClassName={"menu__link--active"} // Class name that is active only when the page is active
                            className={"menu__link"}>
                            <i
                                className={
                                    this.props.lightModeOn
                                        ? "material-icons"
                                        : "material-icons dark-mode"
                                }>
                                {"emoji_people"}
                            </i>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default hot(Navigation);
