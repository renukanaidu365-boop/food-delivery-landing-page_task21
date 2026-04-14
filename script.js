// Step 1: Get the button and menu elements from the page
const menuButton = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

// Step 2: Check if both elements exist (defensive but simple)
if (menuButton && navLinks) {
    
    // Step 3: Add a click listener to the button
    menuButton.addEventListener('click', function() {
        
        // Step 4: Toggle the 'show' class
        navLinks.classList.toggle('show');
        
        // This is a small UX improvement I added
        if (navLinks.classList.contains('show')) {
            menuButton.textContent = '✕';  // Change to 'X' when open
        } else {
            menuButton.textContent = '☰';  // Change back to hamburger
        }
    });
}

/