// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component, lazy, Suspense} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Loading from "./loading-screen/loading-screen.js";
import Header from "./header/header";
import Navigation from "./navigation/navigation";
const HomePage = lazy(() => import("./homepage/homepage"));
const Gallery = lazy(() => import("./gallery-page/gallery"));
const Error404 = lazy(() => import("./error404/error404"));
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
		this.getElements= this.getElements.bind(this);
		this.applyHideClass = this.applyHideClass.bind(this);
		this.transferOnScroll = this.transferOnScroll.bind(this);
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

	getElements() {
		// Recover all the elements that need to be scroll revealed depending of the active route
		switch(window.location.pathname) {
			case "/galerie":
				this.elements = document.querySelectorAll(".gallery__list-item, .footer__links, .footer__name, .footer__credits");
				break;
			default:
				this.elements = document.querySelectorAll(".image__portrait, .homepage__introduction, .homepage__title, .homepage__paragraph, .footer__links, .footer__name, .footer__credits");
		}
	}

	applyHideClass() {
		this.getElements();

		// Apply a class to initially hide the content
		this.elements.forEach(element => {
			element.classList.add("view--hidden");
		});
	}

	transferOnScroll() {
		this.getElements();
		this.revealOnScroll(this.elements);
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
				<Suspense fallback={<Loading />}>
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
								transferOnScroll={this.transferOnScroll}
								backToTop={this.backToTop}
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
								transferOnScroll={this.transferOnScroll}
								backToTop={this.backToTop}
							/>
						</Route>
						<Route path="*">
							<Error404 />
						</Route>
					</Switch>
				</Suspense>
				<Footer />
			</BrowserRouter>
		);
	}
}

export default App;