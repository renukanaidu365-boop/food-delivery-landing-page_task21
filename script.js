// Mobile hamburger menu toggle
const hamburger = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  // Toggle menu when clicking hamburger
  hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking any nav link
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
    });
  });

  // Close menu when clicking outside (optional but nice)
  document.addEventListener('click', function(e) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });
}