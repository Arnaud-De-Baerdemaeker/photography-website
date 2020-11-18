/* eslint-disable class-methods-use-this */
import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./home-page/home";
import Gallery from "./gallery-page/gallery";
import About from "./about-page/about";

class App extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            dividerContainer: ["divider--top", "divider--bottom"],
            dividerImage: ["divider__image--top", "divider__image--bottom"]
        }
    }
    render()
    {
        return(
            <BrowserRouter>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/gallery">
                    <Gallery
                        dividerContainer={this.state.dividerContainer}
                        dividerImage={this.state.dividerImage}
                    />
                </Route>
                <Route path="/about">
                    <About
                        dividerContainer={this.state.dividerContainer}
                        dividerImage={this.state.dividerImage}
                    />
                </Route>
            </BrowserRouter>
        );
    }
}

export default hot(App);