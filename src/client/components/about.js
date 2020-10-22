import React from "react";
import {hot} from "react-hot-loader/root";
import Header from "./header";

class About extends React.Component {
    render() {
        return (
            <>
                <Header />
                <h1>{"Qui suis-je ?"}</h1>
            </>
        );
    }
}

export default hot(About);