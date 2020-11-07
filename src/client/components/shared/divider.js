import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

import WavesDivider from "./../../images/waves-divider.svg";

class Divider extends Component
{
    render()
    {
        return(
            <div>
                <img src={WavesDivider} />
            </div>
        );
    }
}

export default hot(Divider);