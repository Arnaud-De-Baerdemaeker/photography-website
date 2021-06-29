// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Image from "../image/image";

class Modal extends Component {
    render() {
        return (
            <div className={"modal"}>
                <figure className={"modal__image-container"}>
                    <Image url={this.props.url.hd} class={"modal__image"} />
                </figure>
                <div className={"modal__close"} onClick={this.props.onClick}>
                    <i
                        className={
                            this.props.lightModeOn
                                ? "material-icons"
                                : "material-icons dark-mode"
                        }>
                        {"close"}
                    </i>
                </div>
            </div>
        );
    }
}

export default hot(Modal);
