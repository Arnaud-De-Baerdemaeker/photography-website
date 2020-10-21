import React from "react";
import {hot} from "react-hot-loader/root";

class Main extends React.Component {
    render() {
        return (
            <div className={"title"}>
                <h1 className={"title__main-title"}>{"ARNAUD"}<br />{"DE BAERDEMAEKER"}</h1>
            </div>
        );
    }
}

export default hot(Main);
