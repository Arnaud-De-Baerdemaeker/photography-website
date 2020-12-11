/* eslint-disable class-methods-use-this */
import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {NavLink} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // Recover and store the current url of the page
            url: window.location.toString(),
            // Store a target url
            path: "http://localhost:8080/",
        };
    }

    render() {
        return (
            // The 2 previous constants are compared against each other to know which CSS class to render following the page rendered
            <header
                className={
                    this.state.url === this.state.path
                        ? "menu--home-page"
                        : "menu--other-pages"
                }>
                <nav
                    className={
                        this.state.url === this.state.path
                            ? "menu__navigation--home-page"
                            : "menu__navigation--other-pages"
                    }>
                    <ul
                        className={
                            this.state.url === this.state.path
                                ? "menu__list--home-page"
                                : "menu__list--other-pages"
                        }>
                        <li
                            className={
                                this.state.url === this.state.path
                                    ? "menu__list-item--home-page"
                                    : "menu__list-item--other-pages"
                            }>
                            <NavLink
                                to={"/"}
                                // Allows to exactly match the url set in the "to" attribute
                                exact={true}
                                // Class name that is active only when the page is active
                                activeClassName={"menu__link--active"}
                                className={
                                    this.state.url === this.state.path
                                        ? "menu__link--home-page"
                                        : "menu__link--other-pages"
                                }>
                                {"ACCUEIL"}
                            </NavLink>
                        </li>
                        <li
                            className={
                                this.state.url === this.state.path
                                    ? "menu__list-item--home-page"
                                    : "menu__list-item--other-pages"
                            }>
                            <NavLink
                                to={"/gallery"}
                                activeClassName={"menu__link--active"}
                                className={
                                    this.state.url === this.state.path
                                        ? "menu__link--home-page"
                                        : "menu__link--other-pages"
                                }>
                                {"GALERIE"}
                            </NavLink>
                        </li>
                        <li
                            className={
                                this.state.url === this.state.path
                                    ? "menu__list-item--home-page"
                                    : "menu__list-item--other-pages"
                            }>
                            <NavLink
                                to={"/about"}
                                activeClassName={"menu__link--active"}
                                className={
                                    this.state.url === this.state.path
                                        ? "menu__link--home-page"
                                        : "menu__link--other-pages"
                                }>
                                {"À PROPOS"}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default hot(Header);
