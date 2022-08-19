// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component, lazy, Suspense} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Helmet} from "react-helmet";

import Loading from "./loading-screen/loading-screen.js";
const Header = lazy(() => import("./header/header"));
const Navigation = lazy(() => import("./navigation/navigation"));
const HomePage = lazy(() => import("./homepage/homepage"));
const Gallery = lazy(() => import("./gallery-page/gallery"));
const Error404 = lazy(() => import("./error404/error404"));
const Footer = lazy(() => import("./footer/footer"));

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
		if (this.state.isMenuOpen === true) {
			this.setState({
				isMenuOpen: false
			});
		}
	}

	getElements() {
		// Recover all the elements that need to be scroll revealed depending of the active route
		switch (window.location.pathname) {
			case "/galerie":
				this.elements = document.querySelectorAll(".gallery__list-item");
				break;
			default:
				this.elements = document.querySelectorAll(".image__portrait, .homepage__introduction, .homepage__title, .homepage__paragraph");
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
			if(position.top <= (viewport - 50)) {
				element.classList.replace("view--hidden", "view--visible");
			}
		});
	}

	render() {
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
				<Suspense fallback={<Loading />}>
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
									transferOnScroll={this.transferOnScroll}
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
								/>
							</Route>
							<Route path="*">
								<Error404 />
							</Route>
						</Switch>
						<Footer />
					</BrowserRouter>
				</Suspense>
			</>
		);
	}
}

export default App;