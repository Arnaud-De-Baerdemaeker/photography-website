// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {NavLink} from "react-router-dom";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lightModeOn: true,
        };
        this.handleMode = this.handleMode.bind(this);
    }

    handleMode() {
        this.setState(state => ({
            lightModeOn: !state.lightModeOn,
        }));
    }

    render() {
        const location = window.location.toString();
        // Change target's value when the website goes online
        //const targetLocal = "http://192.168.0.10:8080/";
        const targetOnline = "https://arnaud-de-baerdemaeker.netlify.app/";

        return (
            <nav
                className={
                    location === targetOnline
                        ? "menu__container--homepage"
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
                <button
                    type={"button"}
                    onClick={this.handleMode}
                    className={"menu__toggle-button"}>
                    {this.state.lightModeOn ? (
                        <i className={"material-icons toggle-button__icon"}>
                            {"light_mode"}
                        </i>
                    ) : (
                        <i className={"material-icons toggle-button__icon"}>
                            {"dark_mode"}
                        </i>
                    )}
                </button>
            </nav>
        );
    }
}

export default hot(Navigation);
