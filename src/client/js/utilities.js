// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

function resizeFontSize() {
	// Recover the elements to adapt the font size
	let
		objects = document.querySelectorAll(".hero__title--homepage, .title__ampersand"),
		adaptedFontSize,
		ampersandAdaptedFontSize
	;

	// Detect the orientation of the screen
	if(screen.orientation.type === "portrait-primary") {
		// Get the width of the container and multiply it
		adaptedFontSize = objects[0].offsetWidth * 0.15;
		ampersandAdaptedFontSize = objects[1].offsetWidth * 1;
	}
	else if(screen.orientation.type === "landscape-primary") {
		// Get the height of the container and multiply it
		adaptedFontSize = objects[0].offsetHeight * 0.10;
		ampersandAdaptedFontSize = objects[1].offsetHeight * 10;
	}

	// Set the obtained value as the new font size
	objects[0].style.fontSize = adaptedFontSize + "px";
	objects[0].style.lineHeight = adaptedFontSize + "px";
	objects[1].style.fontSize = ampersandAdaptedFontSize + "px";
}

export default resizeFontSize;