document.addEventListener("DOMContentLoaded", () => {
    
    // --- Sticky Navbar Logic ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Scroll Reveal Animation ---
    // Select all elements with the 'reveal' class
    const reveals = document.querySelectorAll('.reveal');

    // Setup Intersection Observer
    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" 
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Add 'active' class to trigger CSS transition
                entry.target.classList.add('active');
                // Unobserve so animation only happens once
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Apply observer to all reveal elements
    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});
