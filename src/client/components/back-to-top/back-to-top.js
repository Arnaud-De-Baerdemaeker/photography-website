// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

class BackToTop extends Component {
	constructor(props) {
		super(props);

		this.backToTop = this.backToTop.bind(this);
	}

	backToTop() {
		window.scrollTo(0, 0);
	}

	render() {
		return(
			<button
				type={"button"}
				onClick={this.backToTop}
				className={"backToTop"}
			>
				<span className={"backToTop__arrow"}></span>
			</button>
		);
	}
}

export default BackToTop;