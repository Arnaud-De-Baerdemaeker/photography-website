import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Button extends Component {
	render() {
		return (
			<button
				type={"button"}
				onClick={this.props.function}
				className={this.props.class}>
				<FontAwesomeIcon
					icon={this.props.icon}
					alt={this.props.alt}
					className={"button__icon"}
				/>
			</button>
		);
	}
}

export default hot(Button);
