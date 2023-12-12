const copyToClipBoard = function () {
  navigator.clipboard.writeText(`${window.location}`);
};

const findTitle = function () {
  // console.log(this.document.title);
  return document.title;
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
        justify-content: flex-start;
        align-items: center;
        gap: 40px
    } 

    .blog-socials ul {
        display: flex;
        gap: 20px;
        list-style: none;
    }

    .blog-socials ul li a, .blog-socials ul li a {
        color: rgba(75, 75, 75, 1);
        transition-duration: 250ms;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .blog-socials ul li a:hover, .blog-socials ul li a:not(.share):hover {
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

  .share {
    margin-right: -10px;
    font-size: 18px;
    font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
    color: rgba(75, 75, 75);
    padding-block: 0.5em;
  }

    @media only screen and (max-width: 500px) {
      .blog-socials {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
      }
    }

    </style>
        <div class="blog-socials">
        <a class="socials-contact" href="/Contact"><button>Contact Us</button></a>
            <ul>
                <li class="share">Share:</li>
                <li><a href="https://www.facebook.com/sharer/sharer.php?u=${window.location}" target="_blank" aria-label="Share Post on Social Media Link"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20blog%20post%20by%20Queen%20Pin:&url=${window.location}" target="_blank" aria-label="Share Post on Social Media Link"><i class="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/shareArticle?mini=true&url=${window.location}&title=${document.title}" target="_blank" aria-label="Share Post on Social Media Link"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a class="clipBoardLink" title="Copy to clipboard" onclick="copyToClipBoard()"  aria-label="Share Post on Social Media Link"><i class="fa-solid fa-paperclip"></i></a></li>
            </ul>
        </div>
          `;
  }
}

customElements.define("socials-component", Socials);
