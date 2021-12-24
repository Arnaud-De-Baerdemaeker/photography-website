// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Image from "../image/image";
import Modal from "../modal/modal";

class PhotosCards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false
		}
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal() {
		this.setState(state => ({
			isModalOpen: !state.isModalOpen
		}));
	}

	render() {
		return (
			<>
				<div
					onClick={this.toggleModal}
					className={"photos-cards"}>
					<Image
						url={this.props.sd}
						name={this.props.name}
						place={this.props.place}
					/>
				</div>
				<Modal
					hd={this.props.hd}
					isModalOpen={this.state.isModalOpen}
					toggleModal={this.toggleModal}
				/>
			</>
		);
	}
}

export default hot(PhotosCards);
