// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

class Project extends Component {
	render() {
		return(
			<section className={"project"}>
				<img
					src={this.props.projectImageUrl}
					alt={this.props.projectImageAlt}
					className={"project__image"}
				/>
				<h2 className={"project__title"}>{this.props.projectTitle}</h2>
				<p className={"project__description"}>{this.props.projectDescription}</p>
			</section>
		);
	}
}

export default Project;
