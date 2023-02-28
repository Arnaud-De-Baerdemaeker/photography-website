// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component, createRef} from "react";

class Project extends Component {
	constructor(props) {
		super(props);
		this.imageRef = createRef();
		this.rolloverRef = createRef();

		this.hoveringIn = this.hoveringIn.bind(this);
		this.hoveringOut = this.hoveringOut.bind(this);
	}

	hoveringIn() {
		this.rolloverRef.current.classList.replace("project__rollover--hidden", "project__rollover--visible");
	}

	hoveringOut() {
		this.rolloverRef.current.classList.replace("project__rollover--visible", "project__rollover--hidden");
	}

	componentDidMount() {
		if("ontouchstart" in window) {
			this.rolloverRef.current.classList.replace("project__rollover--hidden", "project__rollover--visible");
		}
		else {
			this.imageRef.current.addEventListener("mouseover", this.hoveringIn);
			this.imageRef.current.addEventListener("mouseout", this.hoveringOut);
		}
	}

	componentWillUnmount() {
		this.imageRef.current.removeEventListener("mouseover", this.hoveringIn);
		this.imageRef.current.removeEventListener("mouseout", this.hoveringOut);
	}

	render() {
		return(
			<li className={"project"}>
				<a
					href={this.props.projectLink && this.props.projectLink}
					target={"_blank"}
					rel={"noreferrer noopener"}
					ref={this.imageRef}
					className={"project__link"}
				>
					<img
						src={this.props.projectImageUrl}
						alt={this.props.projectImageAlt}
						className={"project__image"}
					/>
				</a>
				<div
					ref={this.rolloverRef}
					className={"project__rollover--hidden"}
				>
					<h2 className={"project__title"}>{this.props.projectTitle}</h2>
				</div>
			</li>
		);
	}
}

export default Project;
