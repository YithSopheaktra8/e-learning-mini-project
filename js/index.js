const Aos = require("aos");

const slider = document.querySelector("#slider");

function onSlideLeft() {
	slider.scrollLeft -= 300;
}

function onSlideRight() {
	slider.scrollLeft += 300;
}
