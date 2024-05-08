// script.js

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
let currentIndex = 0;

function changeBackgroundImage() {
    const backgroundSlider = document.getElementById('background-slider');
    backgroundSlider.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

changeBackgroundImage(); // Initial call
setInterval(changeBackgroundImage, 10000); // Call every 10 seconds
