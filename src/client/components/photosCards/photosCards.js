// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component, createRef} from "react";

import Image from "../image/image";

class PhotosCards extends Component {
	constructor(props) {
		super(props);

		this.photosCardsRef = createRef();
		this.overlayRef = createRef();

		this.showOverlay = this.showOverlay.bind(this);
		this.hideOverlay = this.hideOverlay.bind(this);
	}

	showOverlay() {
		this.overlayRef.current.style.opacity = 1;
	}

	hideOverlay() {
		this.overlayRef.current.style.opacity = 0;
	}

	componentDidMount() {
		if("ontouchstart" in window) {
			null;
		}
		else {
			this.photosCardsRef.current.addEventListener("mouseover", this.showOverlay);
			this.photosCardsRef.current.addEventListener("mouseout", this.hideOverlay);
		}
	}

	componentWillUnmount() {
		this.photosCardsRef.current.removeEventListener("mouseover", this.showOverlay);
		this.photosCardsRef.current.removeEventListener("mouseout", this.hideOverlay);
	}

	render() {
		return (
			<div
				ref={this.photosCardsRef}
				onClick={this.props.handleClick}
				className={"photosCards"}
			>
				<div
					ref={this.overlayRef}
					className={"photosCards__overlay"}
				>
					<span className={"photosCards__city"}>{this.props.location.city}</span>
					<span className={"photosCards__country"}>{this.props.location.country}</span>
				</div>
				<Image
					url={this.props.sd}
					hd={this.props.hd}
					class={"photosCards__image"}
				/>
			</div>
		);
	}
}

export default PhotosCards;