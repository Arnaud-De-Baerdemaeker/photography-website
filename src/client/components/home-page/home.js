// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Navigation from "../navigation/navigation";

class HomePage extends Component {
    render() {
        return (
            <div className={"home-page__container"}>
                <Navigation />
                <div className={"home-page__title-container"}>
                    <h1 className={"home-page__main-title"}>
                        {"ARNAUD"}
                        <br />
                        {"DE BAERDEMAEKER"}
                    </h1>
                </div>
            </div>
        );
    }
}

export default hot(HomePage);
