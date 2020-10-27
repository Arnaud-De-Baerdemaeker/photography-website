/* eslint-disable class-methods-use-this */
import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./home-page/home";
import About from "./about-page/about";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onHomePage: true
        };
        this.changeState = this.changeState.bind(this);
    }

    changeState() {
        this.setState({onHomePage: !this.state.onHomePage});
    }

    render() {
        return (
            <BrowserRouter>
                <Route exact path="/">
                    <HomePage
                        onHomePage={this.state.onHomePage}
                        changeState={this.changeState}
                    />
                </Route>
                <Route path="/about">
                    <About
                        onHomePage={this.state.onHomePage}
                        changeState={this.changeState}
                    />
                </Route>
            </BrowserRouter>
        );
    }
}

export default hot(App);
