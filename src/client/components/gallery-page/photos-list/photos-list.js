import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Header from "../../shared/header";
import Footer from "../../shared/footer";
// import Divider from "./../shared/divider";
import PhotosCards from "./photos-cards";

class PhotosList extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            // Store the props into a state
            data: this.props.photos,
            // create an array
            card: []
        }
    }

    render()
    {
        // The loop goes on following the numbers of entries in the metadata.js file
        for (let i = 1; i < this.state.data.length; i++)
        {
            // For each loop, an iteration of the <PhotoCards> component is created with, each time, different props. Then, the iteration is pushed in the array.
            this.state.card.push(
                <PhotosCards
                    url={this.state.data[i].url}
                    name={this.state.data[i].name}
                    day={this.state.data[i].day}
                    date={this.state.data[i].date}
                    time={this.state.data[i].time}
                    aperture={this.state.data[i].aperture}
                    shutter_speed={this.state.data[i].shutter_speed}
                    focal_length={this.state.data[i].focal_length}
                    iso={this.state.data[i].iso}
                    camera={this.state.data[i].camera}
                    model={this.state.data[i].model}
                />
            )
        }

        return(
            <>
                <Header />
                <div>
                    <div>
                        <h1 className={"main-title"}>{this.props.photos[0].title}</h1>
                    </div>
                    {this.state.card}
                </div>
                <Footer />
            </>
        );
    }
}

export default hot(PhotosList);