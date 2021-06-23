// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class Header extends Component {
    render() {
        const subtitle = [];

        if (this.props.headerSubtitle) {
            subtitle.push(
                <h3
                    key={this.props.headerSubtitle}
                    className={"header__subtitle"}>
                    {this.props.headerSubtitle}
                </h3>,
            );
        }

        return (
            <header
                className={
                    this.props.lightModeOn
                        ? "header__container"
                        : "header__container--dark-mode"
                }>
                <h1
                    className={
                        this.props.lightModeOn
                            ? "header__main-title--other-pages"
                            : "header__main-title--other-pages--dark-mode"
                    }>
                    {"Arnaud De Baerdemaeker"}
                </h1>
                <div className={"header__title"}>
                    <h2>{this.props.headerTitle}</h2>
                    {subtitle}
                </div>
            </header>
        );
    }
}

export default hot(Header);
