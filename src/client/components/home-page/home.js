import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Header from "./../header/header";

class HomePage extends Component {
    render() {
        return (
            <div className={"home-page__container"}>
                <Header
                    onHomePage={this.props.onHomePage}
                    changeState={this.props.changeState}
                />
                <div className={"title"}>
                    <h1 className={"title__main-title"}>{"ARNAUD"}<br />{"DE BAERDEMAEKER"}</h1>
                </div>
            </div>
        );
    }
}

export default hot(HomePage);
