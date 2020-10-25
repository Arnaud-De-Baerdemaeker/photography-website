/* eslint-disable class-methods-use-this */
import React from "react";
import {hot} from "react-hot-loader/root";
import Nav from "./nav";

class Header extends React.Component {
    render() {
        return (
            <header className={"menu"}>
                <Nav />
            </header>
        );
    }
}

export default hot(Header);
