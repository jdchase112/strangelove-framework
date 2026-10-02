console.log("script.js is loaded");

const siteNav = document.querySelector('.site-nav');
const menuButton = document.querySelector('.menu-button');

menuButton.onclick = () => {
    if (siteNav.getAttribute('data-navstate') === 'open') {
        siteNav.setAttribute('data-navstate', 'closed')
    } else {
        siteNav.setAttribute('data-navstate', 'open')
    };
}

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

const mytargets = document.querySelectorAll('header, section, footer');
mytargets.forEach((el) => {
    myobserver.observe(el);
});