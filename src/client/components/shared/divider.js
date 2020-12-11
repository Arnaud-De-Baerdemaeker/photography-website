import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

import WavesDivider from "./../../images/waves-divider.svg";

class Divider extends Component {
    render() {
        return (
            <div className={this.props.dividerContainer}>
                <img
                    src={WavesDivider}
                    alt={""}
                    className={this.props.dividerImage}
                />
            </div>
        );
    }
}

export default hot(Divider);
