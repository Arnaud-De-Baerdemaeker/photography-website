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
        // const targetLocal = "http://192.168.0.10:8080/";
        const targetOnline = "https://arnaud-de-baerdemaeker.netlify.app/";

        return (
            <nav
                className={
                    location === targetOnline //targetLocal
                        ? "menu__container--homepage"
                        : this.props.lightModeOn
                        ? "menu__container--other-pages"
                        : "menu__container--other-pages--dark-mode"
                }>
                <button
                    type={"button"}
                    onClick={this.props.onHandleMode}
                    className={"menu__toggle-button"}>
                    {/* Button to change the icon depending of the state of the night mode */}
                    <i
                        className={
                            this.props.lightModeOn
                                ? "material-icons"
                                : "material-icons dark-mode"
                        }>
                        {this.props.lightModeOn ? "light_mode" : "dark_mode"}
                    </i>
                </button>
                <ul className={"menu__list"}>
                    <li className={"menu__list-item"}>
                        <NavLink
                            to={"/"}
                            // Allows to exactly match the url set in the "to" attribute
                            exact={true}
                            // Class name that is active only when the page is active
                            activeClassName={"menu__link--active"}
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
                            // Class name that is active only when the page is active
                            activeClassName={"menu__link--active"}
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
                            // Class name that is active only when the page is active
                            activeClassName={"menu__link--active"}
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
