class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    .header-desktop {
      width: 100vw;
      background-color: rgb(255,254,250);
      padding-bottom: 10px;
    }
    a {
      color: inherit;
      text-decoration: none;
    }

    .logo-section {
      width: 1000px;
      height: 121px;
      margin-inline: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: transparent;
  }
  
  #logo {
      width: 154px;
      height: 121px;
      margin: 0;
  }
  
  hr {
      min-width: 1000px;
      width: calc(100% - 50px - 50px);
      margin-inline: auto;
      margin-block: 0;
      padding: 0;
      height: 1px;
  }
  
  .navbar {
      width: 1000px;
      margin-inline: auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding-inline: 10px;
  }
  
  .navbar ul {
      list-style: none;
      display: flex;
      padding: 0;
      
  }
  
  .left-list {
      color: rgb(105, 105, 105);
      font-size: 15px;
      font-family: sans-serif;
      line-height: 45px;
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
      line-height: 45px;
  }
  
  .right-list li:first-child {
      color: rgb(105, 105, 105);
      font-weight: 100;
      font-size: 14px;
  }

  @media only screen and (min-width: 1110px) {
    .hamburger, .header-mob {
      display: none;
    }
  }

  @media only screen and (max-width: 1110px) {
    .header-desktop, .navbar {
      display: none !important;
    }

    #logo {
      width: 120px;
      object-fit: contain;
      margin: 0;
  }

    .hamburger {
      font-size: 30px;
      transform: rotate(90deg);
      background-color: rgb(255,217,173);
      border: none;
      width: 40px;
      height: 40px;
      display: grid;
      place-content: center;
      color: rgb(255,140,8);
    }

    .header-mob {
      background-color: rgb(255,254,250);
      width: 100vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: calc(5vw - 10px);
      padding-right: 5vw;
    }

    .hamburger:hover {
      cursor: pointer;
    }
  }
    </style>
    <div class="header-desktop">
      <div class="logo-section">
        <img id="logo" src="/photos/QueenpinLogo.webp" alt="Queenpin Logo" />
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
    </div>
    <div class="header-mob">
      <img id="logo" src="/photos/QueenpinLogo.webp" alt="Queenpin Logo" />
      <button class="hamburger">III</button>
    </div>
      `;
  }
}

customElements.define("header-component", Header);
