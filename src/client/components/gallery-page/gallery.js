// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Header from "../header/header";
import Footer from "../footer/footer";
import MyName from "../my-name/my-name";
import Link from "../link/link";

class Gallery extends Component {
    componentDidMount() {
        // The condition checks the value of the scroll
        if (window.scrollY !== 0) {
            // If the scroll is different than 0, it sets the view to the top
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <>
                <Header />
                <div className={"gallery"}>
                    <MyName />
                    <section className={"gallery__intro-container"}>
                        <h2 className={"gallery__title-1"}>
                            {"Bienvenue dans la galerie !"}
                        </h2>
                        <p className={"gallery__intro"}>
                            {
                                "Dans cette section, vous allez pouvoir découvrir une sélection de mes photos."
                            }
                        </p>
                        <p className={"gallery__intro"}>
                            {
                                "Choisissez une année pour afficher les photos correspondantes."
                            }
                        </p>
                    </section>
                    <div className={"gallery__years-container"}>
                        <ul className={"gallery__list"}>
                            <Link
                                link={"/gallery/2014"}
                                url={
                                    "https://drive.google.com/uc?id=1FngJTHyYW4L07yL4UGMernAaaqQQsS42"
                                }
                                alternate_text={"2014"}
                                year={"2014"}
                            />
                            <Link
                                link={"/gallery/2015"}
                                url={
                                    "https://drive.google.com/uc?id=1cNj8fqVrLnoDzyUC5fPJ2OGE0WC4nYkA"
                                }
                                alternate_text={"2015"}
                                year={"2015"}
                            />
                            <Link
                                link={"/gallery/2016"}
                                url={
                                    "https://drive.google.com/uc?id=1E7yZKEU2g1ZtFf2vPLa2Z-H2NG_DWWIJ"
                                }
                                alternate_text={"2016"}
                                year={"2016"}
                            />
                            <Link
                                link={"/gallery/2017"}
                                url={
                                    "https://drive.google.com/uc?id=1UplsD-lSVjuKkCJ126wjINBWnEPrDb-W"
                                }
                                alternate_text={"2017"}
                                year={"2017"}
                            />
                            <Link
                                link={"/gallery/2018"}
                                url={
                                    "https://drive.google.com/uc?id=14_2JeZ5CNmIUpqA8XRGPM3oph9uNr_dn"
                                }
                                alternate_text={"2018"}
                                year={"2018"}
                            />
                            <Link
                                link={"/gallery/2019"}
                                url={
                                    "https://drive.google.com/uc?id=1X_cL_IzABX9I_DuEOv33yWR4e04JnYr5"
                                }
                                alternate_text={"2019"}
                                year={"2019"}
                            />
                        </ul>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default hot(Gallery);
