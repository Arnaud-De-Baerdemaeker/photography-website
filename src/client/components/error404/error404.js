// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

import Hero from "../hero/hero";

class Error404 extends Component {
	render() {
		return(
			<Hero
				titlePart1={"Oups !"}
				titlePart2={"C'est un 404"}
				subtitle={"La page que vous recherchez n'existe pas"}
				containerClass={"hero__404"}
				titleClass={"hero__title--404"}
			/>
		);
	}
}

export default hot(Error404);
