// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

import Hero from "../hero/hero";
import PhotosCards from "../photos-cards/photos-cards";

class Gallery extends Component {
	componentDidMount() {
		// The condition checks if the scroll value is different from 0
		if (window.scrollY !== 0) {
			// If so, it sets the view at the top
			window.scrollTo(0, 0);
		}
	}

	render() {
		const photosCards = [];

		// The loop goes for each entry in the metadata.json file
		this.props.photos.forEach(photo => {
			// For each loop, an iteration of the <PhotoCards> component is created with different props. Then, the iteration is pushed in the array.
			photosCards.push(
				<li
					key={photo.name}
					className={"gallery__list-item"}>
					<PhotosCards
						sd={photo.sd}
						hd={photo.hd}
						name={photo.name}
						place={photo.place}
					/>
				</li>
			);
		});

		return (
			<>
				<Hero
					title={"Galerie"}
					subtitle={"Découvrez une sélection de mes captures"}
					containerClass={"hero__gallery"}
					titleClass={"hero__title--gallery"}
				/>
				<main className={"gallery"}>
					<div className={"gallery__list-container"}>
						<ul className={"gallery__list"}>
							{photosCards}
						</ul>
					</div>
				</main>
			</>
		);
	}
}

export default hot(Gallery);
