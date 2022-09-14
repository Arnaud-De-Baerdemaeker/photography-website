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
					<rect
						className={this.props.topBarClass}
						y={"8"}
						width={"36"}
						height={"2"}
						rx={"1"}
						fill={"white"}
					/>

					<rect
						className={this.props.middleBarClass}
						y={"17"}
						width={"36"}
						height={"2"}
						rx={"1"}
						fill={"white"}
					/>

					<rect
						className={this.props.bottomBarClass}
						y={"26"}
						width={"36"}
						height={"2"}
						rx={"1"}
						fill={"white"}
					/>
				</g>
			</svg>
		);
	}
}

export default Icon;