const menuFunc = function () {
  document.querySelector(".hamburger").classList.remove("spin9-12");
  document.querySelector(".close-menu").classList.remove("spin12-3");
  document.querySelector(".hamburger").classList.add("spin12-3");
  document.querySelector(".close-menu").classList.add("spin9-12");
  document.querySelector(".menu").classList.remove("fade-out");

  setTimeout(function () {
    document.querySelector(".menu").classList.remove("display-none");
  }, 80);
};

let scrolling = [];

const setScrolling = function () {
  scrolling.push(window.pageYOffset);
  if (scrolling.length > 2) {
    scrolling = scrolling.slice(scrolling.length - 2);
  }
};

window.addEventListener("scroll", function () {
  setScrolling();
  if (this.window.pageYOffset > 160) {
    if (scrolling[1] > scrolling[0]) {
      document.querySelector(".header-mob").style.marginTop = "-80px";
    } else {
      document.querySelector(".header-mob").style.marginTop = "0px";
    }
  }
});

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>

    @font-face {
      font-family: "Helvetica-W02-Roman";
      src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e4bd4516-4480-43df-aa6e-4e9b9029f53e.eot?#iefix");
      src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e4bd4516-4480-43df-aa6e-4e9b9029f53e.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b56b944e-bbe0-4450-a241-de2125d3e682.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7da02f05-ae8b-43a1-aeb9-83b3c0527c06.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/66cac56e-d017-4544-9d0c-f7d978f0c5c2.svg#66cac56e-d017-4544-9d0c-f7d978f0c5c2") format("svg");
  font-display: block;
  }
  @font-face {
      font-family: "Helvetica-LT-W10-Roman";
      src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/686a6a06-e711-4bd2-b393-8504a497bb3c.eot?#iefix");
      src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/686a6a06-e711-4bd2-b393-8504a497bb3c.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6f8d1983-4d34-4fa4-9110-988f6c495757.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7903ee3f-e9ab-4bdc-b7d2-d232de2da580.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9c58e9ea-fdea-4b9c-b0f9-0a2157389ed0.svg#9c58e9ea-fdea-4b9c-b0f9-0a2157389ed0") format("svg");
  font-display: block;
  }
  
  @font-face {
      font-family:"Lulo-Clean-W01-One-Bold";
      src:url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/aee74cb3-c913-4b54-9722-6001c92325f2.woff2") format("woff2"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/80de9d5d-ab5f-40ce-911b-104e51e93d7c.woff") format("woff");
  font-display: block;
  }
  @font-face{
      font-family:"Lulo-Clean-W05-One-Bold";
      src: url("//static.parastorage.com/services/santa-resources/resources/viewer/user-site-fonts/fonts/Lulo_Clean/v1/LuloCleanW05-OneBold.woff2") format("woff2"),
      url("//static.parastorage.com/services/santa-resources/resources/viewer/user-site-fonts/fonts/Lulo_Clean/v1/LuloCleanW05-OneBold.woff") format("woff");
  font-display: block;
  }
  @font-face {
      font-family: "Helvetica-W01-Light";
      src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/717f8140-20c9-4892-9815-38b48f14ce2b.eot?#iefix");
      src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/717f8140-20c9-4892-9815-38b48f14ce2b.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/03805817-4611-4dbc-8c65-0f73031c3973.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d5f9f72d-afb7-4c57-8348-b4bdac42edbb.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/05ad458f-263b-413f-b054-6001a987ff3e.svg#05ad458f-263b-413f-b054-6001a987ff3e") format("svg");
  font-display: block;
  }
  @font-face {
      font-family: "Helvetica-W02-Light";
      src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ff80873b-6ac3-44f7-b029-1b4111beac76.eot?#iefix");
      src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ff80873b-6ac3-44f7-b029-1b4111beac76.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/80c34ad2-27c2-4d99-90fa-985fd64ab81a.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b8cb02c2-5b58-48d8-9501-8d02869154c2.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/92c941ea-2b06-4b72-9165-17476d424d6c.svg#92c941ea-2b06-4b72-9165-17476d424d6c") format("svg");
  font-display: block;
  }
  @font-face {
      font-family:"Lulo-Clean-W01-One-Bold";
      src:url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/aee74cb3-c913-4b54-9722-6001c92325f2.woff2") format("woff2"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/80de9d5d-ab5f-40ce-911b-104e51e93d7c.woff") format("woff");
  font-display: block;
  }
  @font-face{
      font-family:"Lulo-Clean-W05-One-Bold";
      src: url("//static.parastorage.com/services/santa-resources/resources/viewer/user-site-fonts/fonts/Lulo_Clean/v1/LuloCleanW05-OneBold.woff2") format("woff2"),
      url("//static.parastorage.com/services/santa-resources/resources/viewer/user-site-fonts/fonts/Lulo_Clean/v1/LuloCleanW05-OneBold.woff") format("woff");
  font-display: block;
  }
  
  @font-face {
      font-family: "Helvetica-W01-Light";
      src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/717f8140-20c9-4892-9815-38b48f14ce2b.eot?#iefix");
      src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/717f8140-20c9-4892-9815-38b48f14ce2b.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/03805817-4611-4dbc-8c65-0f73031c3973.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d5f9f72d-afb7-4c57-8348-b4bdac42edbb.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/05ad458f-263b-413f-b054-6001a987ff3e.svg#05ad458f-263b-413f-b054-6001a987ff3e") format("svg");
  font-display: block;
  }
  @font-face {
      font-family: "Helvetica-W02-Light";
      src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ff80873b-6ac3-44f7-b029-1b4111beac76.eot?#iefix");
      src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ff80873b-6ac3-44f7-b029-1b4111beac76.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/80c34ad2-27c2-4d99-90fa-985fd64ab81a.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b8cb02c2-5b58-48d8-9501-8d02869154c2.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/92c941ea-2b06-4b72-9165-17476d424d6c.svg#92c941ea-2b06-4b72-9165-17476d424d6c") format("svg");
  font-display: block;
  }
  @font-face {
      font-family: "Helvetica-W01-Roman";
      src: url("//static.parastorage.com/services/santa-resources/dist/viewer/user-site-fonts/fonts/Helvetica/v3/HelveticaLTW04-Roman.woff2") format("woff2"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4021a3b9-f782-438b-aeb4-c008109a8b64.woff") format("woff");
      font-display: block;
  }
  @font-face {
      font-family: "Helvetica-W02-Roman";
      src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e4bd4516-4480-43df-aa6e-4e9b9029f53e.eot?#iefix");
      src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e4bd4516-4480-43df-aa6e-4e9b9029f53e.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b56b944e-bbe0-4450-a241-de2125d3e682.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7da02f05-ae8b-43a1-aeb9-83b3c0527c06.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/66cac56e-d017-4544-9d0c-f7d978f0c5c2.svg#66cac56e-d017-4544-9d0c-f7d978f0c5c2") format("svg");
  font-display: block;
  }
  @font-face {
      font-family: "Helvetica-LT-W10-Roman";
      src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/686a6a06-e711-4bd2-b393-8504a497bb3c.eot?#iefix");
      src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/686a6a06-e711-4bd2-b393-8504a497bb3c.eot?#iefix") format("eot"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6f8d1983-4d34-4fa4-9110-988f6c495757.woff") format("woff"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7903ee3f-e9ab-4bdc-b7d2-d232de2da580.ttf") format("truetype"),url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9c58e9ea-fdea-4b9c-b0f9-0a2157389ed0.svg#9c58e9ea-fdea-4b9c-b0f9-0a2157389ed0") format("svg");
  font-display: block;
  }

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

    body {
      padding-top: 80px;
    }

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
      position: fixed;
      top: 0;
      transition-property: margin-top;
      transition-duration: 500ms;
      z-index: 998;
      border-bottom: 1px solid rgb(255,140,8);
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
          <li><a href="/" class="navbar-link" aria-label="Home Page Link">Home</a></li>
          <li><a href="/About" class="navbar-link" aria-label="About Page Link">About</a></li>
          <li><a href="/Services" class="navbar-link" aria-label="Services Page Link">Services</a></li>
          <li><a href="/Testimonials" class="navbar-link" aria-label="Testimonials Page Link">Testimonials</a></li>
          <li><a href="/Blog" class="navbar-link" aria-label="Blog Page Link">Blog</a></li>
          <li><a href="/Contact" class="navbar-link" aria-label="Contact Page Link">Contact</a></li>
        </ul>
        <ul class="right-list">
          <li><a href="mailto:queenpinpva@gmail.com" aria-label="queenpinpva@gmail.com">queenpinpva@gmail.com</a></li>
          <li><a style="color: black;" href="https://pinterest.com/queenpinpva" target="_blank" aria-label="Social Media Link" style="color: black;"><i class="fab fa-pinterest-p"></i></a></li>
          <li><a style="color: black;" href="https://www.instagram.com/queenpin.online/" target="_blank" aria-label="Social Media Link" style="color: black;"><i class="fab fa-instagram"></i></a></li>
          <li><a style="color: black;" href="https://www.linkedin.com/in/devorah-gurevich/" target="_blank" aria-label="Social Media Link" style="color: black;"><i class="fab fa-linkedin-in"></i></a></li>
          <li><a style="color: black;" href="https://www.facebook.com/queenpin.va" target="_blank" aria-label="Social Media Link" style="color: black;"><i class="fab fa-facebook-f"></i></a></li>
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
