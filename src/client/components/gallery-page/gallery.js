// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import Header from "../header/header";
//import Introduction from "../introduction/introduction";
import {galleryPageInputs} from "../../constants/constants";
import Link from "../link/link";

class Gallery extends Component {
    render() {
        // The condition checks the value of the scroll
        if (window.scrollY !== 0) {
            // If the scroll is different than 0, it sets the view to the top
            window.scrollTo(0, 0);
        }

        const introductionSection = [];

        for (let i = 0; i < galleryPageInputs.sections.length; i++) {
            introductionSection.push(
                <h3
                    key={galleryPageInputs.sections[i].title}
                    className={"introduction__title"}>
                    {galleryPageInputs.sections[i].title}
                </h3>,
                <div className={"divider"} />,
            );
            if ("phrases" in galleryPageInputs.sections[i]) {
                for (const paragraph of galleryPageInputs.sections[i].phrases) {
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
                <Header headerTitle={galleryPageInputs.headerTitle} />
                <Navigation />
                <main className={"gallery"}>
                    <section className={"introduction-container"}>
                        {introductionSection}
                    </section>
                    <div className={"gallery__years-container"}>
                        <ul className={"gallery__list"}>
                            <Link
                                link={"/gallery/2014"}
                                url={this.props.thumbnail2014}
                                alternate_text={this.props.title2014}
                                year={this.props.title2014}
                            />
                            <Link
                                link={"/gallery/2015"}
                                url={this.props.thumbnail2015}
                                alternate_text={this.props.title2015}
                                year={this.props.title2015}
                            />
                            <Link
                                link={"/gallery/2016"}
                                url={this.props.thumbnail2016}
                                alternate_text={this.props.title2016}
                                year={this.props.title2016}
                            />
                            <Link
                                link={"/gallery/2017"}
                                url={this.props.thumbnail2017}
                                alternate_text={this.props.title2017}
                                year={this.props.title2017}
                            />
                            <Link
                                link={"/gallery/2018"}
                                url={this.props.thumbnail2018}
                                alternate_text={this.props.title2018}
                                year={this.props.title2018}
                            />
                            <Link
                                link={"/gallery/2019"}
                                url={this.props.thumbnail2019}
                                alternate_text={this.props.title2019}
                                year={this.props.title2019}
                            />
                        </ul>
                    </div>
                </main>
                <Footer />
            </>
        );
    }
}

export default hot(Gallery);
