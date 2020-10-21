/* eslint-disable class-methods-use-this */
import React from "react";
import {hot} from "react-hot-loader/root";
import Header from "./header";

class App extends React.Component {
    render() {
        return <Header />;
    }
}

export default hot(App);
