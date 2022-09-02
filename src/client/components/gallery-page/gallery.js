// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

import photos from "../../json/metadata.json";

import Hero from "../hero/hero";
import PhotosCards from "../photos-cards/photos-cards";
import Button from "../button/button";

class Gallery extends Component {
	componentDidMount() {
		document.title = "Arnaud De Baerdemaeker | Galerie";

		// The condition checks if the scroll value is different from 0
		if (window.scrollY !== 0) {
			// If so, it sets the view at the top
			window.scrollTo(0, 0);
		}

		// Apply a class to initially hide the content
		this.props.applyHideClass();

		window.addEventListener("scroll", this.props.transferOnScroll);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.props.transferOnScroll);
	}

	render() {
		const photosCards = [];

		// The loop goes for each entry in the metadata.json file
		photos.forEach(photo => {
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
				<Button
					function={this.props.backToTop}
					alt={"Retour en haut de page"}
					containerClass={"button__backToTop"}
					iconClass={"button__bar--arrow-up"}
				/>
			</>
		);
	}
}

export default Gallery;