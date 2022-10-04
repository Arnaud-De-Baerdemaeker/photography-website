import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import Icon from "../icon/icon";

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
					<span className={"title__jobPart1"}>{this.props.jobPart1}</span>
					<span className={"title__jobPart2"}>{this.props.jobPart2}</span>
					<span className={"title__ampersand"}>{this.props.ampersand}</span>
					<span className={"title__hobbyPart1"}>{this.props.hobbyPart1}</span>
					<span className={"title__hobbyPart2"}>{this.props.hobbyPart2}</span>
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
					<div className={"hero__scrollDown"}>
						<Icon
							topFigureD={"M6.20711 2.20711L17.2929 13.2929C17.6834 13.6834 18.3166 13.6834 18.7071 13.2929L29.7929 2.20711C30.1834 1.81658 30.1834 1.18342 29.7929 0.792893L29.7071 0.707107C29.3166 0.316582 28.6834 0.316583 28.2929 0.707107L18.7071 10.2929C18.3166 10.6834 17.6834 10.6834 17.2929 10.2929L7.70711 0.707107C7.31658 0.316583 6.68342 0.316583 6.29289 0.707107L6.20711 0.792893C5.81658 1.18342 5.81658 1.81658 6.20711 2.20711Z"}
							topFigureClass={"topFigure__chevron"}
							middleFigureD={"M17.2929 24.2929L6.20711 13.2071C5.81658 12.8166 5.81658 12.1834 6.20711 11.7929L6.29289 11.7071C6.68342 11.3166 7.31658 11.3166 7.70711 11.7071L17.2929 21.2929C17.6834 21.6834 18.3166 21.6834 18.7071 21.2929L28.2929 11.7071C28.6834 11.3166 29.3166 11.3166 29.7071 11.7071L29.7929 11.7929C30.1834 12.1834 30.1834 12.8166 29.7929 13.2071L18.7071 24.2929C18.3166 24.6834 17.6834 24.6834 17.2929 24.2929Z"}
							middleFigureClass={"middleFigure__chevron"}
							bottomFigureD={"M29.7929 24.2071L18.7071 35.2929C18.3166 35.6834 17.6834 35.6834 17.2929 35.2929L6.20711 24.2071C5.81658 23.8166 5.81658 23.1834 6.20711 22.7929L6.29289 22.7071C6.68342 22.3166 7.31658 22.3166 7.70711 22.7071L17.2929 32.2929C17.6834 32.6834 18.3166 32.6834 18.7071 32.2929L28.2929 22.7071C28.6834 22.3166 29.3166 22.3166 29.7071 22.7071L29.7929 22.7929C30.1834 23.1834 30.1834 23.8166 29.7929 24.2071Z"}
							bottomFigureClass={"bottomFigure__chevron"}
						/>
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
					<div className={"hero__backFilter"}></div>
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