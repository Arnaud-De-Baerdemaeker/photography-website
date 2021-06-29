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
        /*// The condition checks the value of the scroll
        if (window.scrollY !== 0) {
            // If the scroll is different than 0, it sets the view to the top
            window.scrollTo(0, 0);
        }*/

        const introductionSection = [];

        galleryPageInputs.sections.map(input =>
            introductionSection.push(
                <h3
                    key={input.title}
                    className={
                        this.props.lightModeOn
                            ? "introduction__title"
                            : "introduction__title--dark-mode"
                    }>
                    {input.title}
                </h3>,
                input.phrases.map(phrase => (
                    <p
                        key={phrase}
                        className={
                            this.props.lightModeOn
                                ? "introduction__paragraph"
                                : "introduction__paragraph--dark-mode"
                        }>
                        {phrase}
                    </p>
                )),
            ),
        );

        return (
            <>
                <Header
                    headerTitle={galleryPageInputs.headerTitle}
                    lightModeOn={this.props.lightModeOn}
                />
                <Navigation
                    lightModeOn={this.props.lightModeOn}
                    onHandleMode={this.props.onHandleMode}
                />
                <main
                    className={
                        this.props.lightModeOn
                            ? "gallery"
                            : "gallery--dark-mode"
                    }>
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
                <Footer lightModeOn={this.props.lightModeOn} />
            </>
        );
    }
}

export default hot(Gallery);
