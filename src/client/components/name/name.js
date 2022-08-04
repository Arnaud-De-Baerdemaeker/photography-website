// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {Link} from "react-router-dom";

class Name extends Component {
    render() {
        return (
            <h1 className={this.props.class}>
				<Link
					to={"/"}
					onClick={this.props.closeMenu}
					className={"name__link"}
				>
					{"Arnaud"}
					<br />
					{"De Baerdemaeker"}
				</Link>
			</h1>
        );
    }
}

export default Name;