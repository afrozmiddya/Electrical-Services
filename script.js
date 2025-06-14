document.addEventListener('DOMContentLoaded', () => {
    const scrollableContainer = document.getElementById('scrollableContainer');
    const scrollLeftBtn = document.getElementById('scrollLeftBtn');
    const scrollRightBtn = document.getElementById('scrollRightBtn');

    // Calculate the scroll amount dynamically based on image width + margin
    // This assumes all image-wrappers have the same width and margin-right
    const firstImage = scrollableContainer.querySelector('.image-wrapper');
    const scrollAmount = firstImage ? firstImage.offsetWidth + parseInt(window.getComputedStyle(firstImage).marginRight) : 0;

    scrollLeftBtn.addEventListener('click', () => {
        // Scroll left by the calculated amount with smooth behavior
        scrollableContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', () => {
        // Scroll right by the calculated amount with smooth behavior
        scrollableContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Mobile menu functionality (added here for completeness)
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');
    const mobileMenuItems = document.querySelectorAll('.mobile-menu ul li a');

    hamburgerMenu.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    mobileMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenu.classList.remove('active'); // Close menu on item click
        });
    });
});