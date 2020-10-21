/* eslint-disable class-methods-use-this */
import React from "react";
import {hot} from "react-hot-loader/root";

class Header extends React.Component {
    render() {
        return (
            <header className={"menu"}>
                <nav className={"menu__navigation"}>
                    <ul className={"menu__list"}>
                        <li className={"menu__list-item"}>{"Accueil"}</li>
                        <li className={"menu__list-item"}>{"Galerie"}</li>
                        <li className={"menu__list-item"}>{"À propos"}</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default hot(Header);
