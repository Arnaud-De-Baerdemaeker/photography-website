import React from "react";
import {hot} from "react-hot-loader/root";
import {Link} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">{"ACCUEIL"}</Link>
                    </li>
                    <li>
                        <Link to="/gallery">{"GALERIE"}</Link>
                    </li>
                    <li>
                        <Link to="/about">{"À propos"}</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default hot(Nav);
