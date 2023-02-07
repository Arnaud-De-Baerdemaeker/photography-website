// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Hero from "../hero/hero";

class Portfolio extends Component {
    render() {
        return(
            <>
                <Header />
                <Navigation />
                <Hero />
            </>
        );
    }
}

export default Portfolio;
