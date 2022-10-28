// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

import Hero from "../hero/hero";

class Error404 extends Component {
	componentDidMount() {
		document.title = "Page non trouvée | Arnaud De Baerdemaeker";
	}

	render() {
		return(
			<Hero
				heroTitleClass={"hero__title--404"}
				heroTitleContent={
					<>
						<span className={"title__page"}>{"404"}</span>
						<span className={"title__intro"}>{"Oups ! La page que vous recherchez n'existe pas"}</span>
					</>
				}
			/>
		);
	}
}

export default Error404;