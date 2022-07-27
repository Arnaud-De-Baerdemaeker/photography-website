import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {withRouter} from "react-router-dom";

class Hero extends Component {
	componentDidMount() {
		this.animate = window.setInterval(function() {
			document.querySelector(".hero__move-down-icon").classList.toggle("hero__move-down-icon--down");
		}, 750);
	}

	componentWillUnmount() {
		clearInterval(this.animate);
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
				</>
			case "/galerie":
				return <>
					<span className={"title__page"}>{this.props.title}</span>
					<span className={"title__intro"}>{this.props.subtitle}</span>
				</>
			default:
				return <>
					<span className={"title__page"}>{this.props.title}</span>
					<span className={"title__intro"}>{this.props.subtitle}</span>
				</>
		}
	}

	filterHeroArrow() {
		switch(this.props.location.pathname) {
			case "/":
			case "/galerie":
				return <>
					<div className={"hero__move-down-icon"}>
						<div className={"hero__arrow"}></div>
						<div className={"hero__arrow"}></div>
					</div>
				</>
			default:
				return;
		}
	}

	render() {
		return (
			<div className={"hero " + this.props.containerClass}>
				<div className={"hero__back-filter"}>
					<h2 className={this.props.titleClass}>
						{this.filterHeroContent()}
					</h2>
					{this.filterHeroArrow()}
				</div>
			</div>
		);
	}
}

export default hot(withRouter(Hero));
