import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class Button extends Component {
    render() {
        return (
            <div className={"button__container"}>
                <button className={"button__item"}>{this.props.text}</button>
            </div>
        );
    }
}

export default hot(Button);
