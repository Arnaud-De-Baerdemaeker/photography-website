// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class Header extends Component {
    render() {
        return (
            <header className={"header"}>
                <h2 className={"header__title"}>{this.props.headerTitle}</h2>
            </header>
        );
    }
}

export default hot(Header);
