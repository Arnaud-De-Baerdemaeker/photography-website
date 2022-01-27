// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

import Name from "../name/name";

class Footer extends Component {
	render() {
		const year = new Date();

		return (
			<footer className={"footer"}>
				<div className={"footer__social-networks"}>
					<ul className={"footer__links"}>
						<li className={"footer__network"}>
							<a
								href={"mailto:de.baerdemaeker.arnaud@gmail.com"}
								target={"_blank"}
								rel={"noreferrer noopener"}
								className={"footer__link"}>
								<FontAwesomeIcon
									icon={faEnvelope}
									alt={"Email"}
									title={"Contactez-moi"}
									className={"footer__icon"}
								/>
							</a>
						</li>
						<li className={"footer__network"}>
							<a
								href={"https://www.instagram.com/los.2102/"}
								target={"_blank"}
								rel={"noreferrer noopener"}
								className={"footer__link"}>
								<FontAwesomeIcon
									icon={faInstagram}
									alt={"Instagram"}
									title={"Mon profil Instagram"}
									className={"footer__icon"}
								/>
							</a>
						</li>
						<li className={"footer__network"}>
							<a
								href={"https://www.linkedin.com/in/arnaud-de-baerdemaeker/"}
								target={"_blank"}
								rel={"noreferrer noopener"}
								className={"footer__link"}>
								<FontAwesomeIcon
									icon={faLinkedin}
									alt={"LinkedIn"}
									title={"Mon profil LinkedIn"}
									className={"footer__icon"}
								/>
							</a>
						</li>
						<li className={"footer__network"}>
							<a
								href={"https://github.com/Arnaud-De-Baerdemaeker"}
								target={"_blank"}
								rel={"noreferrer noopener"}
								className={"footer__link"}>
								<FontAwesomeIcon
									icon={faGithub}
									alt={"GitHub"}
									title={"Mon travail sur GitHub"}
									className={"footer__icon"}
								/>
							</a>
						</li>
					</ul>
				</div>
				<div className={"footer__credits-container"}>
					<Name class={"footer__name"} />
					<p className={"footer__credits"}>
						{`${year.getUTCFullYear()} - Tous droits réservés`}
					</p>
					<p className={"footer__credits"}>{"Version 2.0.0"}</p>
				</div>
			</footer>
		);
	}
}

export default hot(Footer);