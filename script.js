function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        // Change the URL without reloading the page
        history.pushState(null, null, `#${sectionId}`);
    }
}

// Show the about section by default
showSection('about');

// Prevent default anchor behavior
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior
        showSection(this.getAttribute('href').substring(1)); // Get the section ID from the link
    });
});
