// ======================================================================
// Carousel Functionality
// ======================================================================

// Select the necessary DOM elements for the carousel
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let index = 0; // Initialize the current image index

// Function to update the carousel's position based on the current index
function updateCarousel() {
    // Get the width of a single image to calculate the correct transform value
    // This makes the carousel responsive to different screen sizes
    if (images.length > 0) {
        const imageWidth = images[0].clientWidth;
        carouselImages.style.transform = `translateX(-${index * imageWidth}px)`;
    }
}

// Add event listener for the "next" button
nextButton.addEventListener('click', () => {
    // Increment the index and use the modulo operator to loop back to the start
    index = (index + 1) % images.length;
    updateCarousel();
});

// Add event listener for the "previous" button
prevButton.addEventListener('click', () => {
    // Decrement the index and handle the loop for negative numbers
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
});

// Add a window resize listener to update the carousel position if the screen size changes
window.addEventListener('resize', updateCarousel);

// Call updateCarousel initially to ensure the first image is displayed correctly on page load
window.addEventListener('load', updateCarousel);


// ======================================================================
// Mobile Menu Functionality
// ======================================================================

// Select the hamburger menu button and the navigation links container
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to the toggle button
navToggle.addEventListener('click', () => {
    // Toggle the 'show' class to display or hide the mobile menu
    navLinks.classList.toggle('show');
});

// Close the menu when a navigation link is clicked
const navLinksList = document.querySelectorAll('.nav-links li a');
navLinksList.forEach(link => {
    link.addEventListener('click', () => {
        // Remove the 'show' class to hide the menu after a link is selected
        navLinks.classList.remove('show');
    });
});

// Close the menu when the user clicks outside of the menu and the toggle button
document.addEventListener('click', (event) => {
    // Check if the click was outside of both the toggle button and the menu itself
    if (!navToggle.contains(event.target) && !navLinks.contains(event.target)) {
        // If the menu is currently open, close it
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    }
});
