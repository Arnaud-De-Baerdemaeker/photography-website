// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Header from "../header/header";
import Hero from "../hero/hero";
import Navigation from "../navigation/navigation";
import PhotosCards from "../photos-cards/photos-cards";
import Footer from "../footer/footer";

class Gallery extends Component {
	componentDidMount() {
		// The condition checks if the scroll value is different from 0
		if (window.scrollY !== 0) {
			// If so, it sets the view at the top
			window.scrollTo(0, 0);
		}
	}

	render() {
		const title = "Galerie";
		const subtitle = "Découvrez ci-dessous une sélection de mes captures"
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
				<Header
					isMenuOpen={this.props.isMenuOpen}
					toggleMenu={this.props.toggleMenu}
					closeMenu={this.props.closeMenu}
					fullName={this.props.fullName}
					class={"header__gallery"}
				/>
				<Hero
					title={title}
					subtitle={subtitle}
					class={"hero__gallery"}
				/>
				<Navigation
					isMenuOpen={this.props.isMenuOpen}
					toggleMenu={this.props.toggleMenu}
					closeMenu={this.props.closeMenu}
				/>
				<main className={"gallery"}>
					<div className={"gallery__list-container"}>
						<ul className={"gallery__list"}>
							{photosCards}
						</ul>
					</div>
				</main>
				<Footer />
			</>
		);
	}
}

export default hot(Gallery);
