// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class Introduction extends Component {
    render() {
        const phrases = [];

        for (const phrase of this.props.introduction.phrases) {
            phrases.push(<p className={"introduction__paragraph"}>{phrase}</p>);
        }

        return (
            <section className={"introduction__container"}>
                <h3 className={"introduction__title"}>
                    {this.props.introduction.title}
                </h3>
                {phrases}
            </section>
        );
    }
}

export default hot(Introduction);
