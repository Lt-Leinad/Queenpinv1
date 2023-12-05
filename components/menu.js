const menuExitFunc = function () {
  document.querySelector(".hamburger").classList.remove("spin12-3");
  document.querySelector(".close-menu").classList.remove("spin9-12");
  document.querySelector(".hamburger").classList.add("spin9-12");
  document.querySelector(".close-menu").classList.add("spin12-3");
  document.querySelector(".menu").classList.add("fade-out");

  setTimeout(function () {
    document.querySelector(".menu").classList.add("display-none");
  }, 500);
};

class Menu extends HTMLElement {
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
            opacity: 0;
          }

        .menu {
          height: 100vh;
          padding-bottom: 80px;
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

        .header-menu {
            background-color: transparent;
            width: 100vw;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 5vw;
            height: 80px;
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

        .menu a li {
            color: rgb(51,51,50);
            text-overflow: ellipsis;
            font: normal normal normal 20px/1.5em lulo-clean-w01-one-bold,lulo-clean-w05-one-bold,sans-serif;
        }

        .menu a li:hover, .menu a li:active, .menu a li:focus {
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
        <a href="/"><li>HOME</li></a>
        <a href="/About"><li>ABOUT</li></a>
        <a href="/Services"><li>SERVICES</li></a>
        <a href="/Testimonials"><li>TESTIMONIALS</li></a>
        <a href="/Blog"><li>BLOG</li></a>
        <a href="/Contact"><li>CONTACT</li></a>
        <a href="/PrivacyPolicy" target="_blank"><li>PRIVACY POLICY</li></a>
        <a><li>
            <ul>
                <a href="https://pinterest.com/queenpinpva" target="_blank"><li><i class="fab fa-pinterest-p"></i></li></a>
                <a href="https://www.instagram.com/queenpin.online/" target="_blank"><li><i class="fab fa-instagram"></i></li></a>
                <a href="https://www.linkedin.com/in/devorah-gurevich/" target="_blank"><li><i class="fab fa-linkedin-in"></i></li></a>
                <a href="https://www.facebook.com/queenpin.va" target="_blank"><li><i class="fab fa-facebook-f"></i></li></a>
            </ul
        </li></a>
        <a href="mailto:queenpinpva@gmail.com"><li>queenpinpva@gmail.com</li></a>
        </ul>
        </nav>
        </div>
          `;
  }
}

customElements.define("menu-component", Menu);
