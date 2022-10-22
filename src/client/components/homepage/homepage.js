// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

import MyPhotoBackground from "../myPhotoBackground/myPhotoBackground";
import myPhoto from "../../images/moi.png";

import Hero from "../hero/hero";
import SVG from "../svg/svg";

class HomePage extends Component {
	componentDidMount() {
		document.title = "Arnaud De Baerdemaeker | Accueil";

		// The condition checks if the scroll value is different from 0
		if (window.scrollY !== 0) {
			// If so, it sets the view at the top
			window.scrollTo(0, 0);
		}

		// Apply a class to initially hide the content
		this.props.applyHideClass();

		// Each time the user scrolls, the function is called
		window.addEventListener("scroll", this.props.transferOnScroll);
	}

	componentWillUnmount() {
		window.addEventListener("scroll", this.props.transferOnScroll);
	}

	render() {
		return (
			<>
				<Hero
					heroContainerClass={"hero__container hero__background--1"}
					resizeFactorPortrait={0.15}
					applyLineHeightPortrait={true}
					heroTitleClass={"hero__title--homepage"}
					resizeFontSize={this.props.resizeFontSize}
					heroTitleContent={
						<>
							<span className={"title__jobPart1"}>{"Développeur "}</span>
							<span className={"title__jobPart2"}>{"web"}</span>
							<span
								data-resize-factor-portrait={1}
								className={"title__ampersand"}
							>
								{"&"}
							</span>
							<span className={"title__hobbyPart1"}>{"Amateur de "}</span>
							<span className={"title__hobbyPart2"}>{"photographie"}</span>
						</>
					}
					svgContent={
						<SVG
							width={"36"}
							height={"36"}
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
				<main className={"homepage"}>
					<div className={"homepage__myPhoto"}>
						<MyPhotoBackground
							href={myPhoto}
						/>
						<p className={"homepage__introduction"}>{"Bonjour, je m'appelle Arnaud !"}<br />{"Développeur front-end résidant à Liège, en Belgique, et amateur de photographie."}</p>
					</div>
					<div className={"homepage__description"}>
						<div className={"homepage__section"}>
							<h3 className={"homepage__title"}>{" Le développement web"}</h3>
							<p className={"homepage__paragraph"}>{"Je suis arrivé dans le domaine du web un peu par hasard, et de fil en aiguille, j'ai été captivé. Mon apprentissage a commencé en tant qu'auto-didacte, internet étant une formidable source de tutoriels. Par la suite, j'ai tenu à officialiser mes acquis avec des formations. Aujourd'hui, je suis heureux d'avoir pu en faire mon métier."}</p>
							<p className={"homepage__paragraph"}>{"Vers la fin de ma formation, l'idée de me créer un petit site personnel s'est imposée. L'objectif était multiple : mettre en pratique les connaissances apprises, me présenter, et montrer les fruits de mon intérêt pour la photographie."}</p>
							<p className={"homepage__paragraph"}>{"Bien que touche-à-tout avec les technologies du web, j'affectionne particulièrement le fait de développer ma créativité pour construire des designs, rédiger des lignes de code, admirer leur logique, et les voir prendre vie dans le navigateur. Réfléchir aux couleurs à utiliser, à la disposition des différents éléments, aux formes, à l'expérience utilisateur, sont autant de problématiques que j'apprécie de résoudre soigneusement."}</p>
						</div>
						<div className={"homepage__section"}>
							<h3 className={"homepage__title"}>{"La photographie"}</h3>
							<p className={"homepage__paragraph"}>{"De la même manière qu'avec le web, je me suis intéressé à la photographie et en ait acquis les bases par moi-même. Ce qui me plait, c'est d'immortaliser l'instant, montrer la beauté dans des choses ordinaires. La nature sous toutes ses formes, les architectures, et les photos rapprochées sont les types de sujets qui m'inspirent le plus."}</p>
							<p className={"homepage__paragraph"}>{"Durant mon temps libre, je prends plaisir à faire du vélo, jouer aux jeux vidéo, lire, ou tout simplement me balader entre-autres."}</p>
						</div>
					</div>
				</main>
			</>
		);
	}
}

export default HomePage;