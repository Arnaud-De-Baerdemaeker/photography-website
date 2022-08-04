// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import Image from "../image/image";

class Link extends Component {
    render() {
        return (
            <li className={"gallery__list-item"}>
                <NavLink to={this.props.link} className={"gallery__link"}>
                    <Image
                        url={this.props.url}
                        alternate_text={this.props.alternate_text}
                        class={"gallery__thumbnail"}
                    />
                    <span className={"gallery__year"}>{this.props.year}</span>
                </NavLink>
            </li>
        );
    }
}

export default Link;
