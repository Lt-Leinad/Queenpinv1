class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    .logo-section {
      width: 980px;
      margin-inline: auto;
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
      width: 980px;
      margin-inline: auto;
      display: flex;
      justify-content: space-between;
      height: 44px;
      align-items: center;
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
  }
    </style>
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
        <li>queenpinpva@gmail.com</li>
        <li><i class="fab fa-pinterest-p"></i></li>
        <li><i class="fab fa-instagram"></i></li>
        <li><i class="fab fa-linkedin-in"></i></li>
        <li><i class="fab fa-facebook-f"></i></li>
      </ul>
    </nav>
      `;
  }
}

customElements.define("header-component", Header);
