/* eslint-disable class-methods-use-this */
import React from "react";
import {hot} from "react-hot-loader/root";
import Header from "./header";
import Main from "./main-content";

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Main />
            </>
        );
    }
}

export default hot(App);
