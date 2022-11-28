// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component, createRef} from "react";

import Image from "../image/image";

class PhotosCards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: null
		}
		this.city;
		this.country;
		this.photosLocation;

		this.photosCardsRef = createRef();
		this.overlayRef = createRef();

		this.showOverlay = this.showOverlay.bind(this);
		this.hideOverlay = this.hideOverlay.bind(this);
		this.handleTags = this.handleTags.bind(this);
	}

	showOverlay() {
		this.overlayRef.current.classList.add("hover");
	}

	hideOverlay() {
		this.overlayRef.current.classList.remove("hover");
	}

	handleTags() {
		const splittedTags = this.props.tags.split(" ");
		this.photosLocation = {};
		this.photosLocation["city"] = splittedTags[0];
		this.photosLocation["country"] = splittedTags[1];
		this.setState({
			tags: this.photosLocation
		});
	}

	componentDidMount() {
		if("ontouchstart" in window) {
			null;
		}
		else {
			this.photosCardsRef.current.addEventListener("mouseover", this.showOverlay);
			this.photosCardsRef.current.addEventListener("mouseout", this.hideOverlay);
		}

		this.handleTags();
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
					<div className={"photosCards__container"}>
						<span className={"photosCards__city"}>{this.photosLocation && this.photosLocation.city}</span>
						{" "}
						<span className={"photosCards__country"}>{this.photosLocation && this.photosLocation.country}</span>
					</div>
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