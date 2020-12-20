// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Image from "./../../shared/image";

class Modal extends Component {
    render() {
        return (
            <div className={"modal"}>
                <figure className={"modal__image-container"}>
                    <Image url={this.props.url} class={"modal__image"} />
                    <figcaption className={"modal__caption"}>
                        {"Arnaud De Baerdemaeker"}
                    </figcaption>
                </figure>
                <div className={"modal__close"} onClick={this.props.onClick}>
                    <img
                        src={
                            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xOC4zIDUuNzFjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwTDEyIDEwLjU5IDcuMTEgNS43Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMC0uMzkuMzktLjM5IDEuMDIgMCAxLjQxTDEwLjU5IDEyIDUuNyAxNi44OWMtLjM5LjM5LS4zOSAxLjAyIDAgMS40MS4zOS4zOSAxLjAyLjM5IDEuNDEgMEwxMiAxMy40MWw0Ljg5IDQuODljLjM5LjM5IDEuMDIuMzkgMS40MSAwIC4zOS0uMzkuMzktMS4wMiAwLTEuNDFMMTMuNDEgMTJsNC44OS00Ljg5Yy4zOC0uMzguMzgtMS4wMiAwLTEuNHoiLz48L3N2Zz4="
                        }
                        alt={"Fermer la fenêtre"}
                        className={"modal__close-icon"}
                    />
                </div>
            </div>
        );
    }
}

export default hot(Modal);
