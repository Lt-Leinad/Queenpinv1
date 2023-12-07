class Socials extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    .blog-socials {
        border-top: 1px solid rgba(75, 75, 75, 0.5);
        border-bottom: 1px solid rgba(75, 75, 75, 0.5);;
        padding-block: 20px;
        width: 90vw;
        max-width: 750px;
        margin-inline: auto;
        margin-bottom: 40px;
    } 

    .blog-socials ul {
        display: flex;
        gap: 20px;
        list-style: none;
    }

    .blog-socials ul li {
        color: rgba(75, 75, 75, 1);
    }
    </style>
        <div class="blog-socials">
        <ul>
        <a href="" target="_blank"><li><i class="fab fa-facebook-f"></i></li></a>
        <a href="" target="_blank"><li><i class="fa-brands fa-x-twitter"></i></li></a>
        <a href="" target="_blank"><li><i class="fab fa-linkedin-in"></i></li></a>
        <a href="" target="_blank"><li><i class="fa-solid fa-paperclip"></i></li></a>
        </ul>
        </div>
          `;
  }
}

customElements.define("socials-component", Socials);
