// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import Image from "../image/image";
import Button from "../button/button";

class Modal extends Component {
	render() {
		return (
			<div className={this.props.isModalOpen ? "modal" : "modal--hidden"}>
				<div className={"modal__imageContainer"}>
					<Image
						url={this.props.hd}
						class={"modal__image"}
					/>
				</div>
				<Button
					function={this.props.toggleModal}
					containerClass={"button__modal"}
					iconClass={"button__bar--close"}
				/>
			</div>
		);
	}
}

export default Modal;