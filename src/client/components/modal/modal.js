// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Image from "../image/image";
import Button from "../button/button";

class Modal extends Component {
	render() {
		return (
			<div className={this.props.isModalOpen ? "modal" : "modal hidden"}>
				<div className={"modal__image-container"}>
					<Image
						url={this.props.hd}
						class={"modal__image"}
					/>
				</div>
				<Button
					function={this.props.toggleModal}
					icon={faTimes}
					class={"button__close-modal"}
				/>
			</div>
		);
	}
}

export default hot(Modal);
