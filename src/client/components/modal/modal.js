// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

import Image from "../image/image";
import Button from "../button/button";
import SVG from "../svg/svg";

class Modal extends Component {
	render() {
		return (
			<div className={
				this.props.isModalOpen
				? "modal"
				: "modal--hidden"
			}>
				<div className={"modal__imageContainer"}>
					<Image
						url={this.props.hd}
						class={"modal__image"}
					/>
				</div>
				<Button
					function={this.props.toggleModal}
					class={"button__modal"}
				>
					<SVG
						viewBox="0 0 36 36"
						class={"svg__close"}
					>
						<path
							d="M7.5 6C6 4.49998 4.5 6 6 7.5L16.5 18L6.00004 28.5C4.50003 30 6.00007 31.5 7.50006 30L18 19.5L28.5 30C30 31.5 31.5 30 30 28.5L19.5 18L30 7.5C31.5 5.99997 30 4.49998 28.5 5.99998L18 16.5L7.5 6Z"
							className={"icon__close"}
						/>
					</SVG>
				</Button>
			</div>
		);
	}
}

export default Modal;