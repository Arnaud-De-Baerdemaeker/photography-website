// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

import Name from "../name/name";
import Button from "../button/button";

class Header extends Component {
	render() {
		return (
			<header className={"header"}>
				<Name
					closeMenu={this.props.closeMenu}
					class={"header__name"}
				/>
				<Button
					function={this.props.toggleMenu}
					alt={this.props.isMenuOpen
						? "Fermer le menu"
						: "Ouvrir le menu"
					}
					class={this.props.isMenuOpen
						? [
							"button__top-bar--close",
							"button__middle-bar--close",
							"button__bottom-bar--close"
						]
						: [
							"button__top-bar",
							"button__middle-bar",
							"button__bottom-bar"
						]
					}
				/>
			</header>
		);
	}
}

export default hot(Header);