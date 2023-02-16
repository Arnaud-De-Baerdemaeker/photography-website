// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

class Project extends Component {
	render() {
		return(
			<section className={"project"}>
				<a
					href={this.props.projectLink}
					target={"_blank"}
					rel={"noreferrer noopener"}
					className={"work"}
				>
					<img
						src={this.props.projectImageUrl}
						alt={this.props.projectImageAlt}
						className={"work__image"}
					/>
					<h2 className={"work__title"}>{this.props.projectTitle}</h2>
				</a>
			</section>
		);
	}
}

export default Project;
