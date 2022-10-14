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
					xmlns={"http://www.w3.org/2000/svg"}
					className={"loadingScreen__svg"}
				>
					<g clipPath={"url(#clip0_108_2)"}>
						<g className={"loadingScreen__group1"}>
							<path
								d={"M250 346.25C250 348.321 251.68 350.007 253.749 349.93C270.886 349.287 287.592 344.246 302.25 335.264C317.974 325.628 330.728 311.831 339.101 295.399C347.473 278.967 351.139 260.54 349.692 242.154C348.343 225.017 342.601 208.538 333.049 194.296C331.895 192.576 329.543 192.208 327.868 193.426V193.426C326.192 194.643 325.828 196.984 326.976 198.708C335.719 211.828 340.975 226.984 342.215 242.743C343.553 259.749 340.163 276.794 332.418 291.994C324.673 307.194 312.876 319.956 298.331 328.869C284.853 337.129 269.502 341.785 253.749 342.424C251.68 342.508 250 344.179 250 346.25V346.25Z"}
								className={"loadingScreen__arc1"}
							/>
							<path
								d={"M250 153.75C250 151.679 248.32 149.993 246.251 150.07C229.114 150.713 212.408 155.754 197.75 164.736C182.026 174.372 169.272 188.169 160.899 204.601C152.527 221.033 148.861 239.46 150.308 257.846C151.657 274.983 157.399 291.462 166.951 305.704C168.105 307.424 170.456 307.792 172.132 306.574V306.574C173.808 305.357 174.172 303.016 173.024 301.292C164.281 288.172 159.025 273.016 157.785 257.257C156.447 240.251 159.837 223.206 167.582 208.006C175.327 192.806 187.124 180.044 201.669 171.131C215.147 162.871 230.498 158.215 246.251 157.576C248.32 157.492 250 155.821 250 153.75V153.75Z"}
								className={"loadingScreen__arc2"}
							/>
						</g>
						<g className={"loadingScreen__group2"}>
							<path
								d={"M418.438 250C422.062 250 425.013 252.939 424.877 256.561C423.752 286.55 414.931 315.787 399.212 341.437C382.349 368.955 358.205 391.274 329.448 405.926C300.692 420.578 268.444 426.993 236.27 424.461C206.279 422.1 177.441 412.052 152.518 395.335C149.508 393.316 148.865 389.201 150.995 386.269V386.269C153.125 383.337 157.222 382.699 160.238 384.709C183.198 400.008 209.722 409.206 237.299 411.376C267.061 413.718 296.89 407.785 323.49 394.232C350.089 380.679 372.423 360.034 388.021 334.579C402.475 310.993 410.624 284.129 411.742 256.561C411.889 252.94 414.813 250 418.438 250V250Z"}
								className={"loadingScreen__arc3"}
							/>
							<path
								d={"M81.5625 250C77.9381 250 74.9872 247.061 75.123 243.439C76.248 213.45 85.0694 184.213 100.788 158.563C117.651 131.044 141.796 108.726 170.552 94.0737C199.308 79.4216 231.557 73.0072 263.731 75.5395C293.722 77.9 322.56 87.9483 347.483 104.665C350.493 106.684 351.136 110.8 349.006 113.732V113.732C346.875 116.664 342.778 117.302 339.762 115.292C316.802 99.9925 290.279 90.7946 262.701 88.6241C232.94 86.2817 203.11 92.215 176.511 105.768C149.911 119.321 127.577 139.966 111.979 165.42C97.5252 189.007 89.3761 215.871 88.258 243.439C88.1111 247.06 85.1869 250 81.5625 250V250Z"}
								className={"loadingScreen__arc4"}
							/>
						</g>
						<g className={"loadingScreen__group3"}>
							<path
								d={"M250 9.375C250 4.19733 245.801 -0.0183553 240.627 0.175736C197.785 1.78283 156.019 14.3848 119.375 36.8399C80.064 60.93 48.18 95.4219 27.2485 136.502C6.31694 177.583 -2.8467 223.651 0.770644 269.614C4.14249 312.459 18.4969 353.656 42.3783 389.26C45.2625 393.56 51.1412 394.479 55.3301 391.436V391.436C59.5189 388.392 60.4301 382.539 57.559 378.23C35.703 345.431 22.5634 307.54 19.4628 268.143C16.1168 225.627 24.5932 183.014 43.9548 145.015C63.3165 107.015 92.8092 75.1102 129.172 52.8269C162.867 32.1787 201.245 20.5373 240.627 18.94C245.8 18.7302 250 14.5527 250 9.375V9.375Z"}
								className={"loadingScreen__arc5"}
							/>
							<path
								d={"M250 490.625C250 495.803 254.199 500.018 259.373 499.824C302.215 498.217 343.981 485.615 380.625 463.16C419.936 439.07 451.82 404.578 472.752 363.498C493.683 322.417 502.847 276.349 499.229 230.385C495.857 187.541 481.503 146.344 457.622 110.74C454.737 106.44 448.859 105.521 444.67 108.564V108.564C440.481 111.608 439.57 117.461 442.441 121.769C464.297 154.569 477.437 192.46 480.537 231.856C483.883 274.373 475.407 316.986 456.045 354.985C436.684 392.985 407.191 424.89 370.828 447.173C337.133 467.821 298.755 479.463 259.373 481.06C254.2 481.27 250 485.447 250 490.625V490.625Z"}
								className={"loadingScreen__arc6"}
							/>
						</g>
						<text
							xmlSpace={"preserve"}
							className={"loadingScreen__text"}
						>
							<tspan
								x={"186.447"}
								y={"256.545"}
							>
								{"CHARGEMENT"}
							</tspan>
						</text>
					</g>

					<defs>
						<clipPath id={"clip0_108_2"}>
							<rect
								width={"500"}
								height={"500"}
								fill={"white"}
							/>
						</clipPath>
					</defs>
				</svg>
			</div>
		);
	}
}

export default Loading;