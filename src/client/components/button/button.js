import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import Modal from "../modal/modal";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    // Function that changes the boolean state each time it is called
    handleOnClick() {
        this.setState(state => ({
            modalIsOpen: !state.modalIsOpen,
        }));
    }

    render() {
        return (
            <>
                <div className={"button__container"}>
                    <button
                        type={"button"}
                        onClick={this.handleOnClick}
                        className={"button__item"}>
                        {"Voir"}
                    </button>
                </div>
                {/* Modal that is active only when the user clicks on the thumbnail */}
                {this.state.modalIsOpen ? (
                    <Modal
                        url={this.props.fullImages}
                        onClick={this.handleOnClick}
                    />
                ) : null}
            </>
        );
    }
}

export default hot(Button);
