import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Header from "./../shared/header";
import Footer from "./../shared/footer";

class Gallery extends Component {
    render() {
        return(
            <>
                <Header />
                <Footer />
            </>
        );
    }
}

export default hot(Gallery);