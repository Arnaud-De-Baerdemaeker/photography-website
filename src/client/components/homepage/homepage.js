// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {hot} from "react-hot-loader/root";

import Image from "../image/image";
import myPhoto from "../../images/moi.png";

class HomePage extends Component {
	componentDidMount() {
		// The condition checks if the scroll value is different from 0
		if (window.scrollY !== 0) {
			// If so, it sets the view at the top
			window.scrollTo(0, 0);
		}
	}

	render() {
		return (
			<>
				{this.props.children}
				<main className={"homepage"}>
					<div className={"homepage__my-photo"}>
						<Image
							url={myPhoto}
							alt={"Photo de moi"}
							class={"my-photo__image"}
						/>
					</div>
					<div className={"homepage__introduction"}>
						<p className={"introduction__paragraph"}>{"Bonjour, je m'appelle Arnaud ! Développeur web résidant en Belgique, dans la ville de Liège, et amateur de photographie."}</p>
						<p className={"introduction__paragraph"}>{"Je suis arrivé dans le domaine du web un peu par hasard, et de fil en aiguille, j'ai été captivé. Mon apprentissage a commencé en tant qu'auto-didacte, internet étant une formidable source de tutoriels. Par la suite, j'ai tenu à officialiser mes acquis avec des formations. Aujourd'hui, je suis heureux d'avoir pu en faire mon métier."}</p>
						<p className={"introduction__paragraph"}>{"Vers la fin de ma formation, l'idée de me créer un petit portfolio s'est imposée. L'objectif était multiple : mettre en pratique les connaissances apprises, me présenter, et montrer les fruits de mon intérêt pour la photographie."}</p>
						<p className={"introduction__paragraph"}>{"Bien que touche-à-tout avec les technologies du web, j'affectionne particulièrement le fait de développer ma créativité pour construire des designs, rédiger des lignes de code, admirer leur logique, et les voir prendre vie dans le navigateur. Réfléchir aux couleurs à utiliser, à la disposition des différents éléments, aux formes, à l'expérience utilisateur, sont autant de problématiques que j'apprécie de résoudre soigneusement."}</p>
						<p className={"introduction__paragraph"}>{"De la même manière qu'avec le web, je me suis intéressé à la photographie et en ait acquis les bases par moi-même. Ce qui me plait, c'est d'immortaliser l'instant, montrer la beauté dans des choses ordinaires. La nature sous toutes ses formes, les architectures, et les photos rapprochées sont les types de sujets qui m'inspirent le plus."}</p>
						<p className={"introduction__paragraph"}>{"Durant mon temps libre, je prends plaisir à faire du vélo, jouer aux jeux vidéo, lire, ou tout simplement me balader entre-autres."}</p>
					</div>
				</main>
			</>
		);
	}
}

export default hot(withRouter(HomePage));
