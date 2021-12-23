// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {NavLink} from "react-router-dom";
import Button from "../button/button";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
    render() {
        return (
            <header
                className={
                    this.props.isMenuOpen ? "header" : "header gradient"
                }>
                {this.props.fullName ? (
                    <h1 className={"header__title"}>
                        <NavLink
                            to={"/"}
                            exact={true}
                            handleClick={this.props.closeMenu}
                            className={"header__link"}>
                            {this.props.fullName.firstName}
                            <br />
                            {this.props.fullName.lastName}
                        </NavLink>
                    </h1>
                ) : null}
                {/* Button to open/close the menu */}
                <Button
                    function={this.props.toggleMenu}
                    icon={this.props.isMenuOpen ? faTimes : faBars}
                    alt={
                        this.props.isMenuOpen
                            ? "Fermer le menu"
                            : "Ouvrir le menu"
                    }
                    class={"button__menu"}
                />
            </header>
        );
    }
}

export default hot(Header);
