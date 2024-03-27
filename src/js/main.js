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

    // Functionality to toggle skill details on click
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item) => {
        item.addEventListener('click', () => {
            const detail = item.querySelector('.skill-detail');
            // Hide all other details
            document.querySelectorAll('.skill-detail').forEach((otherDetail) => {
                if (otherDetail !== detail) {
                    otherDetail.style.display = 'none';
                    otherDetail.style.opacity = '0';
                    otherDetail.style.visibility = 'hidden';
                }
            });

            // Toggle visibility of clicked detail
            if (detail.style.display === 'block') {
                detail.style.display = 'none';
                detail.style.opacity = '0';
                detail.style.visibility = 'hidden';
            } else {
                detail.style.display = 'block';
                detail.style.opacity = '1';
                detail.style.visibility = 'visible';
            }
        });
    });
});