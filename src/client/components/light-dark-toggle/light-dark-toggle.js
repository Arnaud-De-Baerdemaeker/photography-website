// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class LightDarkToggle extends Component {
    render() {
        return (
            <button
                type={"button"}
                onClick={this.props.onHandleMode}
                className={"light-dark-toggle"}>
                {/* Button to change the icon depending of the state of the night mode */}
                <i
                    className={
                        this.props.lightModeOn
                            ? "material-icons"
                            : "material-icons dark-mode"
                    }>
                    {this.props.lightModeOn ? "light_mode" : "dark_mode"}
                </i>
            </button>
        );
    }
}

export default hot(LightDarkToggle);
