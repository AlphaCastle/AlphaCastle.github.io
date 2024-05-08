// script.js

const images = ['Image_1', 'Image_2', 'Image_3', 'Image_4'];
let currentIndex = 0;
const backgroundSlider = document.getElementById('background-slider');

function changeBackgroundImage() {
    backgroundSlider.style.opacity = 0;
    setTimeout(() => {
        backgroundSlider.style.backgroundImage = images[currentIndex];
        backgroundSlider.style.opacity = 1;
        currentIndex = (currentIndex + 1) % images.length;
    }, 500); // Change image after 0.5 seconds (500 milliseconds)
}

setInterval(changeBackgroundImage, 5500); // Change image every 1.5 seconds (1500 milliseconds)
