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

		let elements;
		elements = document.querySelectorAll(".hero__title--homepage, .title__ampersand");

		this.props.resizeFontSize(elements);

		window.addEventListener("resize", () => {
			elements = document.querySelectorAll(".hero__title--homepage, .title__ampersand");
			this.props.resizeFontSize(elements);
		});
	}

	componentWillUnmount() {
		clearInterval(this.slideshow);
		window.removeEventListener("resize", () => {});
	}

	render() {
		return (
			<div className={"hero"}>
				<div className={this.props.heroContainerClass}>
					<div className={"hero__backFilter"}></div>
				</div>
				<h2
					data-resize-factor-portrait={this.props.resizeFactorPortrait}
					data-apply-line-height-portrait={this.props.applyLineHeightPortrait}
					className={this.props.heroTitleClass}
				>
					{this.props.heroTitleContent}
				</h2>
				<div className={"hero__scrollDown"}>
					{this.props.svgContent}
				</div>
			</div>
		);
	}
}

export default withRouter(Hero);