// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Header from "../header/header";
import Footer from "../footer/footer";
import MyName from "../my-name/my-name";
import PhotosCards from "../photos-cards/photos-cards";

class PhotosList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // create an array
            card: [],
        };
    }

    render() {
        // The condition checks if the value of the scroll is different than 0.
        if (window.scrollY !== 0) {
            // If it is, it restores the view to the top.
            window.scrollTo(0, 0);
        }

        // The loop goes on following the number of entries in the metadata.json file
        for (let i = 0; i < this.props.album.photos.length; i++) {
            // For each loop, an iteration of the <PhotoCards> component is created with, each time, different props. Then, the iteration is pushed in the array.
            this.state.card.push(
                <PhotosCards
                    key={i}
                    full_image={this.props.album.photos[i].full_image}
                    thumbnail={this.props.album.photos[i].thumbnail}
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
                <Header />
                <div className={"photos-list"}>
                    <MyName />
                    <div className={"photos-list__title-container"}>
                        <h2 className={"photos-list__title-1"}>
                            {this.props.album.title}
                        </h2>
                    </div>
                    <div className={"photos-list__cards"}>
                        {this.state.card}
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default hot(PhotosList);
