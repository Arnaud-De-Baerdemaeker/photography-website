// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class Introduction extends Component {
    render() {
        const introduction = [];

        for (
            let i = 0;
            i < this.props.inputs.introduction.phrases.length;
            i++
        ) {
            introduction.push(
                <p key={i} className={"introduction__paragraph"}>
                    {this.props.inputs.introduction.phrases[i]}
                </p>,
            );
        }

        return (
            <section className={"introduction__container"}>
                <h3 className={"introduction__title"}>
                    {this.props.inputs.introduction.title}
                </h3>
                {introduction}
            </section>
        );
    }
}

export default hot(Introduction);
