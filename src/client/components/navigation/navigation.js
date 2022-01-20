// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {NavLink, withRouter} from "react-router-dom";

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
				className={this.props.isMenuOpen ? "menu" : "menu--closed"}>
				<ul className={this.props.isMenuOpen ? "menu__list" : "menu__list--closed"}>
					<li className={"menu__list-item"}>
						<NavLink
							exact
							to={"/"}
							onClick={this.props.toggleMenu}
							id={"home"}
							activeClassName={"menu__link--active"}
							className={"menu__link"}>
							{"Accueil"}
						</NavLink>
					</li>
					<li className={"menu__list-item"}>
						<NavLink
							exact
							to={"/galerie"}
							onClick={this.props.toggleMenu}
							id={"gallery"}
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

export default hot(withRouter(Navigation));
