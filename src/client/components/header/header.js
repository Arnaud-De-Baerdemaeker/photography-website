// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class Header extends Component {
    render() {
        return (
            <header className={"header__container"}>
                <h1 className={"header__main-title--other-pages"}>
                    {"Arnaud De Baerdemaeker"}
                </h1>
                <h2>{this.props.inputs.headerTitle}</h2>
            </header>
        );
    }
}

export default hot(Header);
