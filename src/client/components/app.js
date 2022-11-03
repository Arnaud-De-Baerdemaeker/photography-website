// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "./header/header";
import Navigation from "./navigation/navigation";
import HomePage from "./homepage/homepage";
import Gallery from "./galleryPage/gallery";
import Error404 from "./error404/error404";
import Footer from "./footer/footer";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMenuOpen: false
		};
		this.elements;

		this.toggleMenu = this.toggleMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.applyHideClass = this.applyHideClass.bind(this);
		this.revealOnScroll = this.revealOnScroll.bind(this);
	}

	toggleMenu() {
		this.setState(state => ({
			isMenuOpen: !state.isMenuOpen
		}));
	}

	closeMenu() {
		if(this.state.isMenuOpen === true) {
			this.setState({
				isMenuOpen: false
			});
		}
	}

	applyHideClass(elements) {
		// Apply a class to initially hide the elements
		elements.forEach(element => {
			element.classList.add("view--hidden");
		});
	}

	revealOnScroll(elements) {
		// Recover the current viewport
		const viewport = window.innerHeight;

		elements.forEach(element => {
			// For each element, get its size and position coordinates
			const position = element.getBoundingClientRect();

			// Remove the hidden class when the element enters the viewport minus a definite length
			if(position.top <= (viewport - (position.height / 2))) {
				element.classList.replace("view--hidden", "view--visible");
			}
		});
	}

	render() {
		return (
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
							applyHideClass={this.applyHideClass}
							revealOnScroll={this.revealOnScroll}
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
							applyHideClass={this.applyHideClass}
							revealOnScroll={this.revealOnScroll}
						/>
					</Route>
					<Route path="*">
						<Error404 />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		);
	}
}

export default App;