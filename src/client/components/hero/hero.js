// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class Hero extends Component {
	componentDidMount() {
		if(this.props.location.pathname === "/" || this.props.location.pathname === "/galerie") {
			const backgroundClasses = [
				"hero__background--1",
				"hero__background--2",
				"hero__background--3",
				"hero__background--4",
				"hero__background--5"
			];

			let
				newIndex = 0,
				lastIndex
			;

			/*
				Interval to display the image in order by using an index matching the images in the array.
				At each iteration, the previous image is replaced with the next one.
				The condition checks if the end of the array is reached or not, and resets the counters to start over as a loop.
			*/
			this.slideshow = window.setInterval(function() {
				if(newIndex === 4) {
					lastIndex = 4;
					newIndex = -1;
				}
				else {
					lastIndex = newIndex;
				}

				newIndex++;
				document.querySelector(".hero__container").classList.replace(backgroundClasses[lastIndex], backgroundClasses[newIndex]);
			}, 10000);
		}
	}

	componentWillUnmount() {
		clearInterval(this.slideshow);
	}

	render() {
		return (
			<div className={"hero"}>
				<div className={"hero__container" + (
					this.props.heroContainerClass
					? this.props.heroContainerClass
					: ""
				)}>
					<div className={"hero__backFilter"}></div>
				</div>
				<h2 className={this.props.heroTitleClass}>
					{this.props.heroTitleContent}
				</h2>
				<div className={"hero__scrollDown"}>
					<div className="hero__scrollDownContainer">
						{this.props.svgContent}
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Hero);