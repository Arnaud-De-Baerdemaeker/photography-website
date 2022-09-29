import React, {Component} from "react";

class MyPhotoBackground extends Component {
	render() {
		return(
			<svg
				viewBox={"0 0 300 300"}
				fill={"none"}
				xmlns={"http://www.w3.org/2000/svg"}
				xmlnsXlink={"http://www.w3.org/1999/xlink"}
			>
				<g clipPath={"url(#clip0_92_17)"}>
					<g filter={"url(#filter0_d_92_17)"}>
						<path
							d={"M150 285C176.7 285 202.801 277.082 225.002 262.248C247.203 247.414 264.506 226.33 274.724 201.662C284.942 176.994 287.615 149.85 282.406 123.663C277.197 97.4754 264.34 73.4207 245.459 54.5406C226.579 35.6605 202.525 22.803 176.337 17.594C150.15 12.385 123.006 15.0584 98.3378 25.2763C73.6697 35.4941 52.5856 52.7974 37.7516 74.998C22.9176 97.1986 15 123.3 15 150L150 150L150 285Z"}
							className={"myPhoto__background3"}
						/>
					</g>
					<g filter={"url(#filter1_d_92_17)"}>
						<path
							d={"M35 150C35 174.286 42.6883 197.948 56.963 217.595C71.2378 237.243 91.3661 251.867 114.463 259.371C137.56 266.876 162.44 266.876 185.537 259.371C208.634 251.867 228.762 237.243 243.037 217.595C257.312 197.948 265 174.286 265 150C265 125.714 257.312 102.052 243.037 82.4047C228.762 62.7572 208.634 48.1332 185.537 40.6285C162.44 33.1238 137.56 33.1238 114.463 40.6285L150 150L35 150Z"}
							className={"myPhoto__background2"}
						/>
					</g>
					<g filter={"url(#filter2_d_92_17)"}>
						<path
							d={"M150 55C128.661 55 107.944 62.1842 91.1861 75.3949C74.4284 88.6056 62.6063 107.073 57.6249 127.823C52.6434 148.572 54.7927 170.394 63.7264 189.773C72.6601 209.151 87.8579 224.958 106.871 234.646C125.884 244.333 147.605 247.338 168.534 243.175C189.462 239.012 208.38 227.924 222.239 211.698C236.097 195.471 244.089 175.052 244.927 153.73C245.765 132.407 239.399 111.424 226.857 94.1604L150 150L150 55Z"}
							className={"myPhoto__background1"}
						/>
					</g>
					<g filter={"url(#filter3_d_92_17)"}>
						<rect
							x={"75"}
							y={"75"}
							width={"150"}
							height={"150"}
							rx={"75"}
							fill={"url(#pattern0)"}
							shapeRendering={"geometricPrecision"}
						/>
					</g>
				</g>

				<defs>
					<filter
						id={"filter0_d_92_17"}
						x={"0"}
						y={"-6.10352e-05"}
						width={"300"}
						height={"300"}
						filterUnits={"userSpaceOnUse"}
						colorInterpolationFilters={"sRGB"}
					>
						<feFlood
							floodOpacity={"0"}
							result={"BackgroundImageFix"}
						/>
						<feColorMatrix
							in={"SourceAlpha"}
							type={"matrix"}
							values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
							result={"hardAlpha"}
						/>
						<feMorphology
							radius={"5"}
							operator={"dilate"}
							in={"SourceAlpha"}
							result={"effect1_dropShadow_92_17"}
						/>
						<feOffset />
						<feGaussianBlur stdDeviation={"5"} />
						<feComposite
							in2={"hardAlpha"}
							operator={"out"}
						/>
						<feColorMatrix
							type={"matrix"}
							values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}
						/>
						<feBlend
							mode={"normal"}
							in2={"BackgroundImageFix"}
							result={"effect1_dropShadow_92_17"}
						/>
						<feBlend
							mode={"normal"}
							in={"SourceGraphic"}
							in2={"effect1_dropShadow_92_17"}
							result={"shape"}
						/>
					</filter>
					<filter
						id={"filter1_d_92_17"}
						x={"20"}
						y={"20"}
						width={"260"}
						height={"260"}
						filterUnits={"userSpaceOnUse"}
						colorInterpolationFilters={"sRGB"}
					>
						<feFlood
							floodOpacity={"0"}
							result={"BackgroundImageFix"}
						/>
						<feColorMatrix
							in={"SourceAlpha"}
							type={"matrix"}
							values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
							result={"hardAlpha"}
						/>
						<feMorphology
							radius={"5"}
							operator={"dilate"}
							in={"SourceAlpha"}
							result={"effect1_dropShadow_92_17"}
						/>
						<feOffset />
						<feGaussianBlur stdDeviation={"5"} />
						<feComposite
							in2={"hardAlpha"}
							operator={"out"}
						/>
						<feColorMatrix
							type={"matrix"}
							values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}
						/>
						<feBlend
							mode={"normal"}
							in2={"BackgroundImageFix"}
							result={"effect1_dropShadow_92_17"}
						/>
						<feBlend
							mode={"normal"}
							in={"SourceGraphic"}
							in2={"effect1_dropShadow_92_17"}
							result={"shape"}
						/>
					</filter>
					<filter
						id={"filter2_d_92_17"}
						x={"39.9999"}
						y={"40"}
						width={"220"}
						height={"220"}
						filterUnits={"userSpaceOnUse"}
						colorInterpolationFilters={"sRGB"}
					>
						<feFlood
							floodOpacity={"0"}
							result={"BackgroundImageFix"}
						/>
						<feColorMatrix
							in={"SourceAlpha"}
							type={"matrix"}
							values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
							result={"hardAlpha"}
						/>
						<feMorphology
							radius={"5"}
							operator={"dilate"}
							in={"SourceAlpha"}
							result={"effect1_dropShadow_92_17"}
						/>
						<feOffset />
						<feGaussianBlur stdDeviation={"5"} />
						<feComposite
							in2={"hardAlpha"}
							operator={"out"}
						/>
						<feColorMatrix
							type={"matrix"}
							values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}
						/>
						<feBlend
							mode={"normal"}
							in2={"BackgroundImageFix"}
							result={"effect1_dropShadow_92_17"}
						/>
						<feBlend
							mode={"normal"}
							in={"SourceGraphic"}
							in2={"effect1_dropShadow_92_17"}
							result={"shape"}
						/>
					</filter>
					<filter
						id={"filter3_d_92_17"}
						x={"60"}
						y={"60"}
						width={"180"}
						height={"180"}
						filterUnits={"userSpaceOnUse"}
						colorInterpolationFilters={"sRGB"}
					>
						<feFlood
							floodOpacity={"0"}
							result={"BackgroundImageFix"}
						/>
						<feColorMatrix
							in={"SourceAlpha"}
							type={"matrix"}
							values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
							result={"hardAlpha"}
						/>
						<feMorphology
							radius={"5"}
							operator={"dilate"}
							in={"SourceAlpha"}
							result={"effect1_dropShadow_92_17"}
						/>
						<feOffset />
						<feGaussianBlur stdDeviation={"5"} />
						<feComposite
							in2={"hardAlpha"}
							operator={"out"}
						/>
						<feColorMatrix
							type={"matrix"}
							values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}
						/>
						<feBlend
							mode={"normal"}
							in2={"BackgroundImageFix"}
							result={"effect1_dropShadow_92_17"}
						/>
						<feBlend
							mode={"normal"}
							in={"SourceGraphic"}
							in2={"effect1_dropShadow_92_17"}
							result={"shape"}
						/>
					</filter>
					<pattern
						id={"pattern0"}
						patternContentUnits={"objectBoundingBox"}
						width={"1"}
						height={"1"}
					>
						<use
							xlinkHref={"#image0_92_17"}
							transform={"scale(0.000952381)"}
						/>
					</pattern>
					<clipPath id={"clip0_92_17"}>
						<rect
							width={"300"}
							height={"300"}
							fill={"white"}
						/>
					</clipPath>
					<image
						href={this.props.href}
						id={"image0_92_17"}
						width={"1050"}
						height={"1050"}
					/>
				</defs>
			</svg>
		);
	}
}

export default MyPhotoBackground;

{/* <svg
							viewBox={"15 10 280 280"}
							fill={"none"}
							xmlns={"http://www.w3.org/2000/svg"}
							xmlnsXlink={"http://www.w3.org/1999/xlink"}
							className={"myPhoto__container"}
						>
							<path
								d={"M229.5 27.5C185.5 55.9 186 74.5 126.5 64C69 20.5 -17.5 126 45.5 136.5C69.2248 140.454 41.5 271.5 92 280.5C142.5 289.5 271.5 271.5 271 241.5C270.5 211.5 246.5 215 243.5 179.5C240.5 144 266 107 277 83C288 59 284.5 -7.99999 229.5 27.5Z"}
								className={"myPhoto__background1"}
								/>
							<path
								d={"M258 104C224.4 90.8 201.333 56.1667 194 40.5C167.5 -11.5 90 22.5 79.5 33C69 43.5 43 79.5 57.5 138C72 196.5 13 223.5 32 252C51 280.5 98.5 233 172.5 274.5C246.5 316 240.5 238 255.5 223.5C270.5 209 300 120.5 258 104Z"}
								className={"myPhoto__background2"}
							/>
							<path
								d={"M286.5 127C285.3 122.2 282.722 119.153 278 118.5C273.535 117.882 263 120.5 262 125C261 129.5 270.167 128.667 273 130.5C276.833 133 282.1 139.1 284.5 137.5C287.5 135.5 288 133 286.5 127Z"}
								className={"myPhoto__background3"}
							/>
							<path
								d={"M54.9725 28.2945C50.9725 24.6945 35.5063 23.3772 31.9725 27.7945C25.9725 35.2945 34.8725 45.1945 42.4725 48.7945C50.0725 52.3945 57.561 47.8232 58.9725 44.2945C60.9725 39.2944 58.9725 31.8945 54.9725 28.2945Z"}
								className={"myPhoto__background4"}
							/>
							<image
								href={myPhoto}
								alt={"Photo de moi"}
								id={"myPhoto"}
								className={"myPhoto__portrait"}
							/>
						</svg> */}
						{/* <svg
							viewBox="0 0 300 300"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							className={"myPhoto__container"}
						>
							<path
								d="M150 57.375C150 56.0633 148.936 54.9969 147.625 55.0297C127.128 55.542 107.321 62.6749 91.1861 75.3949C74.4284 88.6056 62.6063 107.073 57.6249 127.823C52.6434 148.572 54.7927 170.394 63.7264 189.773C72.6601 209.151 87.8579 224.958 106.871 234.646C125.884 244.333 147.605 247.338 168.534 243.175C189.462 239.012 208.38 227.924 222.239 211.698C236.097 195.471 244.089 175.052 244.927 153.73C245.733 133.199 239.862 112.983 228.229 96.0993C227.484 95.0192 225.996 94.7854 224.935 95.5564V95.5564C223.874 96.3274 223.642 97.8111 224.385 98.8922C235.392 114.912 240.945 134.079 240.18 153.543C239.385 173.799 231.792 193.198 218.627 208.613C205.461 224.028 187.489 234.561 167.607 238.516C147.725 242.471 127.09 239.617 109.027 230.413C90.965 221.21 76.5271 206.194 68.0401 187.784C59.5531 169.374 57.5112 148.643 62.2436 128.932C66.976 109.22 78.2069 91.6753 94.1268 79.1251C109.424 67.0657 128.195 60.2925 147.625 59.7812C148.936 59.7467 150 58.6867 150 57.375V57.375Z"
								className={"myPhoto__background1"}
								/>
							<path
								d="M37.875 150C36.2872 150 34.9962 151.288 35.0359 152.875C35.6177 176.149 43.2522 198.724 56.963 217.595C71.2378 237.243 91.3661 251.867 114.463 259.371C137.56 266.876 162.44 266.876 185.537 259.371C208.634 251.867 228.762 237.243 243.037 217.595C257.312 197.948 265 174.286 265 150C265 125.714 257.312 102.052 243.037 82.4047C228.762 62.7572 208.634 48.1332 185.537 40.6285C163.352 33.4203 139.523 33.1355 117.208 39.7742C115.687 40.227 114.861 41.8527 115.351 43.3628V43.3628C115.842 44.8729 117.463 45.6954 118.986 45.2446C140.145 38.98 162.73 39.2641 183.76 46.0971C205.702 53.2265 224.824 67.1193 238.385 85.7844C251.946 104.45 259.25 126.929 259.25 150C259.25 173.071 251.946 195.55 238.385 214.216C224.824 232.881 205.702 246.773 183.76 253.903C161.818 261.032 138.182 261.032 116.24 253.903C94.2978 246.773 75.1759 232.881 61.6149 214.216C48.6179 196.327 41.3683 174.934 40.7878 152.875C40.7461 151.288 39.4628 150 37.875 150V150Z"
								className={"myPhoto__background2"}
								/>
							<path
								d="M150 281.625C150 283.489 151.512 285.004 153.375 284.958C178.895 284.32 203.738 276.457 225.002 262.248C247.203 247.414 264.506 226.33 274.724 201.662C284.942 176.994 287.615 149.85 282.406 123.663C277.197 97.4754 264.34 73.4207 245.459 54.5406C226.579 35.6605 202.525 22.803 176.337 17.594C150.15 12.385 123.006 15.0584 98.3378 25.2763C73.6697 35.4941 52.5856 52.7974 37.7516 74.998C23.5433 96.2623 15.6802 121.105 15.0422 146.625C14.9956 148.488 16.511 150 18.375 150V150C20.239 150 21.7454 148.488 21.7944 146.625C22.4309 122.44 29.8974 98.9023 43.364 78.7481C57.4563 57.6575 77.4862 41.2194 100.921 31.5124C124.355 21.8055 150.142 19.2657 175.02 24.2143C199.898 29.1629 222.75 41.3775 240.686 59.3136C258.623 77.2497 270.837 100.102 275.786 124.98C280.734 149.858 278.194 175.645 268.488 199.079C258.781 222.514 242.342 242.544 221.252 256.636C201.098 270.103 177.56 277.569 153.375 278.206C151.512 278.255 150 279.761 150 281.625V281.625Z"
								className={"myPhoto__background3"}
							/>
							<image
								href={myPhoto}
								alt={"Photo de moi"}
								id={"myPhoto"}
								className={"myPhoto__portrait"}
							/>
						</svg> */}
						{/* <svg
							width="300"
							height="300"
							viewBox="0 0 300 300"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
						>
							<g clip-path="url(#clip0_92_17)">
								<g filter="url(#filter0_d_92_17)">
									<path
										d="M150 285C176.7 285 202.801 277.082 225.002 262.248C247.203 247.414 264.506 226.33 274.724 201.662C284.942 176.994 287.615 149.85 282.406 123.663C277.197 97.4754 264.34 73.4207 245.459 54.5406C226.579 35.6605 202.525 22.803 176.337 17.594C150.15 12.385 123.006 15.0584 98.3378 25.2763C73.6697 35.4941 52.5856 52.7974 37.7516 74.998C22.9176 97.1986 15 123.3 15 150L150 150L150 285Z"
										fill="#777777"
									/>
								</g>
								<g filter="url(#filter1_d_92_17)">
									<path
										d="M35 150C35 174.286 42.6883 197.948 56.963 217.595C71.2378 237.243 91.3661 251.867 114.463 259.371C137.56 266.876 162.44 266.876 185.537 259.371C208.634 251.867 228.762 237.243 243.037 217.595C257.312 197.948 265 174.286 265 150C265 125.714 257.312 102.052 243.037 82.4047C228.762 62.7572 208.634 48.1332 185.537 40.6285C162.44 33.1238 137.56 33.1238 114.463 40.6285L150 150L35 150Z"
										fill="#ABABAB"
									/>
								</g>
								<g filter="url(#filter2_d_92_17)">
									<path
										d="M150 55C128.661 55 107.944 62.1842 91.1861 75.3949C74.4284 88.6056 62.6063 107.073 57.6249 127.823C52.6434 148.572 54.7927 170.394 63.7264 189.773C72.6601 209.151 87.8579 224.958 106.871 234.646C125.884 244.333 147.605 247.338 168.534 243.175C189.462 239.012 208.38 227.924 222.239 211.698C236.097 195.471 244.089 175.052 244.927 153.73C245.765 132.407 239.399 111.424 226.857 94.1604L150 150L150 55Z"
										fill="#D9D9D9"
									/>
								</g>
								<g filter="url(#filter3_d_92_17)">
									<rect
										x="75"
										y="75"
										width="150"
										height="150"
										rx="75"
										fill="url(#pattern0)"
										shapeRendering="crispEdges"
									/>
								</g>
							</g>
							<defs>
								<filter
									id="filter0_d_92_17"
									x="0"
									y="-6.10352e-05"
									width="300"
									height="300"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood
										floodOpacity="0"
										result="BackgroundImageFix"
									/>
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feMorphology
										radius="5"
										operator="dilate"
										in="SourceAlpha"
										result="effect1_dropShadow_92_17"
									/>
									<feOffset />
									<feGaussianBlur stdDeviation="5" />
									<feComposite
										in2="hardAlpha"
										operator="out"
									/>
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_92_17"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_92_17"
										result="shape"
									/>
								</filter>
								<filter
									id="filter1_d_92_17"
									x="20"
									y="20"
									width="260"
									height="260"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood
										floodOpacity="0"
										result="BackgroundImageFix"
									/>
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feMorphology
										radius="5"
										operator="dilate"
										in="SourceAlpha"
										result="effect1_dropShadow_92_17"
									/>
									<feOffset />
									<feGaussianBlur stdDeviation="5" />
									<feComposite
										in2="hardAlpha"
										operator="out"
									/>
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_92_17"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_92_17"
										result="shape"
									/>
								</filter>
								<filter
									id="filter2_d_92_17"
									x="39.9999"
									y="40"
									width="220"
									height="220"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood
										floodOpacity="0"
										result="BackgroundImageFix"
									/>
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feMorphology
										radius="5"
										operator="dilate"
										in="SourceAlpha"
										result="effect1_dropShadow_92_17"
									/>
									<feOffset />
									<feGaussianBlur stdDeviation="5" />
									<feComposite
										in2="hardAlpha"
										operator="out"
									/>
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_92_17"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_92_17"
										result="shape"
									/>
								</filter>
								<filter
									id="filter3_d_92_17"
									x="60"
									y="60"
									width="180"
									height="180"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood
										floodOpacity="0"
										result="BackgroundImageFix"
									/>
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feMorphology
										radius="5"
										operator="dilate"
										in="SourceAlpha"
										result="effect1_dropShadow_92_17"
									/>
									<feOffset />
									<feGaussianBlur stdDeviation="5" />
									<feComposite
										in2="hardAlpha"
										operator="out"
									/>
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_92_17"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_92_17"
										result="shape"
									/>
								</filter>
								<pattern
									id="pattern0"
									patternContentUnits="objectBoundingBox"
									width="1"
									height="1"
								>
									<use
										xlinkHref="#image0_92_17"
										transform="scale(0.000952381)"
									/>
								</pattern>
								<clipPath id="clip0_92_17">
									<rect
										width="300"
										height="300"
										fill="white"
									/>
								</clipPath>
								<image href={myPhoto} id="image0_92_17" width="1050" height="1050" />
							</defs>
						</svg> */}