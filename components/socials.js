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
        display: flex;
        gap: 40px
    } 

    .blog-socials ul {
        display: flex;
        gap: 40px;
        list-style: none;
    }

    .blog-socials ul li {
        color: rgba(75, 75, 75, 1);
        transition-duration: 250ms;
      padding-block: 0.5em;
    }

    .blog-socials ul a:hover, .blog-socials ul li:hover {
        cursor: pointer;
        color: rgb(151,210,227);
    }

    .socials-contact button {
      font-family: lulo-clean-w01-one-bold,lulo-clean-w05-one-bold,sans-serif;
      font-size: 13px;
      padding-block: 0.5em;
      padding-inline: 1em;
      border-radius: 7px;
      color: rgb(0, 0, 0);
      border-color: transparent;
      background-color: #F2A2AB;
      transition: all 0.2s ease, visibility 0s;
  }
  
  .socials-contact button:hover {
      border-radius: 5rem;
      background-color: rgb(251,242,190);
      cursor: pointer;
    }

    @media only screen and (max-width: 500px) {
      .blog-socials {
        flex-direction: column;
        gap: 20px;
      }
    }

    </style>
        <div class="blog-socials">
        <a class="socials-contact" href="/Contact"><button>Contact Us</button></a>
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
