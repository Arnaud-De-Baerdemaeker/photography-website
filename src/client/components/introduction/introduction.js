// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class Introduction extends Component {
	render() {
		const phrases = [];

		for (const phrase of this.props.introduction) {
			phrases.push(<p className={"introduction__paragraph"}>{phrase}</p>);
		}

		return (
			<div className={"introduction"}>
				{phrases}
			</div>
		);
	}
}

export default hot(Introduction);
