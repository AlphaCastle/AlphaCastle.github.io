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

}

const modal = document.getElementById('login-modal');
const loginBtn = document.getElementById('login-btn');

// When the user clicks the login button, open the modal
loginBtn.onclick = function() {
    modal.style.display = 'block';
}

// Get the close button
const closeBtn = document.getElementsByClassName('close')[0];

// When the user clicks on the close button or outside of the modal, close it
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
