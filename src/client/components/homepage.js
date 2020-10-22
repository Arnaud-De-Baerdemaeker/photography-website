import React from "react";
import {hot} from "react-hot-loader/root";
import Header from "./header";

class Homepage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className={"title"}>
                    <h1 className={"title__main-title"}>{"ARNAUD"}<br />{"DE BAERDEMAEKER"}</h1>
                </div>
            </>
        );
    }
}

export default hot(Homepage);
