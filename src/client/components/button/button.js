import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class Button extends Component {
	render() {
		return (
			<button
				type={"button"}
				onClick={this.props.function}
				alt={this.props.alt}
				className={"button__menu"}>
					<div className={this.props.class[0]}></div>
					<div className={this.props.class[1]}></div>
					<div className={this.props.class[2]}></div>
			</button>
		);
	}
}

export default hot(Button);
