// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

class Loading extends Component {
	render() {
		return(
			<div className={"loading"}>
				<div className={"loading__container"}>
					<span className={"loading__planet"}></span>
					<div className={"loading__star"}>
						<span className={"star__dot"}></span>
					</div>
				</div>
			</div>
		);
	}
}

export default Loading;