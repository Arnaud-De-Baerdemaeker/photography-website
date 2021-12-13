// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Helmet} from "react-helmet";
import HomePage from "./homepage/homepage";
import Gallery from "./gallery-page/gallery";
import PhotosList from "./photos-list/photos-list";
import data from "./../JSON/metadata.json";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lightModeOn: true,
        };
        this.handleMode = this.handleMode.bind(this);
    }

    handleMode() {
        this.setState(state => ({
            lightModeOn: !state.lightModeOn,
        }));
    }

    render() {
        return (
            <>
                <Helmet>
                    <meta
                        name={"viewport"}
                        content={"width=device-width, initial-scale=1.0"}
                    />
                    <link
                        href={
                            "https://fonts.googleapis.com/icon?family=Material+Icons"
                        }
                        rel={"stylesheet"}
                    />
                    <link
                        rel={"preconnect"}
                        href={"https://fonts.googleapis.com"}
                    />
                    <link
                        rel={"preconnect"}
                        href={"https://fonts.gstatic.com"}
                        crossOrigin
                    />
                    <link
                        href={
                            "https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Bebas+Neue&family=Comfortaa:wght@300;400;500;600;700&display=swap"
                        }
                        rel={"stylesheet"}
                    />
                    <title>{"Arnaud De Baerdemaeker"}</title>
                </Helmet>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={"/gallery/2014"}>
                            <PhotosList
                                album={data[0].album_2014}
                                lightModeOn={this.state.lightModeOn}
                                onHandleMode={this.handleMode}
                            />
                        </Route>
                        <Route exact path={"/gallery/2015"}>
                            <PhotosList
                                album={data[1].album_2015}
                                lightModeOn={this.state.lightModeOn}
                                onHandleMode={this.handleMode}
                            />
                        </Route>
                        <Route exact path={"/gallery/2016"}>
                            <PhotosList
                                album={data[2].album_2016}
                                lightModeOn={this.state.lightModeOn}
                                onHandleMode={this.handleMode}
                            />
                        </Route>
                        <Route exact path={"/gallery/2017"}>
                            <PhotosList
                                album={data[3].album_2017}
                                lightModeOn={this.state.lightModeOn}
                                onHandleMode={this.handleMode}
                            />
                        </Route>
                        <Route exact path={"/gallery/2018"}>
                            <PhotosList
                                album={data[4].album_2018}
                                lightModeOn={this.state.lightModeOn}
                                onHandleMode={this.handleMode}
                            />
                        </Route>
                        <Route exact path={"/gallery/2019"}>
                            <PhotosList
                                album={data[5].album_2019}
                                lightModeOn={this.state.lightModeOn}
                                onHandleMode={this.handleMode}
                            />
                        </Route>
                        <Route exact path={"/gallery"}>
                            <Gallery
                                title2014={data[0].album_2014.title}
                                thumbnail2014={
                                    data[0].album_2014.photos[0]["576p"]
                                }
                                title2015={data[1].album_2015.title}
                                thumbnail2015={
                                    data[1].album_2015.photos[0]["576p"]
                                }
                                title2016={data[2].album_2016.title}
                                thumbnail2016={
                                    data[2].album_2016.photos[0]["576p"]
                                }
                                title2017={data[3].album_2017.title}
                                thumbnail2017={
                                    data[3].album_2017.photos[0]["576p"]
                                }
                                title2018={data[4].album_2018.title}
                                thumbnail2018={
                                    data[4].album_2018.photos[0]["576p"]
                                }
                                title2019={data[5].album_2019.title}
                                thumbnail2019={
                                    data[5].album_2019.photos[0]["576p"]
                                }
                                lightModeOn={this.state.lightModeOn}
                                onHandleMode={this.handleMode}
                            />
                        </Route>
                        <Route exact path={"/"}>
                            <HomePage
                                lightModeOn={this.state.lightModeOn}
                                onHandleMode={this.handleMode}
                            />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}

export default hot(App);
