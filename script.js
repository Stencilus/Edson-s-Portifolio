// NAVBAR STYLE ON SCROLL
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.padding = '20px 0';
    }
});

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = '0.6s ease-out';
    observer.observe(section);
});
