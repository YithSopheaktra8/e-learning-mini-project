const slider = document.querySelector('#slider');

function onSlideLeft() {
    slider.scrollLeft -= 500;
}

function onSlideRight() {
    slider.scrollLeft += 500;
}