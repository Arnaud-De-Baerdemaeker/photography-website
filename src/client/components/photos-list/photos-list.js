// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Header from "../header/header";
import Footer from "../footer/footer";
import PhotosCards from "../photos-cards/photos-cards";
import {galleryPageInputs} from "../../constants/constants";
import Navigation from "../navigation/navigation";

class PhotosList extends Component {
    render() {
        // The condition checks if the value of the scroll is different than 0.
        if (window.scrollY !== 0) {
            // If it is, it restores the view to the top.
            window.scrollTo(0, 0);
        }

        const cards = [];

        // The loop goes on following the number of entries in the metadata.json file
        for (let i = 0; i < this.props.album.photos.length; i++) {
            // For each loop, an iteration of the <PhotoCards> component is created with, each time, different props. Then, the iteration is pushed in the array.
            cards.push(
                <PhotosCards
                    key={i}
                    sd={this.props.album.photos[i]["576p"]}
                    hd={this.props.album.photos[i]["1080p"]}
                    uhd={this.props.album.photos[i]["2160p"]}
                    author={this.props.album.photos[i].author}
                    name={this.props.album.photos[i].name}
                    place={this.props.album.photos[i].place}
                    day={this.props.album.photos[i].day}
                    date={this.props.album.photos[i].date}
                    month={this.props.album.photos[i].month}
                    year={this.props.album.photos[i].year}
                    hours={this.props.album.photos[i].hours}
                    minutes={this.props.album.photos[i].minutes}
                    aperture={this.props.album.photos[i].aperture}
                    shutter_speed={this.props.album.photos[i].shutter_speed}
                    focal_length={this.props.album.photos[i].focal_length}
                    iso={this.props.album.photos[i].iso}
                    camera={this.props.album.photos[i].camera}
                    model={this.props.album.photos[i].model}
                />,
            );
        }

        return (
            <>
                <Header
                    headerTitle={galleryPageInputs.headerTitle}
                    headerSubtitle={this.props.album.title}
                />
                <Navigation />
                <main className={"photos-list"}>{cards}</main>
                <Footer />
            </>
        );
    }
}

export default hot(PhotosList);
