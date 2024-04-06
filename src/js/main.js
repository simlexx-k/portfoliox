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

    // Dynamically change theme colors based on specific conditions
    changeThemeColors();
});

// Function to update theme colors dynamically
function changeThemeColors() {
    // Get the current hour of the day
    const hour = new Date().getHours();

    // Define color themes for day and night
    const dayTheme = {
        '--primary-background': '#1d1a39',
        '--secondary-background': '#451952',
        '--tertiary-elements': '#662549',
        '--highlights': '#ae445a',
        '--action-items': '#f39f5a',
        '--text-elements': '#e8bcb9',
    };

    const nightTheme = {
        '--primary-background': '#131122',
        '--secondary-background': '#351842',
        '--tertiary-elements': '#562341',
        '--highlights': '#8e3c59',
        '--action-items': '#bf6e4e',
        '--text-elements': '#d8aeb7',
    };

    // Determine whether to use day or night theme based on the current hour
    const theme = hour >= 6 && hour < 18 ? dayTheme : nightTheme;

    // Update CSS variables in the document's root
    for (const [key, value] of Object.entries(theme)) {
        try {
            document.documentElement.style.setProperty(key, value);
        } catch (error) {
            console.error('Error occurred while updating theme colors:', error.message, error.stack);
        }
    }
}