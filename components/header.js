const menuFunc = function () {
  document.querySelector(".hamburger").classList.remove("spin9-12");
  document.querySelector(".close-menu").classList.remove("spin12-3");
  document.querySelector(".hamburger").classList.add("spin12-3");
  document.querySelector(".close-menu").classList.add("spin9-12");
  document.querySelector(".menu").classList.remove("fade-out");

  setTimeout(function () {
    document.querySelector(".menu").classList.remove("display-none");
  }, 125);
};

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>

    @keyframes spinPlus {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(180deg);
      }
    }

    @keyframes spinNeg {
      from {
        transform: rotate(-180deg);
      }

      to {
        transform: rotate(0deg);
      }
    }

    .spin12-3 {
      animation-name: spinPlus;
      animation-duration: 500ms;
      animation-timing-function: ease-in;
    }

    .spin9-12 {
      animation-name: spinNeg;
      animation-duration: 500ms;
      animation-timing-function: ease-out;
    }

    @keyframes fade-in {
      from {
          opacity: 0;
      }

      to {
          opacity: 1;
      }
    }

    @keyframes fade-out {
      from {
          opacity: 1;
      }

      to {
          opacity: 0;
      }
    }

    .fade-in {
      animation-name: fade-in;
      animation-duration: 750ms;
      animation-timing-function: ease;
      opacity: 1;
    }

    .fade-out {
      animation-name: fade-out;
      animation-duration: 750ms;
      animation-timing-function: ease;
      opacity: 1;
    }
    
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
      width: 80px;
      object-fit: contain;
      margin: 0;
  }

    .hamburger {
      font-size: 30px;
      background-color: rgb(255,217,173);
      border: none;
      width: 40px;
      height: 40px;
      display: grid;
      place-content: center;
      color: rgb(255,140,8);
      transition-duration: 500ms;
    }

    .header-mob {
      background-color: rgb(255,254,250);
      width: 100vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: calc(5vw - 10px);
      padding-right: 5vw;
      height: 80px;
      border-bottom: 1px solid rgb(255,140,8);
    }

    .hamburger:hover {
      cursor: pointer;
    }

    .red {
      background-color: red;
    }

    . {
      transform: rotate(180deg);
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
        <a href="/"><li class="navbar-link">Home</li></a>
        <a href="/About/index.html"><li class="navbar-link">About</li></a>
          <a href="/Services/index.html"><li class="navbar-link">Services</li></a>
          <a href="/Testimonials/index.html"><li class="navbar-link">Testimonials</li></a>
          <li class="navbar-link">Blog</li>
          <a href="/Contact/index.html"><li class="navbar-link">Contact</li></a>
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
      <button class="hamburger" onclick="menuFunc()"><i class="fa-solid fa-bars"></i></button>
    </div>
      `;
  }
}

customElements.define("header-component", Header);
