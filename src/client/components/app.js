/* eslint-disable class-methods-use-this */
import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./home-page/home";
import Gallery from "./gallery-page/gallery";
import About from "./about-page/about";

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/gallery">
                    <Gallery />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </BrowserRouter>
        );
    }
}

export default hot(App);