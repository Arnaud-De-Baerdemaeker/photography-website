import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

class Hero extends Component {
    render() {
        return (
            <div className={"hero"}>
                <div className={"hero__back-filter"}>
                    <div className={"hero__gradient"}>
                        <h1 className={"hero__main-title"}>
                            {"ARNAUD"}
                            <br />
                            {"DE BAERDEMAEKER"}
                        </h1>
                        <h2 className={"hero__subtitle"}>
                            {"Développeur web"}
                            <br />
                            {"Amateur de photographie"}
                        </h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(Hero);
