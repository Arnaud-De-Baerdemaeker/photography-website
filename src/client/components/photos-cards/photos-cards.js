// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Image from "../image/image";
import Modal from "../modal/modal";

class PhotosCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    // Function that changes the boolean state each time it is called
    handleOnClick() {
        this.setState(state => ({modalIsOpen: !state.modalIsOpen}));
    }

    render() {
        return (
            <>
                <div className={"photos-cards__card"}>
                    <figure className={"photos-cards__image-container"}>
                        <Image
                            url={this.props.thumbnail}
                            // On click, it displays the full image in a modal
                            onClick={this.handleOnClick}
                            class={"photos-cards__image"}
                        />
                        <figcaption className={"photos-card__caption"}>
                            {this.props.author}
                        </figcaption>
                    </figure>
                    <div className={"photos-cards__metadata"}>
                        <h3 className={"photos-cards__title-2"}>
                            {this.props.name}
                        </h3>
                        <ul className={"photos-cards__list"}>
                            <li className={"photos-cards__list-item"}>
                                {`${this.props.day} ${this.props.date} ${this.props.month} ${this.props.year}, ${this.props.hours}:${this.props.minutes}`}
                            </li>
                            <li className={"photos-cards__list-item"}>
                                {this.props.place}
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
                </div>
                {/* Modal that is active only when the user clicks on the thumbnail */}
                {this.state.modalIsOpen ? (
                    <Modal
                        url={this.props.full_image}
                        onClick={this.handleOnClick}
                    />
                ) : null}
            </>
        );
    }
}

export default hot(PhotosCards);
