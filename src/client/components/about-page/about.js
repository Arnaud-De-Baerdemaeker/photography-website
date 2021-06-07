// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Navigation from "../navigation/navigation";
import Header from "../header/header";
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
                <h3
                    key={aboutMePageInputs.sections[i].title}
                    className={"introduction__title"}>
                    {aboutMePageInputs.sections[i].title}
                </h3>,
                <div className={"divider"} />,
            );
            if ("phrases" in aboutMePageInputs.sections[i]) {
                for (const paragraph of aboutMePageInputs.sections[i].phrases) {
                    introductionSection.push(
                        <p
                            key={paragraph}
                            className={"introduction__paragraph"}>
                            {paragraph}
                        </p>,
                    );
                }
            }
        }

        return (
            <>
                <Header headerTitle={aboutMePageInputs.headerTitle} />
                <Navigation />
                <main className={"about"}>
                    <section className={"container"}>
                        {introductionSection}
                    </section>
                    <div className={"about__my-photo container"}>
                        <figure className={"about__image-container"}>
                            <Image
                                url={MyPhoto}
                                alt={"Photo de moi"}
                                title={"Oui, c'est moi !"}
                                class={"about__image"}
                            />
                            <figcaption className={"about__image-caption"}>
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
