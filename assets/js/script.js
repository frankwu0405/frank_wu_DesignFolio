// Select the hamburger menu button and the navigation links
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to the toggle button
navToggle.addEventListener('click', () => {
  // Toggle the 'show' class on the navLinks to open/close the menu
  navLinks.classList.toggle('show');
});

// Close the menu when a navigation link is clicked
const navLinksList = document.querySelectorAll('.nav-links li a');
navLinksList.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});
