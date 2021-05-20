// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    render() {
        return (
            <footer className={"footer"}>
                <div className={"footer__left-box"}>
                    <ul className={"footer__links"}>
                        <li className={"footer__email"}>
                            <a
                                href={"mailto:de.baerdemaeker.arnaud@gmail.com"}
                                className={"footer__link"}>
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    alt={"E-mail"}
                                    title={"Contactez-moi"}
                                    className={"footer__email-icon"}
                                />
                            </a>
                        </li>
                        <li className={"footer__linkedin"}>
                            <a
                                href={
                                    "https://www.linkedin.com/in/arnaud-de-baerdemaeker/"
                                }
                                className={"footer__link"}>
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    alt={"LinkedIn"}
                                    title={"Mon profil LinkedIn"}
                                    className={"footer__linkedin-icon"}
                                />
                            </a>
                        </li>
                        <li className={"footer__github"}>
                            <a
                                href={
                                    "https://github.com/Arnaud-De-Baerdemaeker"
                                }
                                className={"footer__link"}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    alt={"GitHub"}
                                    title={"Mon travail sur GitHub"}
                                    className={"footer__github-icon"}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={"footer__right-box"}>
                    <p className={"footer__credits"}>
                        {"2020 Arnaud De Baerdemaeker"}
                        <br />
                        {"Tous droits réservés"}
                    </p>
                </div>
            </footer>
        );
    }
}

export default hot(Footer);
