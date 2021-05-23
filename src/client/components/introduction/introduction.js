// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class Introduction extends Component {
    render() {
        return (
            <section className={"introduction__container"}>
                <h3 className={"introduction__title"}>
                    {this.props.introduction.title}
                </h3>
            </section>
        );
    }
}

export default hot(Introduction);
