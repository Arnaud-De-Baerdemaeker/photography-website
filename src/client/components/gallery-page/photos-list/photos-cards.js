import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class PhotosCards extends Component
{
    render()
    {
        return(
            <>
                <div className={"photos-cards__image-container"}>
                    <img
                        src={this.props.url}
                        className={"photos-cards__image"}
                    />
                </div>
                <div className={"photos-cards__metadata"}>
                    <ul className={"photos-cards__list"}>
                        <li className={"photos-cards__list-item"}>
                            <h2 className={"photos-cards__title-2"}>{this.props.name}</h2>
                        </li>
                        <li className={"photos-cards__list-item"}>{this.props.day}</li>
                        <li className={"photos-cards__list-item"}>{this.props.date}</li>
                        <li className={"photos-cards__list-item"}>{this.props.time}</li>
                        <li className={"photos-cards__list-item"}>{this.props.aperture}</li>
                        <li className={"photos-cards__list-item"}>{this.props.shutter_speed}</li>
                        <li className={"photos-cards__list-item"}>{this.props.focal_length}</li>
                        <li className={"photos-cards__list-item"}>{this.props.iso}</li>
                        <li className={"photos-cards__list-item"}>{this.props.camera}</li>
                        <li className={"photos-cards__list-item"}>{this.props.model}</li>
                    </ul>
                </div>
            </>
        );
    }
}

export default hot(PhotosCards);