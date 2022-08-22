// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

import Hero from "../hero/hero";
import Image from "../image/image";
import myPhoto from "../../images/moi.png";

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
					jobPart1={"Développeur "}
					jobPart2={"web"}
					ampersand={"&"}
					hobbyPart1={"Amateur de "}
					hobbyPart2={"photographie"}
					titleClass={"hero__title--homepage"}
				/>
				<main className={"homepage"}>
					<div className={"homepage__my-photo"}>
						<Image
							url={myPhoto}
							alt={"Photo de moi"}
							class={"image__portrait"}
						/>
						<p className={"homepage__introduction"}>{"Bonjour, je m'appelle Arnaud !"}<br />{"Développeur web résidant en Belgique, dans la ville de Liège, et amateur de photographie."}</p>
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