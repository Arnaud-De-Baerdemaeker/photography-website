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
				viewBox={this.props.viewBox}
				className={this.props.class}
				xmlns={"http://www.w3.org/2000/svg"}
				xmlnsXlink={"http://www.w3.org/1999/xlink"}
			>
				{this.props.children}
			</svg>
		);
	}
}

export default SVG;