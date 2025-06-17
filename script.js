// Mobile menu functionality
const customToggler = document.getElementById('customToggler');
const mobileMenu = document.getElementById('mobileMenu');

// Toggle mobile menu
customToggler.addEventListener('click', () => {
    customToggler.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close menu when clicking on mobile nav links
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        customToggler.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
    
    // Initialize Memories Carousel
    const memoriesCarousel = document.getElementById('memoriesCarousel');
    if (memoriesCarousel) {
        // Auto-play the carousel
        const carousel = new bootstrap.Carousel(memoriesCarousel, {
            interval: 5000, // Change slide every 5 seconds
            wrap: true, // Loop back to first slide
            pause: 'hover' // Pause on hover
        });
        
        // Add smooth transitions
        memoriesCarousel.addEventListener('slide.bs.carousel', function (e) {
            const activeItem = this.querySelector('.carousel-item.active');
            const nextItem = this.querySelectorAll('.carousel-item')[e.to];
            
            if (activeItem) {
                activeItem.style.transition = 'transform 0.6s ease-in-out';
            }
            if (nextItem) {
                nextItem.style.transition = 'transform 0.6s ease-in-out';
            }
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 