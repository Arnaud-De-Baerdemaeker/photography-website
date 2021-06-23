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
                <Navigation
                    lightModeOn={this.props.lightModeOn}
                    onHandleMode={this.props.onHandleMode}
                />
                <div className={"home-page__title-container"}>
                    <h1
                        className={
                            this.props.lightModeOn
                                ? "home-page__main-title"
                                : "home-page__main-title--dark"
                        }>
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
