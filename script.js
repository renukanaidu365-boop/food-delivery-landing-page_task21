const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

// When someone clicks the hamburger button
menuBtn.addEventListener('click', function() {
    // Check if menu is already showing
    if (navLinks.classList.contains('show')) {
        // Hide the menu
        navLinks.classList.remove('show');
        // Change button back to hamburger icon
        menuBtn.textContent = '☰';
    } else {
        // Show the menu
        navLinks.classList.add('show');
        // Change button to X icon
        menuBtn.textContent = '✕';
    }
});

const chatBtn = document.getElementById('chatBtn');

// When someone clicks the chat button
chatBtn.addEventListener('click', function() {
    // Simple alert to show the chat works
    alert('🍲 Welcome to OmniFood chat! Our team will help you choose the perfect meal plan.');
});

// That's it! Simple and easy to understand.