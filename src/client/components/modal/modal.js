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
                    <picture>
                        {/*<source srcset={this.props.url.uhd} media={}>*/}
                        <Image url={this.props.url.hd} class={"modal__image"} />
                    </picture>
                    <figcaption className={"modal__caption"}>
                        {"Arnaud De Baerdemaeker"}
                    </figcaption>
                </figure>
                <div className={"modal__close"} onClick={this.props.onClick}>
                    <i className={"material-icons"}>{"close"}</i>
                </div>
            </div>
        );
    }
}

export default hot(Modal);
