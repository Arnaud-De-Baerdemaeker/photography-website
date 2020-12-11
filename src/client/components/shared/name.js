import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class MyName extends Component {
    render() {
        return <h1 className={"my-name"}>{"Arnaud De Baerdemaeker"}</h1>;
    }
}

export default hot(MyName);
