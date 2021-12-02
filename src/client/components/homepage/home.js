// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Navigation from "../navigation/navigation";
import LightDarkToggle from "../light-dark-toggle/light-dark-toggle";

class HomePage extends Component {
    render() {
        return (
            <div className={"home-page__container"}>
                <Navigation
                    lightModeOn={this.props.lightModeOn}
                    onHandleMode={this.props.onHandleMode}
                />
                <LightDarkToggle
                    lightModeOn={this.props.lightModeOn}
                    onHandleMode={this.props.onHandleMode}
                />
                <div className={"home-page__title-container"}>
                    <h1
                        className={
                            this.props.lightModeOn
                                ? "home-page__main-title"
                                : "home-page__main-title--dark-mode"
                        }>
                        <span className={"home-page__name"}>
                            {"ARNAUD"}
                            <br />
                            {"DE BAERDEMAEKER"}
                        </span>
                        <span className={"home-page__subtitle"}>
                            {"Développeur web"}
                            <br />
                            {"Photographie amateure"}
                        </span>
                    </h1>
                </div>
            </div>
        );
    }
}

export default hot(HomePage);
