// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Image from "../image/image";
import Button from "../button/button.js";

class PhotosCards extends Component {
    render() {
        const images = {
            hd: this.props.hd,
            //uhd: this.props.uhd,
        };

        return (
            <div
                className={
                    this.props.lightModeOn
                        ? "photos-cards__card"
                        : "photos-cards__card--dark-mode"
                }>
                <div className={"photos-cards__titles"}>
                    <h3
                        className={
                            this.props.lightModeOn
                                ? "photos-cards__mainTitle"
                                : "photos-cards__mainTitle--dark-mode"
                        }>
                        {this.props.name}
                    </h3>
                    <h4
                        className={
                            this.props.lightModeOn
                                ? "photos-cards__subtitle"
                                : "photos-cards__subtitle--dark-mode"
                        }>
                        {this.props.place}
                    </h4>
                </div>
                <figure className={"photos-cards__image-container"}>
                    <picture>
                        <Image
                            url={this.props.sd}
                            alt={this.props.name}
                            title={this.props.name}
                            class={"photos-cards__image"}
                        />
                    </picture>
                    <figcaption className={"photos-cards__caption"}>
                        {this.props.author}
                    </figcaption>
                </figure>
                <div className={"photos-cards__metadata"}>
                    <ul className={"photos-cards__list"}>
                        <li className={"photos-cards__list-item"}>
                            {`${this.props.day} ${this.props.date} ${this.props.month} ${this.props.year}, ${this.props.hours}:${this.props.minutes}`}
                        </li>
                        <li className={"photos-cards__list-item"}>
                            {`Ouverture : f/${this.props.aperture}`}
                        </li>
                        <li className={"photos-cards__list-item"}>
                            {`Vitesse d'obturation : ${this.props.shutter_speed}`}
                        </li>
                        <li className={"photos-cards__list-item"}>
                            {`Distance focale : ${this.props.focal_length} mm`}
                        </li>
                        <li className={"photos-cards__list-item"}>
                            {`ISO : ${this.props.iso}`}
                        </li>
                        <li className={"photos-cards__list-item"}>
                            {this.props.camera}
                        </li>
                    </ul>
                </div>
                <Button
                    fullImages={images}
                    lightModeOn={this.props.lightModeOn}
                />
            </div>
        );
    }
}

export default hot(PhotosCards);
