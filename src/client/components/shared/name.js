import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class MyName extends Component
{
    render()
    {
        return (
            <div className={"my-name"}>{"Arnaud De Baerdemaeker"}</div>
        );
    }
}

export default hot(MyName);