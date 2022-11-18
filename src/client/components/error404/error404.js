// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";

import Hero from "../hero/hero";

class Error404 extends Component {
	constructor(props) {
		super(props);
		this.tabTitle = "Page non trouvée | Arnaud De Baerdemaeker";
	}

	componentDidMount() {
		this.props.setTabTitle(this.tabTitle);
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