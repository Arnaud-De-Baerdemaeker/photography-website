// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

import Name from "../name/name";
import Button from "../button/button";
import SVG from "../svg/svg";

class Header extends Component {
	componentDidMount() {
		let headerElement = document.querySelector("#innerHeader");

		window.addEventListener("scroll", () => {
			if(window.scrollY > 0) {
				headerElement.classList.replace("header__innerContainer", "header__innerContainer--scroll");
			}
			else if (window.screenY < 1) {
				headerElement.classList.replace("header__innerContainer--scroll", "header__innerContainer");
			}
		});
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", () => {});
	}

	render() {
		return (
			<header
				id={"header"}
				className={"header"}
			>
				<div
					id={"innerHeader"}
					className={"header__innerContainer"}
				>
					<Name
						class={"name--header"}
						closeMenu={this.props.closeMenu}
					/>
					<Button
						alt={
							this.props.isMenuOpen
							? "Fermer le menu"
							: "Ouvrir le menu"
						}
						function={this.props.toggleMenu}
						class={"button__menu"}
					>
						<SVG
							viewBox={"0 0 36 36"}
							class={"svg__menu"}
						>
							<g>
								<path
									d={"M35 8H1C0.447715 8 0 8.44772 0 9C0 9.55228 0.447716 10 1 10H35C35.5523 10 36 9.55228 36 9C36 8.44772 35.5523 8 35 8Z"}
									className={
										this.props.isMenuOpen
										? "topFigure__hamburger--close"
										: "topFigure__hamburger"
									}
								/>
								<path
									d={"M35 17H1C0.447715 17 0 17.4477 0 18C0 18.5523 0.447716 19 1 19H35C35.5523 19 36 18.5523 36 18C36 17.4477 35.5523 17 35 17Z"}
									className={
										this.props.isMenuOpen
										? "middleFigure__hamburger--close"
										: "middleFigure__hamburger"
									}
								/>
								<path
									d={"M35 26H1C0.447715 26 0 26.4477 0 27C0 27.5523 0.447716 28 1 28H35C35.5523 28 36 27.5523 36 27C36 26.4477 35.5523 26 35 26Z"}
									className={
										this.props.isMenuOpen
										? "bottomFigure__hamburger--close"
										: "bottomFigure__hamburger"
									}
								/>
							</g>
						</SVG>
					</Button>
				</div>
			</header>
		);
	}
}

export default Header;