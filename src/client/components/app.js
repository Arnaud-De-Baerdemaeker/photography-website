// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component, createRef, lazy, Suspense} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const HomePage = lazy(() => import("./homepage/homepage"));
const Gallery = lazy(() => import("./galleryPage/gallery"));
const Error404 = lazy(() => import("./error404/error404"));

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMenuOpen: false
		};
		this.elements;

		this.headerRef = createRef();

		this.setTabTitle = this.setTabTitle.bind(this);
		this.backToTop = this.backToTop.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.setScrollReveal = this.setScrollReveal.bind(this);
		this.applyHideClass = this.applyHideClass.bind(this);
		this.revealOnScroll = this.revealOnScroll.bind(this);
	}

	setTabTitle(title) {
		document.title = title;
	}

	backToTop() {
		if (window.scrollY !== 0) {
			window.scrollTo(0, 0);
		}
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

	setScrollReveal(elements) {
		// Get the elements to hide
		const fetchedElements = elements;

		// Apply a class to initially hide the elements
		this.applyHideClass(fetchedElements);

		// Each time the user scrolls, the list of elements is refreshed and sent to a function
		window.addEventListener("scroll", () => {
			const refetchedElements = fetchedElements;
			this.revealOnScroll(refetchedElements);
		});
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
				<Suspense fallback={<div>Loading</div>}>
					<Switch>
						<Route
							exact
							path={"/galerie"}
						>
							<Gallery
								isMenuOpen={this.state.isMenuOpen}
								headerRef={this.headerRef}
								setTabTitle={this.setTabTitle}
								backToTop={this.backToTop}
								toggleMenu={this.toggleMenu}
								closeMenu={this.closeMenu}
								setScrollReveal={this.setScrollReveal}
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
								headerRef={this.headerRef}
								setTabTitle={this.setTabTitle}
								backToTop={this.backToTop}
								toggleMenu={this.toggleMenu}
								closeMenu={this.closeMenu}
								setScrollReveal={this.setScrollReveal}
								applyHideClass={this.applyHideClass}
								revealOnScroll={this.revealOnScroll}
							/>
						</Route>
						<Route path="*">
							<Error404
								isMenuOpen={this.state.isMenuOpen}
								headerRef={this.headerRef}
								toggleMenu={this.toggleMenu}
								closeMenu={this.closeMenu}
								applyHideClass={this.applyHideClass}
								revealOnScroll={this.revealOnScroll}
								setTabTitle={this.setTabTitle}
							/>
						</Route>
					</Switch>
				</Suspense>
			</BrowserRouter>
		);
	}
}

export default App;