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