document.addEventListener('DOMContentLoaded', (event) => {
    // Listen for click events on all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            // Find the target element's position relative to the top of the document
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (!targetElement) {
                console.error('Target element for smooth scroll not found:', targetId);
                return;
            }
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

            // Smoothly scroll to the target element
            try {
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            } catch (error) {
                console.error('Error occurred during smooth scroll:', error.message, error.stack);
            }
        });
    });
});