// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

class SVG extends Component {
	render() {
		return(
			<svg
				width={this.props.width}
				height={this.props.height}
				className={this.props.class}
				xmlns={"http://www.w3.org/2000/svg"}
			>
				{this.props.children}
			</svg>
		);
	}
}

export default SVG;