import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

import Mail from "./../../images/email-icon.svg";
import LinkedIn from "./../../images/linkedin-icon.png";
import GitHub from "./../../images/github-icon.png";

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
                                <img
                                    src={Mail}
                                    alt={"E-mail"}
                                    title={"Contactez-moi"}
                                    loading={"lazy"}
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
                                <img
                                    src={LinkedIn}
                                    alt={"LinkedIn"}
                                    title={"Mon profil LinkedIn"}
                                    loading={"lazy"}
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
                                <img
                                    src={GitHub}
                                    alt={"GitHub"}
                                    title={"Mon travail sur GitHub"}
                                    loading={"lazy"}
                                    className={"footer__github-icon"}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={"footer__right-box"}>
                    <p className={"footer__credits"}>
                        {"2020 Réalisé par Arnaud De Baerdemaeker"}
                    </p>
                </div>
            </footer>
        );
    }
}

export default hot(Footer);
