// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

import Hero from "../hero/hero";
import SVG from "../svg/svg";
import PhotosCards from "../photosCards/photosCards";

import photos from "../../json/metadata.json";

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: []
		}
	}

	componentDidMount() {
		document.title = "Galerie | Arnaud De Baerdemaeker";

		// The condition checks if the scroll value is different from 0
		if (window.scrollY !== 0) {
			// If so, it sets the view at the top
			window.scrollTo(0, 0);
		}

		// Apply a class to initially hide the content
		this.props.applyHideClass();

		window.addEventListener("scroll", this.props.transferOnScroll);

		// Put the data from the json file in a state
		this.setState({photos: photos});
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.props.transferOnScroll);
	}

	render() {
		return (
			<>
				<Hero
					heroContainerClass={"hero__container hero__background--1"}
					heroTitleClass={"hero__title--gallery"}
					heroTitleContent={
						<>
							<span className={"title__page"}>{"Galerie"}</span>
							<span className={"title__intro"}>{"Découvrez une sélection de mes captures"}</span>
						</>
					}
					svgContent={
						<SVG
							viewBox={"0 0 36 36"}
							class={"iconBox"}
							xmlns={"http://www.w3.org/2000/svg"}
						>
							<g>
								<path
									d={"M6.20711 2.20711L17.2929 13.2929C17.6834 13.6834 18.3166 13.6834 18.7071 13.2929L29.7929 2.20711C30.1834 1.81658 30.1834 1.18342 29.7929 0.792893L29.7071 0.707107C29.3166 0.316582 28.6834 0.316583 28.2929 0.707107L18.7071 10.2929C18.3166 10.6834 17.6834 10.6834 17.2929 10.2929L7.70711 0.707107C7.31658 0.316583 6.68342 0.316583 6.29289 0.707107L6.20711 0.792893C5.81658 1.18342 5.81658 1.81658 6.20711 2.20711Z"}
									className={"topFigure__chevron"}
								/>
								<path
									d={"M17.2929 24.2929L6.20711 13.2071C5.81658 12.8166 5.81658 12.1834 6.20711 11.7929L6.29289 11.7071C6.68342 11.3166 7.31658 11.3166 7.70711 11.7071L17.2929 21.2929C17.6834 21.6834 18.3166 21.6834 18.7071 21.2929L28.2929 11.7071C28.6834 11.3166 29.3166 11.3166 29.7071 11.7071L29.7929 11.7929C30.1834 12.1834 30.1834 12.8166 29.7929 13.2071L18.7071 24.2929C18.3166 24.6834 17.6834 24.6834 17.2929 24.2929Z"}
									className={"middleFigure__chevron"}
								/>
								<path
									d={"M29.7929 24.2071L18.7071 35.2929C18.3166 35.6834 17.6834 35.6834 17.2929 35.2929L6.20711 24.2071C5.81658 23.8166 5.81658 23.1834 6.20711 22.7929L6.29289 22.7071C6.68342 22.3166 7.31658 22.3166 7.70711 22.7071L17.2929 32.2929C17.6834 32.6834 18.3166 32.6834 18.7071 32.2929L28.2929 22.7071C28.6834 22.3166 29.3166 22.3166 29.7071 22.7071L29.7929 22.7929C30.1834 23.1834 30.1834 23.8166 29.7929 24.2071Z"}
									className={"bottomFigure__chevron"}
								/>
							</g>
						</SVG>
					}
				/>
				<main className={"gallery"}>
					<ul className={"gallery__list"}>
						{this.state.photos.map(photo => 
							<li
								key={photo.id}
								className={"gallery__listItem"}
							>
								<PhotosCards
									sd={photo.sd}
									hd={photo.hd}
									location={photo.location}
								/>
							</li>
						)}
					</ul>
				</main>
			</>
		);
	}
}

export default Gallery;