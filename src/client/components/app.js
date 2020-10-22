/* eslint-disable class-methods-use-this */
import React from "react";
import {hot} from "react-hot-loader/root";
import Homepage from "./homepage.js";
import {BrowserRouter, Route} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/">
                    <Homepage />
                </Route>
            </BrowserRouter>
        );
    }
}

export default hot(App);
