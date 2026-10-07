class siteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      
      <!-- COMPONENT MARKUP GOES HERE -->
      <header class="site-header">
        <div class="site-logo">
            <img class="fade-in" a href="index.html" src="media/logo.svg" width="40" height="40">
            <h1 class="fade-in"><a href="index.html">Strangelove Cinemas
                    Framework</a></h1>
        </div>
        <nav class="site-nav mobile-menu">
            <button class="menu-button">
                <svg class="menu-button-navicon rotate-to-x squish-to-x" width="30" height="24">
                    <rect class="top-line" x="0" y="0" height="4" width="30"></rect>
                    <rect class="mid-line" x="0" y="10" height="4" width="30"></rect>
                    <rect class="bot-line" x="0" y="20" height="4" width="30"></rect>
                </svg>
                <span class="menu-button-text">Menu</span>
            </button>
            <ul>
                <li class="fade-in"><a href="index.html">Home</a></li>
                <li class="fade-in"><a href="style-guide.html">Style Guide</a>
                </li>
            </ul>
        </nav>
    </header>
      
    `;

        // MOBILE MENU
        const siteNav = document.querySelector('.site-nav');
        const menuButton = document.querySelector('.menu-button');

        menuButton.onclick = () => {
            if (siteNav.getAttribute('data-navstate') === 'open') {
                siteNav.setAttribute('data-navstate', 'closed')
            } else {
                siteNav.setAttribute('data-navstate', 'open')
            };
        }

    };
};
customElements.define("site-header", siteHeader);