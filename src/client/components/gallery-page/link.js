// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {NavLink} from "react-router-dom";

class Link extends Component {
    render() {
        return (
            <li className={"gallery__list-item"}>
                <NavLink to={this.props.link} className={"gallery__link"}>
                    <img
                        src={this.props.src}
                        alt={this.props.alt}
                        className={"gallery__thumbnail"}
                    />
                    <span className={"gallery__year"}>{this.props.year}</span>
                </NavLink>
            </li>
        );
    }
}

export default hot(Link);
