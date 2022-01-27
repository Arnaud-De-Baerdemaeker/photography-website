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

	render() {
		return (
			<div className={"hero " + this.props.containerClass}>
				<div className={"hero__back-filter"}>
					<h2 className={this.props.titleClass}>
						{this.props.location.pathname === "/"
							? <>
								<span className={"title__job-part1"}>{this.props.title.job.part1}</span>
								<span className={"title__job-part2"}>{this.props.title.job.part2}</span>
								<span className={"title__ampersand"}>{this.props.title.ampersand}</span>
								<span className={"title__hobby-part1"}>{this.props.title.hobby.part1}</span>
								<span className={"title__hobby-part2"}>{this.props.title.hobby.part2}</span>
							</>
							: <>
								<span className={"title__page"}>{this.props.title.title}</span>
								<span className={"title__intro"}>{this.props.title.subtitle}</span>
							</>
						}
					</h2>
					<div className={"hero__move-down-icon"}>
						<div className={"hero__arrow"}></div>
						<div className={"hero__arrow"}></div>
					</div>
				</div>
			</div>
		);
	}
}

export default hot(withRouter(Hero));
