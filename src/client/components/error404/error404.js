// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";

import Header from "../header/header";
import Footer from "../footer/footer";

class Error404 extends Component {
    render() {
        return(
            <>
                <Header />
                <Footer />
            </>
        );
    }
}

export default hot(Error404);
