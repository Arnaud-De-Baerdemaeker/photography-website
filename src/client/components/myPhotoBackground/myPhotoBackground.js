import React, {Component} from "react";

class MyPhotoBackground extends Component {
	render() {
		return(
			<svg
				viewBox={"0 0 300 300"}
				fill={"none"}
				xmlns={"http://www.w3.org/2000/svg"}
				xmlnsXlink={"http://www.w3.org/1999/xlink"}
				id={"myPhoto"}
			>
				<g clipPath={"url(#clip0_92_17)"}>
					<g filter={"url(#filter0_d_92_17)"}>
						<path
							d={"M0 150C-2.59359e-06 179.667 8.79734 208.668 25.2796 233.336C41.7618 258.003 65.1886 277.229 92.5975 288.582C120.006 299.935 150.166 302.906 179.264 297.118C208.361 291.33 235.088 277.044 256.066 256.066C277.044 235.088 291.33 208.361 297.118 179.264C302.906 150.166 299.935 120.006 288.582 92.5975C277.229 65.1886 258.003 41.7618 233.336 25.2796C208.668 8.79735 179.667 2.23981e-06 150 0L150 150L0 150Z"}
							className={"myPhoto__background3"}
						/>
					</g>
					<g filter={"url(#filter1_d_92_17)"}>
						<path
							d={"M150 25C174.723 25 198.89 32.3311 219.446 46.0663C240.002 59.8015 256.024 79.3238 265.485 102.165C274.946 125.005 277.421 150.139 272.598 174.386C267.775 198.634 255.87 220.907 238.388 238.388C220.907 255.87 198.634 267.775 174.386 272.598C150.139 277.421 125.005 274.946 102.165 265.485C79.3238 256.024 59.8015 240.002 46.0663 219.446C32.3311 198.89 25 174.723 25 150L150 150L150 25Z"}
							className={"myPhoto__background2"}
						/>
					</g>
					<g filter={"url(#filter2_d_92_17)"}>
						<path
							d={"M250 150C250 130.222 244.135 110.888 233.147 94.443C222.159 77.9981 206.541 65.1808 188.268 57.612C169.996 50.0433 149.889 48.0629 130.491 51.9215C111.093 55.78 93.2746 65.3041 79.2893 79.2893C65.3041 93.2746 55.78 111.093 51.9215 130.491C48.0629 149.889 50.0433 169.996 57.612 188.268C65.1808 206.541 77.9981 222.159 94.443 233.147C110.888 244.135 130.222 250 150 250L150 150H250Z"}
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
						x={"-15"}
						y={"-15"}
						width={"330"}
						height={"330"}
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
						x={"10"}
						y={"10"}
						width={"280"}
						height={"280"}
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
						x={"35"}
						y={"34.9999"}
						width={"230"}
						height={"230"}
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
						id={"image0_92_17"}
						href={this.props.href}
						width={"1050"}
						height={"1050"}
					/>
				</defs>
			</svg>
		);
	}
}

export default MyPhotoBackground;