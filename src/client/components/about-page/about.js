// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Header from "../navigation/navigation";
import Footer from "../footer/footer";
//import Introduction from "../introduction/introduction";
import MyPhoto from "./../../images/moi.png";
import Image from "../image/image";
import {aboutMePageInputs} from "../../constants/constants";

class About extends Component {
    componentDidMount() {
        // The condition checks if the scroll value is different from 0
        if (window.scrollY !== 0) {
            // If so, it sets the view at the top
            window.scrollTo(0, 0);
        }
    }

    render() {
        const introductionSection = [];

        for (let i = 0; i < aboutMePageInputs.sections.length; i++) {
            introductionSection.push(
                <h3 className={"introduction__title"}>
                    {aboutMePageInputs.sections[i].title}
                </h3>,
            );
            if ("phrases" in aboutMePageInputs.sections[i]) {
                for (const paragraph of aboutMePageInputs.sections[i].phrases) {
                    introductionSection.push(
                        <p className={"introduction__paragraph"}>
                            {paragraph}
                        </p>,
                    );
                }
            }
        }

        return (
            <>
                <Header headerTitle={aboutMePageInputs.headerTitle} />
                <main className={"about"}>
                    <section className={"introduction__container container"}>
                        {introductionSection}
                    </section>
                    <div className={"about-me__my-photo"}>
                        <figure className={"about-me__image-container"}>
                            <Image
                                url={MyPhoto}
                                alternate_text={"Photo de moi"}
                                title={"Oui, c'est moi !"}
                                class={"about-me__image"}
                            />
                            <figcaption className={"about-me__image-caption"}>
                                {"C'est moi !"}
                            </figcaption>
                        </figure>
                    </div>
                </main>
                <Footer />
            </>
        );
    }
}

export default hot(About);
