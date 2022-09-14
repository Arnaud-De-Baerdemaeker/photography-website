// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

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
					isMenuOpen={this.props.isMenuOpen}
					alt={
						this.props.isMenuOpen
						? "Fermer le menu"
						: "Ouvrir le menu"
					}
					class={"button__menu"}
				/>
			</header>
		);
	}
}

export default Header;