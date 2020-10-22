import React from "react";
import {hot} from "react-hot-loader/root";
import {Link} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <nav className={"menu__navigation"}>
                <ul className={"menu__list"}>
                    <li className={"menu__list-item"}>
                        <Link to="/" className={"menu__link"}>{"ACCUEIL"}</Link>
                    </li>
                    <li className={"menu__list-item"}>
                        <Link to="/gallery" className={"menu__link"}>{"GALERIE"}</Link>
                    </li>
                    <li className={"menu__list-item"}>
                        <Link to="/about" className={"menu__link"}>{"À PROPOS"}</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default hot(Nav);
