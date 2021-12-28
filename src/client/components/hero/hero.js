import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class Hero extends Component {
	render() {
		const title = [];
		const subtitle = [];

		if (this.props.fullName) {
			title.push(
				<h1 key={this.props.fullName} className={"hero__title"}>
					{this.props.fullName.firstName}
					<br />
					{this.props.fullName.lastName}
				</h1>
			);
		}
		else {
			title.push(
				<h1 key={this.props.title} className={"hero__title"}>{this.props.title}</h1>
			);
		}

		if (typeof this.props.subtitle === "object") {
			subtitle.push(
				<h2 key={this.props.subtitle} className={"hero__subtitle"}>
					{this.props.subtitle.job}
					<br />
					{this.props.subtitle.hobby}
				</h2>
			);
		}
		else {
			subtitle.push(
				<h2 key={this.props.subtitle} className={"hero__subtitle"}>{this.props.subtitle}</h2>
			);
		}

		return (
			<div className={"hero " + this.props.class}>
				<div className={"hero__back-filter"}>
					<div className={"hero__gradient"}>
						{title}
						{subtitle}
					</div>
				</div>
			</div>
		);
	}
}

export default hot(Hero);
