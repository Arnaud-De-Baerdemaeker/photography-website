// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import Button from "../button/button";

class Header extends Component {
	render() {
		return (
			<header className={this.props.isMenuOpen ? this.props.class : this.props.class + " gradient"}>
				{this.props.fullName
					? <h1 className={"header__title"}>
						<NavLink
							to={"/"}
							exact={true}
							onClick={this.props.closeMenu}
							className={"header__link"}>
							{this.props.fullName.firstName}
							<br />
							{this.props.fullName.lastName}
						</NavLink>
					</h1>
					: null
				}
				<Button
					function={this.props.toggleMenu}
					icon={this.props.isMenuOpen ? faTimes : faBars}
					alt={this.props.isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
					class={"button__menu"}
				/>
			</header>
		);
	}
}

export default hot(Header);
