class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      :root {
        --orange: rgb(255,140,8);
        --yellow: rgb(244,216,65);
        --dark-pink: rgb(242,162,171);
        --blue: rgb(151,210,227);
        --light-yellow: rgb(251,242,190);
        --black: rgb(61,41,43);
        --pink: rgb( 248,207,212);
        --fs-xl: 46px;
        --fs-l: 25px;
        --fs-m: 23px;
        --spacer: 80px;
    }

      .footer {
        padding: min(5vw, 40px);
        padding-bottom: var(--spacer);
        width: 100vw;
        background-color: rgb( 248,207,212);
        border-top: 2px solid var(--dark-pink);
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: flex-start;
        justify-content: flex-start;
      }

      .footer ul:not(.socials) {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
        justify-content: flex-start;
      }

      .socials {
        list-style: none;
        display: flex;
        gap: 20px;
        align-items: flex-start;
        justify-content: flex-start;
      }

      .footer li, .footer a {
        font-family: helvetica-w01-light,helvetica-w02-light,sans-serif;
        font-size: ;
        color: var(--black);
      }

      </style>
      <div class="footer">
        <ul>
          <li><p>Contact us:</p></li>
          <a href="mailto:queenpinpva@gmail.com"><li><p>queenpinpva@gmail.com</p></li></a>
        </ul>
        <ul>
          <li><p>Follow us:</p></li>
          <li>
            <ul class="socials">
              <a style="color: black;" href="https://pinterest.com/queenpinpva" target="_blank"><li style="color: black;"><i class="fab fa-pinterest-p"></i></li></a>
              <a style="color: black;" href="https://www.instagram.com/queenpin.online/" target="_blank"><li style="color: black;"><i class="fab fa-instagram"></i></li></a>
              <a style="color: black;" href="https://www.linkedin.com/in/devorah-gurevich/" target="_blank"><li style="color: black;"><i class="fab fa-linkedin-in"></i></li></a>
              <a style="color: black;" href="https://www.facebook.com/queenpin.va" target="_blank"><li style="color: black;"><i class="fab fa-facebook-f"></i></li></a>
            </ul>
          </li>
        </ul>
        <ul>
          <li><p>Pinterest Management Services</p></li>
          <a href="/components/Privacy Policy _ Queen Pin.pdf"><li><p>Privacy Policy</p></li></a>
          <li><p>All Rights Reserved</p></li>
        </ul>
        <a href="https://danielfeddy.com"><p>Website by Daniel Feddy</p></a>
      </div>
        `;
  }
}

customElements.define("footer-component", Footer);
