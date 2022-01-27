// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class Image extends Component {
    render() {
        return (
            <LazyLoadImage
                src={this.props.url}
                alt={this.props.name}
                title={this.props.title}
                effect={"blur"}
                className={this.props.class}
            />
        );
    }
}

export default hot(Image);