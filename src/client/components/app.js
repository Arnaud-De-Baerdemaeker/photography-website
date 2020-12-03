/* eslint-disable class-methods-use-this */
import React, {Component, lazy, Suspense} from "react";
import {hot} from "react-hot-loader/root";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./home-page/home";
import Gallery from "./gallery-page/gallery";
import About from "./about-page/about";
import PhotosList from "./gallery-page/photos-list/photos-list";
import {photos2014, photos2015, photos2016, photos2017, photos2018, photos2019, photos2020} from "./../javascript/metadata";

class App extends Component
{
    constructor()
    {
        super();
        
        this.state =
        {
            dividerContainer:
            [
                "divider--top",
                "divider--bottom"
            ],
            dividerImage:
            [
                "divider__image--top",
                "divider__image--bottom"
            ]
        };
    }

    render()
    {
        return(
            <>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={"/gallery/2014"}>
                            <PhotosList
                                photos={photos2014}
                                dividerContainer={this.state.dividerContainer}
                                dividerImage={this.state.dividerImage}
                            />
                        </Route>
                        <Route exact path={"/gallery/2015"}>
                            <PhotosList
                                photos={photos2015}
                                dividerContainer={this.state.dividerContainer}
                                dividerImage={this.state.dividerImage}
                            />
                        </Route>
                        <Route exact path={"/gallery/2016"}>
                            <PhotosList
                                photos={photos2016}
                                dividerContainer={this.state.dividerContainer}
                                dividerImage={this.state.dividerImage}
                                location
                            />
                        </Route>
                        <Route exact path={"/gallery/2017"}>
                            <PhotosList
                                photos={photos2017}
                                dividerContainer={this.state.dividerContainer}
                                dividerImage={this.state.dividerImage}
                            />
                        </Route>
                        <Route exact path={"/gallery/2018"}>
                            <PhotosList
                                photos={photos2018}
                                dividerContainer={this.state.dividerContainer}
                                dividerImage={this.state.dividerImage}
                            />
                        </Route>
                        <Route exact path={"/gallery/2019"}>
                            <PhotosList
                                photos={photos2019}
                                dividerContainer={this.state.dividerContainer}
                                dividerImage={this.state.dividerImage}
                            />
                        </Route>
                        <Route exact path={"/gallery/2020"}>
                            <PhotosList
                                photos={photos2020}
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
            </>
        );
    }
}

export default hot(App);