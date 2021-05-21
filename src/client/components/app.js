// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./home-page/home";
import Gallery from "./gallery-page/gallery";
import About from "./about-page/about";
import PhotosList from "./photos-list/photos-list";
import data from "./../JSON/metadata.json";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/gallery/2014"}>
                        <PhotosList album={data.album_2014} />
                    </Route>
                    <Route exact path={"/gallery/2015"}>
                        <PhotosList album={data.album_2015} />
                    </Route>
                    <Route exact path={"/gallery/2016"}>
                        <PhotosList album={data.album_2016} location />
                    </Route>
                    <Route exact path={"/gallery/2017"}>
                        <PhotosList album={data.album_2017} />
                    </Route>
                    <Route exact path={"/gallery/2018"}>
                        <PhotosList album={data.album_2018} />
                    </Route>
                    <Route exact path={"/gallery/2019"}>
                        <PhotosList album={data.album_2019} />
                    </Route>
                    <Route exact path={"/gallery"}>
                        <Gallery />
                    </Route>
                    <Route exact path={"/about"}>
                        <About />
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
