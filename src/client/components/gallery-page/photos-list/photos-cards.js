import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class PhotosCards extends Component
{
    render()
    {
        return(
            <>
                <div className={"photos-cards__card"}>
                    <figure className={"photos-cards__image-container"}>
                        <img
                            src={this.props.thumbnail}
                            alt={"Image non trouvée"}
                            loading={"lazy"}
                            className={"photos-cards__image"}
                        />
                        <figcaption className={"photos-card__caption"}>{this.props.author}</figcaption>
                    </figure>
                    <div className={"photos-cards__metadata"}>
                        <h2 className={"photos-cards__title-2"}>{this.props.name}</h2>
                        <ul className={"photos-cards__list"}>
                            <li className={"photos-cards__list-item"}>{`${this.props.day} ${this.props.date}, ${this.props.time}`}</li>
                            <li className={"photos-cards__list-item"}>{this.props.place}</li>
                            <li className={"photos-cards__list-item"}>{this.props.aperture}</li>
                            <li className={"photos-cards__list-item"}>{this.props.shutter_speed}</li>
                            <li className={"photos-cards__list-item"}>{this.props.focal_length}</li>
                            <li className={"photos-cards__list-item"}>{this.props.iso}</li>
                            <li className={"photos-cards__list-item"}>{this.props.camera}</li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default hot(PhotosCards);