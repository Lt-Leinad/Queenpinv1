class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    a {
      color: inherit;
      text-decoration: none;
    }

    .logo-section {
      width: 980px;
      margin-inline: auto;
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  
  #logo {
      width: 154px;
      height: 121px;
      margin: 0;
  }
  
  hr {
      width: calc(100% - 48px - 48px);
      margin-inline: auto;
      margin-block: 0;
      padding: 0;
  }
  
  .navbar {
      width: 940px;
      margin-inline: auto;
      display: flex;
      justify-content: space-between;
      height: 44px;
      align-items: center;
      padding-inline: 20px;
      padding-bottom: 15px;
  }
  
  .navbar ul {
      list-style: none;
      display: flex;
      padding: 0;
      
  }
  
  .left-list {
      width: 588px;
      color: rgb(105, 105, 105);
      font-size: 15px;
      font-family: sans-serif;
      line-height: 22px;
      gap: 30px;
      font-weight: 300;
  }

  .left-list li:hover {
    color: rgb(0, 0, 0);
    cursor: pointer;
  }
  
  .right-list {
      gap: 15px;
      font-size: 15px;
      font-family: sans-serif;
      line-height: 22px;
  }
  
  .right-list li:first-child {
      color: rgb(105, 105, 105);
      font-weight: 100;
      font-size: 14px;
  }

  .hamburger {
    // display: none;
  }

  @media only screen and (max-width: 1050px) {
    hr, .navbar {
      display: none !important;
    }

    .logo-section {
      padding-top: 0;
      padding-bottom: 10px;
      width: calc(100vw - 40px);
      padding-left: 10px;
      padding-right: 30px;
    }

    .hamburger {
      font-size: 20px;
      color: black;
      background-color: transparent;
      border: none;
      transform: rotate(90deg);
      font-size: 60px;
      color: rgb(255,140,8);
    }
  }
    </style>
    <div class="logo-section">
      <img id="logo" src="/photos/QueenpinLogo.webp" alt="Queenpin Logo" />
      <button class="hamburger">III</button>
    </div>
    <hr />
    <nav class="navbar">
      <ul class="left-list">
        <li class="navbar-link">Home</li>
        <li class="navbar-link">Services</li>
        <li class="navbar-link">Testimonials</li>
        <li class="navbar-link">Blog</li>
        <li class="navbar-link">About</li>
        <li class="navbar-link">More</li>
      </ul>
      <ul class="right-list">
        <li><a href="mailto:queenpinpva@gmail.com">queenpinpva@gmail.com</a></li>
        <li><a href="https://pinterest.com/queenpinpva" target="_blank"><i class="fab fa-pinterest-p"></i></a></li>
        <li><a href="https://www.instagram.com/queenpin.online/" target="_blank"><i class="fab fa-instagram"></i></a></li>
        <li><a href="https://www.linkedin.com/in/devorah-gurevich/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
        <li><a href="https://www.facebook.com/queenpin.va" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
      </ul>
    </nav>
      `;
  }
}

customElements.define("header-component", Header);
