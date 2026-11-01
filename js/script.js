

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
const gridBg = document.querySelector('.grid-background-hero');

if (gridBg) {
    window.addEventListener('mousemove', (e) => {
        const rect = gridBg.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gridBg.style.setProperty('--mouse-x', `${x}px`);
        gridBg.style.setProperty('--mouse-y', `${y}px`);
    });
}

const gridBg2 = document.querySelector('.grid-background');

if (gridBg2) {
    window.addEventListener('mousemove', (e) => {
        const rect = gridBg2.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gridBg2.style.setProperty('--mouse-x', `${x}px`);
        gridBg2.style.setProperty('--mouse-y', `${y}px`);
    });
}

const eventsMask = document.querySelector('.events-mask');

if (eventsMask) {
    window.addEventListener('mousemove', (e) => {
        const rect = eventsMask.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        eventsMask.style.setProperty('--mouse-x', `${x}px`);
        eventsMask.style.setProperty('--mouse-y', `${y}px`);
    });
}

// COLOR PICKER FOR MOVIE CARD HOVER EFFECTS

const borderColors = [
    '#128A9B',
    '#F4E000',
    '#E6643B',
    '#A21C46',
    '#BF8A94',
];

let lastColorIndex = -1;

document.querySelectorAll('.movie-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
        let randomIndex;

        // Pick a new index until it differs from the last one
        do {
            randomIndex = Math.floor(Math.random() * borderColors.length);
        } while (randomIndex === lastColorIndex);

        // Save the current index for the next check
        lastColorIndex = randomIndex;

        const randomColor = borderColors[randomIndex];
        card.style.setProperty('--hover-border-color', randomColor);
    });
});

document.querySelectorAll('.film-page-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
        let randomIndex;

        // Pick a new index until it differs from the last one
        do {
            randomIndex = Math.floor(Math.random() * borderColors.length);
        } while (randomIndex === lastColorIndex);

        // Save the current index for the next check
        lastColorIndex = randomIndex;

        const randomColor = borderColors[randomIndex];
        card.style.setProperty('--hover-border-color', randomColor);
    });
});

// REMOVE SPLASH DELAY
// setTimeout(() => {
//     document.documentElement.style.setProperty("--splash-delay", "0.2s");
// }, 4000);