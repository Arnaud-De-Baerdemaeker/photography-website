// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {hot} from "react-hot-loader/root";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Helmet} from "react-helmet";

import Header from "./header/header";
import Navigation from "./navigation/navigation";
import HomePage from "./homepage/homepage";
import Gallery from "./gallery-page/gallery";
import Error404 from "./error404/error404";
import photos from "./../JSON/metadata.json";
import Footer from "./footer/footer";

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
		const heroElements = {
			homepageTitle: {
				job: {
					part1: "Développeur ",
					part2: "web",
				},
				ampersand: "&",
				hobby: {
					part1: "Amateur de ",
					part2: "photographie"
				}
			},
			galleryTitle: {
				title: "Galerie",
				subtitle: "Découvrez une sélection de mes captures"
			}
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
						href={"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=DM+Sans:wght@400;500;700&display=swap"}
						rel={"stylesheet"}
					/>
					{/* <title>{}</title> */}
				</Helmet>
				<BrowserRouter>
					<Header
						isMenuOpen={this.state.isMenuOpen}
						toggleMenu={this.toggleMenu}
						closeMenu={this.closeMenu}
					/>
					<Navigation
						isMenuOpen={this.state.isMenuOpen}
						toggleMenu={this.toggleMenu}
						closeMenu={this.closeMenu}
					/>
					<Switch>
						<Route
							exact
							path={"/galerie"}
						>
							<Gallery
								isMenuOpen={this.state.isMenuOpen}
								toggleMenu={this.toggleMenu}
								closeMenu={this.closeMenu}
								title={heroElements.galleryTitle}
								photos={photos}
							/>
						</Route>
						<Route
							exact
							path={"/"}
						>
							<HomePage
								isMenuOpen={this.state.isMenuOpen}
								toggleMenu={this.toggleMenu}
								closeMenu={this.closeMenu}
								title={heroElements.homepageTitle}
							/>
						</Route>
						<Route
							exact
							path={"*"}
						>
							<Error404 />
						</Route>
					</Switch>
					<Footer />
				</BrowserRouter>
			</>
		);
	}
}

export default hot(App);