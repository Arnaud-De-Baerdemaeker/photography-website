import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {NavLink} from "react-router-dom";
import Header from "./../shared/header";
import Footer from "./../shared/footer";
import Divider from "./../shared/divider";
import MyName from "./../shared/name";

class Gallery extends Component
{
    componentDidMount()
    {
        // The condition checks the value of the scroll
        if (window.scrollY !== 0)
        {
            // If the scroll is different than 0, it sets the view to the top
            window.scrollTo(0, 0);
        }
    }

    render()
    {
        return(
            <>
                <Header />
                <div className={"gallery"}>
                    <MyName />
                    <Divider
                        dividerContainer={this.props.dividerContainer[1]}
                        dividerImage={this.props.dividerImage[1]}
                    />
                    <section className={"gallery__intro-container"}>
                        <h2 className={"gallery__title-1"}>{"Bienvenue dans la galerie !"}</h2>
                        <p className={"gallery__intro"}>{"Dans cette section, vous allez pouvoir découvrir une sélection de mes photos."}</p>
                        <p className={"gallery__intro"}>{"Choisissez une année pour afficher les photos correspondantes."}</p>
                    </section>
                    <Divider
                        dividerContainer={this.props.dividerContainer[0]}
                        dividerImage={this.props.dividerImage[0]}
                    />
                    <div className={"gallery__years-container"}>
                        <ul className={"gallery__list"}>
                            <li className={"gallery__list-item"}>
                                <NavLink
                                    to={"/gallery/2014"}
                                    className={"gallery__link"}
                                >
                                    {"2014"}
                                </NavLink>
                            </li>
                            <li className={"gallery__list-item"}>
                                <NavLink
                                    to={"/gallery/2015"}
                                    className={"gallery__link"}
                                >
                                    {"2015"}
                                </NavLink>
                            </li>
                            <li className={"gallery__list-item"}>
                                <NavLink
                                    to={"/gallery/2016"}
                                    className={"gallery__link"}
                                >
                                    {"2016"}
                                </NavLink>
                            </li>
                            <li className={"gallery__list-item"}>
                                <NavLink
                                    to={"/gallery/2017"}
                                    className={"gallery__link"}
                                >
                                    {"2017"}
                                </NavLink>
                            </li>
                            <li className={"gallery__list-item"}>
                                <NavLink
                                    to={"/gallery/2018"}
                                    className={"gallery__link"}
                                >
                                    {"2018"}
                                </NavLink>
                            </li>
                            <li className={"gallery__list-item"}>
                                <NavLink
                                    to={"/gallery/2019"}
                                    className={"gallery__link"}
                                >
                                    {"2019"}
                                </NavLink>
                            </li>
                            <li className={"gallery__list-item"}>
                                <NavLink
                                    to={"/gallery/2020"}
                                    className={"gallery__link"}
                                >
                                    {"2020"}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default hot(Gallery);