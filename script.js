// script.js

const images = ['Image_1', 'Image_2', 'Image_3.jpg', 'Image_4.jpg'];
let currentIndex = 0;

function changeBackgroundImage() {
    const backgroundSlider = document.getElementById('background-slider');
    backgroundSlider.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

changeBackgroundImage(); // Initial call
setInterval(changeBackgroundImage, 10000); // Call every 10 seconds
