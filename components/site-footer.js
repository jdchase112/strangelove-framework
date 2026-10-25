class siteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      
    <!-- COMPONENT MARKUP GOES HERE -->
    <footer class="site-footer">
        <div class="container-1200">
            <img src="media/strangelove-logo.svg" width="600px" height="50">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Films</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Journal</a></li>
            </ul>
        </div>
    </footer>
      
    `;

        // COMPONENT JAVASCRIPT GOES HERE  
        // const myDiv = document.querySelector(".mydiv");
        // console.log(myDiv);

    };
};
customElements.define("site-footer", siteFooter);