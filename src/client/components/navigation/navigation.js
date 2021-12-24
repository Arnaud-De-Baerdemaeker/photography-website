// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {NavLink} from "react-router-dom";

class Navigation extends Component {
	componentDidMount() {
		// Listens to when the user is scrolling and closeMenu the menu if it is open
		window.addEventListener("scroll", this.props.closeMenu);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.props.closeMenu);
	}

	render() {
		return (
			<nav
				onScroll={this.props.closeMenu}
				className={this.props.isMenuOpen ? "menu" : "menu hidden"}>
				<ul className={"menu__list"}>
					<li className={"menu__list-item"}>
						<NavLink
							to={"/"}
							// Allows to exactly match the url set in the "to" attribute
							exact={true}
							onClick={this.props.toggleMenu}
							id={"home"}
							// Class name that is active only when the page is active
							activeClassName={"menu__link--active"}
							className={"menu__link"}>
							{"Accueil"}
						</NavLink>
					</li>
					<li className={"menu__list-item"}>
						<NavLink
							to={"/gallery"}
							onClick={this.props.toggleMenu}
							id={"gallery"}
							// Class name that is active only when the page is active
							activeClassName={"menu__link--active"}
							className={"menu__link"}>
							{"Galerie"}
						</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

export default hot(Navigation);
