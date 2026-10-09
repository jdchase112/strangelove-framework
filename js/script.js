

// IMPORT WEB COMPONENTS
import "../components/site-header.js";
import "../components/site-footer.js";

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

// REMOVE SPLASH DELAY
setTimeout(() => {
    document.documentElement.style.setProperty("--splash-delay", "-0.2s");
}, 4000);