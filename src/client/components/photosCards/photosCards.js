// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

import Image from "../image/image";

class PhotosCards extends Component {
	render() {
		return (
			<>
				<div
					onClick={this.props.handleClick}
					className={"photosCards"}
				>
					<Image
						url={this.props.sd}
						location={this.props.location}
						hd={this.props.hd}
						class={"photosCards__image"}
					/>
				</div>
			</>
		);
	}
}

export default PhotosCards;