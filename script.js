document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.category-scroller-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        container.scrollLeft = scrollLeft - walk;
    });

    container.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        container.scrollLeft = scrollLeft - walk;
    });

    container.addEventListener('touchend', () => {
        isDown = false;
    });
});
// Hide navbar on scroll down, show on scroll up
let prevScrollpos = window.pageYOffset;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        // Scrolling up
        navbar.style.top = "0";
    } else {
        // Scrolling down
        navbar.style.top = "-100px"; // Hide navbar (adjust if needed)
    }
    prevScrollpos = currentScrollPos;
});
