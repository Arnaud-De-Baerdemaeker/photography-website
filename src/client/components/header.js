/* eslint-disable class-methods-use-this */
import React from "react";
import {hot} from "react-hot-loader/root";

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>{"Accueil"}</li>
                        <li>{"Galerie"}</li>
                        <li>{"À propos"}</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default hot(Header);
