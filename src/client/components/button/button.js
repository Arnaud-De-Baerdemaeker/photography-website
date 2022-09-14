// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

import Icon from "../icon/icon";

class Button extends Component {
	render() {
		return (
			<button
				type={"button"}
				onClick={this.props.function}
				alt={this.props.alt}
				className={this.props.class}
			>
				<Icon
					isMenuOpen={this.props.isMenuOpen}
					topBarClass={
						this.props.isMenuOpen
						? "topBar__hamburger--close"
						: "topBar__hamburger"
					}
					middleBarClass={
						this.props.isMenuOpen
						? "middleBar__hamburger--close"
						: "middleBar__hamburger"
					}
					bottomBarClass={
						this.props.isMenuOpen
						? "bottomBar__hamburger--close"
						: "bottomBar__hamburger"
					}
				/>
			</button>
		);
	}
}

export default Button;