// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";

import Hero from "../hero/hero";

class Error404 extends Component {
	componentDidMount() {
		document.title = "Page non trouvée | Arnaud De Baerdemaeker";
	}

	render() {
		return(
			<Hero
				heroTitleClass={"hero__title--404"}
				heroTitleContent={"La page recherchée n'existe pas"}
				heroBackToHomepage={
					<NavLink
						exact
						to={"/"}
						className={"link__backToHomepage"}
					>
						{"Revenir à l'accueil"}
					</NavLink>
				}
			/>
		);
	}
}

export default withRouter(Error404);