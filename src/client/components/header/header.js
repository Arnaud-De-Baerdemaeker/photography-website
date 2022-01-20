// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {Link, withRouter} from "react-router-dom";

import Button from "../button/button";

class Header extends Component {
	render() {
		return (
			<header className={"header"}>
				<h1 className={"header__name"}>
					<Link
						to={"/"}
						onClick={this.props.closeMenu}
						className={"name__link"}
					>
						{"Arnaud"}
						<br />
						{"De Baerdemaeker"}
					</Link>
				</h1>
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

export default hot(withRouter(Header));
