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
						y={this.props.topBarY}
						width={this.props.topBarWidth}
						height={this.props.topBarHeight}
						rx={this.props.topBarRx}
						fill={this.props.topBarFill}
						className={this.props.topBarClass}
					/>

					<rect
						y={this.props.middleBarY}
						width={this.props.middleBarWidth}
						height={this.props.middleBarHeight}
						rx={this.props.middleBarRx}
						fill={this.props.middleBarFill}
						className={this.props.middleBarClass}
					/>

					<rect
						y={this.props.bottomBarY}
						width={this.props.bottomBarWidth}
						height={this.props.bottomBarHeight}
						rx={this.props.bottomBarRx}
						fill={this.props.bottomBarFill}
						className={this.props.bottomBarClass}
					/>
				</g>
			</svg>
		);
	}
}

export default Icon;