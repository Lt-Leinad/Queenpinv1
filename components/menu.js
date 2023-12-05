class Menu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @keyframes fade-in {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }
        .menu {
          height: 100vh;
          width: 100vw;
          position: fixed;
          z-index: 999;
          background-color: rgb( 248,207,212);
          animation-name: fade-in;
          animation-duration: 500ms;
          animation-timing-function: ease;
          opacity: 1;
        }
        
        .close-menu {
            font-size: 30px;
            transform: rotate(180deg);
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
        padding-left: calc(5vw - 10px);
        padding-right: 5vw;
        height: 80px;
        }

        .display-none {
            display: none;
        }

        </style>
        <div class="menu">
        <div class="header-menu">
            <button class="close-menu" onclick="menuFunc()">V</button>
        </div>
        </div>
          `;
  }
}

customElements.define("menu-component", Menu);
