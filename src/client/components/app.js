// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./home-page/home";
import Gallery from "./gallery-page/gallery";
import About from "./about-page/about";
import PhotosList from "./gallery-page/photos-list/photos-list";
import data from "./../JSON/metadata.json";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dividerContainer: ["divider--top", "divider--bottom"],
            dividerImage: ["divider__image--top", "divider__image--bottom"],
        };
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/gallery/2014"}>
                        <PhotosList
                            album={data.album_2014}
                            dividerContainer={this.state.dividerContainer}
                            dividerImage={this.state.dividerImage}
                        />
                    </Route>
                    <Route exact path={"/gallery/2015"}>
                        <PhotosList
                            album={data.album_2015}
                            dividerContainer={this.state.dividerContainer}
                            dividerImage={this.state.dividerImage}
                        />
                    </Route>
                    <Route exact path={"/gallery/2016"}>
                        <PhotosList
                            album={data.album_2016}
                            dividerContainer={this.state.dividerContainer}
                            dividerImage={this.state.dividerImage}
                            location
                        />
                    </Route>
                    <Route exact path={"/gallery/2017"}>
                        <PhotosList
                            album={data.album_2017}
                            dividerContainer={this.state.dividerContainer}
                            dividerImage={this.state.dividerImage}
                        />
                    </Route>
                    <Route exact path={"/gallery/2018"}>
                        <PhotosList
                            album={data.album_2018}
                            dividerContainer={this.state.dividerContainer}
                            dividerImage={this.state.dividerImage}
                        />
                    </Route>
                    <Route exact path={"/gallery/2019"}>
                        <PhotosList
                            album={data.album_2019}
                            dividerContainer={this.state.dividerContainer}
                            dividerImage={this.state.dividerImage}
                        />
                    </Route>
                    <Route exact path={"/gallery"}>
                        <Gallery
                            dividerContainer={this.state.dividerContainer}
                            dividerImage={this.state.dividerImage}
                        />
                    </Route>
                    <Route exact path={"/about"}>
                        <About
                            dividerContainer={this.state.dividerContainer}
                            dividerImage={this.state.dividerImage}
                        />
                    </Route>
                    <Route exact path={"/"}>
                        <HomePage />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default hot(App);
