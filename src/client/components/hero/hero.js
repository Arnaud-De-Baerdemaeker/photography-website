// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component, createRef} from "react";
import {withRouter} from "react-router-dom";

class Hero extends Component {
	constructor(props) {
		super(props);
		this.backgroundClasses = [
			"hero__background--1",
			"hero__background--2",
			"hero__background--3",
			"hero__background--4",
			"hero__background--5"
		];
		this.index = 0;
		this.lastIndex;
		this.slideshow;

		this.heroContainerRef = createRef();

		this.scrollImages = this.scrollImages.bind(this);
	}

	scrollImages() {
		/*
			Interval to display the image in order by using an index matching the images in the array.
			At each iteration, the previous image is replaced with the next one.
			The condition checks if the end of the array is reached or not, and resets the counters to start over as a loop.
		*/
		if(this.props.location.pathname === "/" || this.props.location.pathname === "/galerie") {
			if(this.index === 4) {
				this.lastIndex = 4;
				this.index = -1;
			}
			else {
				this.lastIndex = this.index;
			}

			this.index++;
			this.heroContainerRef.current.classList.replace(this.backgroundClasses[this.lastIndex], this.backgroundClasses[this.index]);
		}
		else {
			return null;
		}
	}

	componentDidMount() {
		this.slideshow = window.setInterval(() => this.scrollImages(), 10000);
	}

	componentWillUnmount() {
		clearInterval(this.slideshow);
	}

	render() {
		return (
			<div className={"hero"}>
				<div
					ref={this.heroContainerRef}
					className={"hero__container" + (
						this.props.heroContainerClass
						? this.props.heroContainerClass
						: ""
					)}
				>
					<div className={"hero__backFilter"}></div>
				</div>
				<h2 className={this.props.heroTitleClass}>
					{this.props.heroTitleContent}
				</h2>
				{this.props.heroBackToHomepage ? this.props.heroBackToHomepage : null}
				{this.props.scrollDownSVG ? this.props.scrollDownSVG : null}
			</div>
		);
	}
}

export default withRouter(Hero);