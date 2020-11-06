import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class Footer extends Component {
    render() {
        return (
            <footer className={"footer"}>
                <div className={"footer__left-box"}>
                    <ul className={"footer__links"}>
                        <li className={"footer__email"}>
                            <img
                                src={""}
                                alt={"E-mail"}
                                title={"Contactez-moi"}
                                loading={"lazy"}
                                className={"footer__email-icon"}
                            />
                        </li>
                        <li className={"footer__linkedin"}>
                            <img
                                src={""}
                                alt={"LinkedIn"}
                                title={"Mon profil LinkedIn"}
                                loading={"lazy"}
                                className={"footer__linkedin-icon"}
                            />
                        </li>
                        <li className={"footer__github"}>
                            <img
                                src={""}
                                alt={"GitHub"}
                                title={"Mon travail sur GitHub"}
                                loading={"lazy"}
                                className={"footer__github-icon"}
                            />
                        </li>
                    </ul>
                </div>
                <div className={"footer__right-box"}>
                    <p className={"footer__copyrights"}>{""}</p>
                </div>
            </footer>
        );
    }
}

export default hot(Footer);