import React, {Component} from "react";

class Button extends Component {
	render() {
		return (
			<button
				type={"button"}
				onClick={this.props.function}
				alt={this.props.alt}
				className={this.props.containerClass}
			>
				<span className={this.props.iconClass}></span>
			</button>
		);
	}
}

export default Button;