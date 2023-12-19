var navBar = document.getElementById("navBar");
function hideMenu(){
    navBar.style.right = "-200px";
}
function showMenu(){
    navBar.style.right = "0";
}

// JavaScript
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function showNextImage() {
currentIndex = (currentIndex + 1) % images.length;
updateCarousel();
}

function showPrevImage() {
currentIndex = (currentIndex - 1 + images.length) % images.length;
updateCarousel();
}

function updateCarousel() {
const translateX = -currentIndex * 100; // 100% for each image
carouselContainer.style.transform = `translateX(${translateX}%)`;
}

// Add event listeners to the buttons
prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);


let currentIndex = 0;
const images = document.querySelectorAll('.carousel-container img');
const carouselContainer = document.querySelector('.carousel-container');

function showNextImage() {
currentIndex = (currentIndex + 1) % images.length;
const translateX = -currentIndex * 100; // 100% for each image
carouselContainer.style.transform = `translateX(${translateX}%)`;
}

// Automatically advance to the next image every 3 seconds (adjust as needed)
setInterval(showNextImage, 3000);


function clickNextImage(){

}