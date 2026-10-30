

// IMPORT WEB COMPONENTS
import "../components/site-header.js";
import "../components/site-footer.js";
// import "../components/carousel.js";

// ENABLE SCROLL TRIGGERED ANIMATIONS
const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-viewstate", "active");
        } else {
            entry.target.setAttribute("data-viewstate", "innactive");
        };
    });
});

const mytargets = document.querySelectorAll('header, section, footer, .animate-on-scroll');
mytargets.forEach((el) => {
    myobserver.observe(el);
});

// GRID MASK EFFECT
const gridBg = document.querySelector('.grid-background-hero, .grid-background');

if (gridBg) {
    window.addEventListener('mousemove', (e) => {
        const rect = gridBg.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gridBg.style.setProperty('--mouse-x', `${x}px`);
        gridBg.style.setProperty('--mouse-y', `${y}px`);
    });
}

// REMOVE SPLASH DELAY
// setTimeout(() => {
//     document.documentElement.style.setProperty("--splash-delay", "0.2s");
// }, 4000);