// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    render() {
        const year = new Date();

        return (
            <footer
                className={
                    this.props.lightModeOn ? "footer" : "footer--dark-mode"
                }>
                <div className={"footer__social-container"}>
                    <ul
                        className={
                            this.props.lightModeOn
                                ? "footer__links"
                                : "footer__links--dark-mode"
                        }>
                        <li className={"footer__network"}>
                            <a
                                href={"mailto:de.baerdemaeker.arnaud@gmail.com"}
                                target={"_blank"}
                                rel={"noreferrer noopener"}
                                className={"footer__link"}>
                                <i
                                    className={
                                        this.props.lightModeOn
                                            ? "material-icons"
                                            : "material-icons dark-mode"
                                    }
                                    alt={"Email"}
                                    title={"Contactez-moi"}>
                                    {"email"}
                                </i>
                            </a>
                        </li>
                        <li className={"footer__network"}>
                            <a
                                href={
                                    "https://www.linkedin.com/in/arnaud-de-baerdemaeker/"
                                }
                                target={"_blank"}
                                rel={"noreferrer noopener"}
                                className={"footer__link"}>
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    alt={"LinkedIn"}
                                    title={"Mon profil LinkedIn"}
                                    className={
                                        this.props.lightModeOn
                                            ? "footer__icon"
                                            : "footer__icon--dark-mode"
                                    }
                                />
                            </a>
                        </li>
                        <li className={"footer__network"}>
                            <a
                                href={
                                    "https://github.com/Arnaud-De-Baerdemaeker"
                                }
                                target={"_blank"}
                                rel={"noreferrer noopener"}
                                className={"footer__link"}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    alt={"GitHub"}
                                    title={"Mon travail sur GitHub"}
                                    className={
                                        this.props.lightModeOn
                                            ? "footer__icon"
                                            : "footer__icon--dark-mode"
                                    }
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={"footer__credits-container"}>
                    <p className={"footer__credits"}>
                        {`${year.getUTCFullYear()} Arnaud De Baerdemaeker`}
                    </p>
                    <p className={"footer__credits"}>
                        {"Tous droits réservés"}
                    </p>
                    <p className={"footer__credits"}>{"Version 1.0.1"}</p>
                </div>
            </footer>
        );
    }
}

export default hot(Footer);
