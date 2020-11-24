import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class PhotosCards extends Component
{
    render()
    {
        return(
            <div>
                <div>
                    <img src={this.props.url} />
                </div>
                <div>
                    <ul>
                        <li>
                            <h1>{this.props.name}</h1>
                        </li>
                        <li>{this.props.day}</li>
                        <li>{this.props.date}</li>
                        <li>{this.props.time}</li>
                        <li>{this.props.aperture}</li>
                        <li>{this.props.shutter_speed}</li>
                        <li>{this.props.focal_length}</li>
                        <li>{this.props.iso}</li>
                        <li>{this.props.camera}</li>
                        <li>{this.props.model}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default hot(PhotosCards);