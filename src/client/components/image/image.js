// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

class Image extends Component {
    render() {
        return (
            <img
                src={this.props.url}
                alt={this.props.alt ? this.props.alt : ""}
                title={this.props.location ? this.props.location : null}
                className={this.props.class}
            />
        );
    }
}

export default Image;