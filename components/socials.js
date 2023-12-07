const copyToClipBoard = function () {
  navigator.clipboard.writeText(`${window.location}`);
};

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
        gap: 40px;
        list-style: none;
    }

    .blog-socials ul li {
        color: rgba(75, 75, 75, 1);
        transition-duration: 250ms;
    }

    .blog-socials ul a:hover, .blog-socials ul li:hover {
        cursor: pointer;
        color: rgb(151,210,227);
    }

   

    </style>
        <div class="blog-socials">
            <ul>
                <a href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL" target="_blank"><li><i class="fab fa-facebook-f"></i></li></a>
                <a href="https://twitter.com/intent/tweet?text=YOUR_TITLE&url=YOUR_URL" target="_blank"><li><i class="fa-brands fa-x-twitter"></i></li></a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=YOUR_URL&title=YOUR_TITLE" target="_blank"><li><i class="fab fa-linkedin-in"></i></li></a>
                <a class="clipBoardLink" title="Copy to clipboard" onclick="copyToClipBoard()" ><li><i class="fa-solid fa-paperclip"></i></li></a>
            </ul>
        </div>
          `;
  }
}

customElements.define("socials-component", Socials);
