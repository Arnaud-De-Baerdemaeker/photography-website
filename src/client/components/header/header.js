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
					alt={this.props.isMenuOpen
						? "Fermer le menu"
						: "Ouvrir le menu"
					}
					containerClass={"button__menu"}
					iconClass={this.props.isMenuOpen
						? "button__bar--close"
						: "button__bar"
					}
				/>
			</header>
		);
	}
}

export default Header;