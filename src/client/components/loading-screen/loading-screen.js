// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React, {Component} from "react";

class Loading extends Component {
	render() {
		return(
			<div className={"loadingScreen"}>
				<svg
					viewBox={"0 0 500 500"}
					className={"loadingScreen__container"}
					xmlns={"http://www.w3.org/2000/svg"}
				>
					<g>
						<circle
							cx={"250"}
							cy={"250"}
							r={"2"}
							className={"loadingScreen__starSymbolDot"}
						/>
						<circle
							cx={"250"}
							cy={"250"}
							r={"7"}
							className={"loadingScreen__starSymbol"}
						/>
					</g>
					<g>
						<path
							d={"M313 250C313 215.206 284.794 187 250 187C215.206 187 187 215.206 187 250C187 284.794 215.206 313 250 313C284.794 313 313 284.794 313 250Z"}
							className={"loadingScreen__planet1Orbit"}
						/>
						<circle
							cx={"250"}
							cy={"187"}
							r={"5"}
							className={"loadingScreen__planet1"}
						/>
					</g>
					<g>
						<path
							d={"M375 250C375 180.964 319.036 125 250 125C180.964 125 125 180.964 125 250C125 319.036 180.964 375 250 375C319.036 375 375 319.036 375 250Z"}
							className={"loadingScreen__planet2Orbit"}
						/>
						<circle
							cx={"375"}
							cy={"250"}
							r={"8"}
							className={"loadingScreen__planet2"}
						/>
					</g>
					<g>
						<path
							d={"M445 250C445 142.304 357.696 55 250 55C142.304 55 55 142.304 55 250C55 357.696 142.304 445 250 445C357.696 445 445 357.696 445 250Z"}
							className={"loadingScreen__planet3Orbit"}
						/>
						<circle
							cx={"250"}
							cy={"445"}
							r={"13"}
							className={"loadingScreen__planet3"}
						/>
					</g>
					<g>
						<path
							d={"M496 250C496 114.138 385.862 4 250 4C114.138 4 4 114.138 4 250C4 385.862 114.138 496 250 496C385.862 496 496 385.862 496 250Z"}
							className={"loadingScreen__planet4Orbit"}
						/>
						<circle
							cx={"4"}
							cy={"250"}
							r={"4"}
							className={"loadingScreen__planet4"}
						/>
					</g>
				</svg>
			</div>
		);
	}
}

export default Loading;