class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      .footer {
        height: 80px;
        width: 100vw;
        background-color: rgb( 248,207,212);
      }
      </style>
      <div class="footer">
      </div>
        `;
  }
}

customElements.define("footer-component", Footer);
