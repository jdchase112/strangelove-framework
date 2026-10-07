class siteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      
      <!-- COMPONENT MARKUP GOES HERE -->
      <footer class="site-footer">
        <div class="container-1200">
            <div class="row">
                <div class="col-9">
                    <div class="footer-logo">
                        <h2><a href="index.html">Strangelove Cinemas Framework</a></h2>
                    </div>
                    <div class="footer-about">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fugit doloribus voluptates
                            magnam
                            nulla quod adipisci unde dolores ut. Ad, vitae dicta eaque debitis inventore accusamus
                            deleniti
                            ut
                            culpa
                            earum ipsum impedit quas ipsa praesentium laborum quasi iure minima? Odit nulla dolores
                            suscipit
                            at,
                            distinctio sunt sed nesciunt voluptas et.</p>
                    </div>
                </div>
                <div class="col-3">
                    <nav class="footer-nav">
                        <h2>Pages</h2>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="styleguide.html">Style Guide</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
      
    `;

        // COMPONENT JAVASCRIPT GOES HERE  
        // const myDiv = document.querySelector(".mydiv");
        // console.log(myDiv);

    };
};
customElements.define("site-footer", siteFooter);