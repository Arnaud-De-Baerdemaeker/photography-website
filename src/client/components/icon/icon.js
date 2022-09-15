// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

class Icon extends Component {
	render() {
		return(
			<svg
				width={"36"}
				height={"36"}
				fill={"none"}
				className={"iconBox"}
				xmlns={"http://www.w3.org/2000/svg"}
			>
				<g>
					<path
						d={this.props.topFigureD}
						className={this.props.topFigureClass}
					/>

					<path
						d={this.props.middleFigureD}
						className={this.props.middleFigureClass}
					/>

					<path
						d={this.props.bottomFigureD}
						className={this.props.bottomFigureClass}
					/>
				</g>
			</svg>
		);
	}
}

export default Icon;