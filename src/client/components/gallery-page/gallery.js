// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

import Hero from "../hero/hero";
import PhotosCards from "../photos-cards/photos-cards";

class Gallery extends Component {
	componentDidMount() {
		// The condition checks if the scroll value is different from 0
		if (window.scrollY !== 0) {
			// If so, it sets the view at the top
			window.scrollTo(0, 0);
		}

		window.addEventListener("scroll", this.applyHideClass);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.applyHideClass);
	}

	render() {
		const photosCards = [];

		// The loop goes for each entry in the metadata.json file
		this.props.photos.forEach(photo => {
			// For each loop, an iteration of the <PhotoCards> component is created with different props. Then, the iteration is pushed in the array.
			photosCards.push(
				<li
					key={photo.id}
					className={"gallery__list-item"}
				>
					<PhotosCards
						sd={photo.sd}
						hd={photo.hd}
						location={photo.location}
					/>
				</li>
			);
		});

		return (
			<>
				<Hero
					title={"Galerie"}
					subtitle={"Découvrez une sélection de mes captures"}
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

export default Gallery;
