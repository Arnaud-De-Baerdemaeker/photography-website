/* eslint-disable class-methods-use-this */
import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className={this.props.onHomePage ? "menu--home-page" : "menu--other-pages"}>
                <nav className={this.props.onHomePage ? "menu__navigation--home-page" : "menu__navigation--other-pages"}>
                    <ul className={this.props.onHomePage ? "menu__list--home-page" : "menu__list--other-pages"}>
                        <li className={this.props.onHomePage ? "menu__list-item--home-page" : "menu__list-item--other-pages"}>
                            <NavLink
                                to="/"
                                onClick={this.props.changeState}
                                className={this.props.onHomePage ? "menu__link--home-page" : "menu__link--other-pages"}
                                activeClassName={"menu__link--disabled"}
                            >{"ACCUEIL"}</NavLink>
                        </li>
                        <li className={this.props.onHomePage ? "menu__list-item--home-page" : "menu__list-item--other-pages"}>
                            <NavLink
                                to="/gallery"
                                onClick={this.props.changeState}
                                className={this.props.onHomePage ? "menu__link--home-page" : "menu__link--other-pages"}
                                activeClassName={"menu__link--disabled"}
                            >{"GALERIE"}</NavLink>
                        </li>
                        <li className={this.props.onHomePage ? "menu__list-item--home-page" : "menu__list-item--other-pages"}>
                            <NavLink
                                to="/about"
                                onClick={this.props.changeState}
                                className={this.props.onHomePage ? "menu__link--home-page" : "menu__link--other-pages"}
                                activeClassName={"menu__link--disabled"}
                            >{"À PROPOS"}</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default hot(Header);
