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

	filterHeroBackground() {
		switch(this.props.location.pathname) {
			case "/":
			case "/galerie":
				return "hero__background--1";
			default:
				return "hero__background--404";
		}
	}

	filterHeroContent() {
		switch(this.props.location.pathname) {
			case "/":
				return <>
					<span className={"title__job-part1"}>{this.props.jobPart1}</span>
					<span className={"title__job-part2"}>{this.props.jobPart2}</span>
					<span className={"title__ampersand"}>{this.props.ampersand}</span>
					<span className={"title__hobby-part1"}>{this.props.hobbyPart1}</span>
					<span className={"title__hobby-part2"}>{this.props.hobbyPart2}</span>
				</>;
			case "/galerie":
			default:
				return <>
					<span className={"title__page"}>{this.props.title}</span>
					<span className={"title__intro"}>{this.props.subtitle}</span>
				</>;
		}
	}

	filterHeroArrow() {
		switch(this.props.location.pathname) {
			case "/":
			case "/galerie":
				return <>
					<div className={"hero__move-down-icon"}>
						<div className={"move-down-icon__arrow"}></div>
					</div>
				</>
			default:
				return;
		}
	}

	render() {
		return (
			<div className={"hero"}>
				<div className={"hero__container " + this.filterHeroBackground()}>
					<div className={"hero__back-filter"}></div>
				</div>
				<h2 className={this.props.titleClass}>
					{this.filterHeroContent()}
				</h2>
				{this.filterHeroArrow()}
			</div>
		);
	}
}

export default withRouter(Hero);