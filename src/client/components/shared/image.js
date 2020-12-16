import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {LazyLoadImage} from "react-lazy-load-image-component";

class Image extends Component {
    render() {
        return (
            <LazyLoadImage
                src={this.props.url}
                alt={this.props.alternate_text}
                title={this.props.title}
                threshold={0}
                onClick={this.props.onClick}
                className={this.props.class}
            />
        );
    }
}

export default hot(Image);
