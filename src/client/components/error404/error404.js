// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

import Hero from "../hero/hero";

class Error404 extends Component {
	render() {
		return(
			<Hero
				title={"404"}
				subtitle={"Oups ! La page que vous recherchez n'existe pas"}
				titleClass={"hero__title--404"}
			/>
		);
	}
}

export default Error404;
