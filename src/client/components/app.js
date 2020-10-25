/* eslint-disable class-methods-use-this */
import React from "react";
import {hot} from "react-hot-loader/root";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./home-page/home";
import About from "./about-page/about";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </BrowserRouter>
        );
    }
}

export default hot(App);
