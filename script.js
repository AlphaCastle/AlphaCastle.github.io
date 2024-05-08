// script.js

const images = ['Image_1', 'Image_2', 'Image_3', 'Image_4'];
let currentIndex = 0;

function changeBackgroundImage() {
    const backgroundSlider = document.getElementById('background-slider');
    backgroundSlider.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

changeBackgroundImage(); // Initial call
setInterval(changeBackgroundImage, 1500); // Call every 10 seconds
