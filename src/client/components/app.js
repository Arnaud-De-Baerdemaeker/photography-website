/* eslint-disable class-methods-use-this */
import React from "react";
import {hot} from "react-hot-loader/root";
import {BrowserRouter, Route} from "react-router-dom";
import Homepage from "./homepage";
import About from "./about";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </BrowserRouter>
        );
    }
}

export default hot(App);
