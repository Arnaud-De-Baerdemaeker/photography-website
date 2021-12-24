// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Helmet} from "react-helmet";
import HomePage from "./homepage/homepage";
import Gallery from "./gallery-page/gallery";
import photos from "./../JSON/metadata.json";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMenuOpen: false
		};
		this.toggleMenu = this.toggleMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	toggleMenu() {
		this.setState(state => ({
			isMenuOpen: !state.isMenuOpen
		}));
	}

	closeMenu() {
		if (this.state.isMenuOpen === true) {
			this.setState({
				isMenuOpen: false
			});
		}
	}

	render() {
		const fullName = {
			firstName: "Arnaud",
			lastName: "De Baerdemaeker"
		};

		return (
			<>
				<Helmet>
					<meta
						name={"viewport"}
						content={"width=device-width, initial-scale=1.0"}
					/>
					<link
						rel={"preconnect"}
						href={"https://fonts.googleapis.com"}
					/>
					<link
						rel={"preconnect"}
						href={"https://fonts.gstatic.com"}
						crossOrigin
					/>
					<link
						href={"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"}
						rel={"stylesheet"}
					/>
					<title>{"Arnaud De Baerdemaeker"}</title>
				</Helmet>
				<BrowserRouter>
					<Switch>
						<Route exact path={"/gallery"}>
							<Gallery
								fullName={fullName}
								isMenuOpen={this.state.isMenuOpen}
								toggleMenu={this.toggleMenu}
								closeMenu={this.closeMenu}
								photos={photos}
							/>
						</Route>
						<Route exact path={"/"}>
							<HomePage
								fullName={fullName}
								isMenuOpen={this.state.isMenuOpen}
								toggleMenu={this.toggleMenu}
								closeMenu={this.closeMenu}
							/>
						</Route>
					</Switch>
				</BrowserRouter>
			</>
		);
	}
}

export default hot(App);
