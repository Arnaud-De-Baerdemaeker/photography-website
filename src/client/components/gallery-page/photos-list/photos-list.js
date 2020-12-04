import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Header from "../../shared/header";
import Footer from "../../shared/footer";
import MyName from "./../../shared/name";
import Divider from "./../../shared/divider";
import PhotosCards from "./photos-cards";

class PhotosList extends Component
{
    constructor()
    {
        super();
        
        this.state =
        {
            // create an array
            card: []
        }
    }

    componentDidMount()
    {
        // The condition checks if the value of the scroll is different than 0.
        if (window.scrollY !== 0)
        {
            // If it is, it restores the view to the top.
            window.scrollTo(0, 0);
        }
    }

    render()
    {
        // The loop goes on following the number of entries in the metadata.js file
        for (let i = 1; i < this.props.photos.length; i++)
        {
            // For each loop, an iteration of the <PhotoCards> component is created with, each time, different props. Then, the iteration is pushed in the array.
            this.state.card.push(
                <PhotosCards
                    key={i}
                    full_image={this.props.photos[i].full_image}
                    thumbnail={this.props.photos[i].thumbnail}
                    author={this.props.photos[i].author}
                    name={this.props.photos[i].name}
                    place={this.props.photos[i].place}
                    day={this.props.photos[i].day}
                    date={this.props.photos[i].date}
                    time={this.props.photos[i].time}
                    aperture={this.props.photos[i].aperture}
                    shutter_speed={this.props.photos[i].shutter_speed}
                    focal_length={this.props.photos[i].focal_length}
                    iso={this.props.photos[i].iso}
                    camera={this.props.photos[i].camera}
                    model={this.props.photos[i].model}
                />
            );
        }

        return(
            <>
                <Header />
                <div className={"photos-list"}>
                    <MyName />
                    <Divider
                        dividerContainer={this.props.dividerContainer[1]}
                        dividerImage={this.props.dividerImage[1]}
                    />
                    <div className={"photos-list__title-container"}>
                        <h2 className={"photos-list__title-1"}>{this.props.photos[0].title}</h2>
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