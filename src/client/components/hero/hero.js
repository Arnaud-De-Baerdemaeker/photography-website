import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

import LightDarkToggle from "../light-dark-toggle/light-dark-toggle";

class Hero extends Component {
    render() {
        return (
            <div className={"hero"}>
                <div className={"hero__back-filter"}>
                    <h1
                        className={
                            this.props.lightModeOn
                                ? "hero__main-title"
                                : "hero__main-title--dark-mode"
                        }>
                        <span className={"hero__name"}>
                            {"ARNAUD"}
                            <br />
                            {"DE BAERDEMAEKER"}
                        </span>
                        <span className={"hero__subtitle"}>
                            {"Développeur web"}
                            <br />
                            {"Amateur de photographie"}
                        </span>
                    </h1>
                </div>
                <LightDarkToggle
                    lightModeOn={this.props.lightModeOn}
                    onHandleMode={this.props.onHandleMode}
                />
            </div>
        );
    }
}

export default hot(Hero);
