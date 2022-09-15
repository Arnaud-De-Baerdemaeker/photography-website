// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

import Name from "../name/name";
import Button from "../button/button";
import Icon from "../icon/icon";

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
				>
					<Icon
						topBarY={"8"}
						topBarWidth={"36"}
						topBarHeight={"2"}
						topBarRx={"1"}
						topBarFill={"white"}
						topBarClass={
							this.props.isMenuOpen
							? "topBar__hamburger--close"
							: "topBar__hamburger"
						}
						middleBarY={"17"}
						middleBarWidth={"36"}
						middleBarHeight={"2"}
						middleBarRx={"1"}
						middleBarFill={"white"}
						middleBarClass={
							this.props.isMenuOpen
							? "middleBar__hamburger--close"
							: "middleBar__hamburger"
						}
						bottomBarY={"26"}
						bottomBarWidth={"36"}
						bottomBarHeight={"2"}
						bottomBarRx={"1"}
						bottomBarFill={"white"}
						bottomBarClass={
							this.props.isMenuOpen
							? "bottomBar__hamburger--close"
							: "bottomBar__hamburger"
						}
					/>
				</Button>
			</header>
		);
	}
}

export default Header;