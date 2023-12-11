const menuExitFunc = function () {
  document.querySelector(".hamburger").classList.remove("spin12-3");
  document.querySelector(".close-menu").classList.remove("spin9-12");
  document.querySelector(".hamburger").classList.add("spin9-12");
  document.querySelector(".close-menu").classList.add("spin12-3");
  document.querySelector(".menu").classList.add("fade-out");

  setTimeout(function () {
    document.querySelector(".menu").classList.add("display-none");
  }, 300);
};

class Menu extends HTMLElement {
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
            opacity: 0;
          }

        .menu {
          height: 100vh;
          padding-block: 120px;
          width: 100vw;
          position: fixed;
          top: 0;
          overflow: scroll;
          z-index: 999;
          background-color: rgb( 248,207,212);
        }
        
        .close-menu {
            font-size: 30px;
            background-color: rgb(255,228,236);
            border: none;
            width: 40px;
            height: 40px;
            display: grid;
            place-content: center;
            color: rgb(242,162,171);
          }

        .close-menu:hover {
          cursor: pointer;
        }

        .header-menu {
            background-color: transparent;
            width: 100vw;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 5vw;
            height: 80px;
            z-index: 999;
            position: fixed;
            top: 0;
        }

        .menu ul:first-child {
            width: 100%;
            display: flex; 
            flex-direction: column;
            align-items: center;
            justify-content: center;
            list-style: none;
            gap: 20px;
        }

        .menu ul:nth-child(2) {
            width: 100%;
            display: flex; 
            align-items: center;
            justify-content: center;
            list-style: none;
            gap: 20px;
            margin-top: 20px;
        }

        .menu li a:not(.email-link) {
            color: rgb(51,51,50);
            text-overflow: ellipsis;
            font: normal normal normal 20px/1.5em lulo-clean-w01-one-bold,lulo-clean-w05-one-bold,sans-serif;
        }

        .menu li a:hover, .menu li a:active, .menu li a:focus {
            color: rgb(255,255,255);
        }

        .display-none {
            display: none;
        }

        </style>
        <div class="menu display-none fade-in">
        <div class="header-menu">
            <button class="close-menu" onclick="menuExitFunc()"><i class="fa-solid fa-chevron-up"></i></button>
        </div>
        <nav>
        <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/About">ABOUT</a></li>
        <li><a href="/Services">SERVICES</a></li>
        <li><a href="/Testimonials">TESTIMONIALS</a></li>
        <li><a href="/Blog">BLOG</a></li>
        <li><a href="/Contact">CONTACT</a></li>
        <li><a href="/components/Privacy Policy _ Queen Pin.pdf" target="_blank">PRIVACY POLICY</a></li>
        <li><a>
            <ul>
                <li><a href="https://pinterest.com/queenpinpva" target="_blank"><i class="fab fa-pinterest-p"></i></a></li>
                <li><a href="https://www.instagram.com/queenpin.online/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/in/devorah-gurevich/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://www.facebook.com/queenpin.va" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
            </ul
        </a></li>
        <li><a href="mailto:queenpinpva@gmail.com" class="email-link">queenpinpva@gmail.com</a></li>
        </ul>
        </nav>
        </div>
          `;
  }
}

customElements.define("menu-component", Menu);
