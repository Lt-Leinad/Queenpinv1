function isDescendant(parent, child) {
  let node = child.parentNode;
  while (node != null) {
    if (node == parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

class Slider extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>

      .recent {
        width: 90vw;
        max-width: 420px;
        text-align: left;
        margin-inline: auto;
        margin-bottom: 10px;
        font-size: 24px;
        color: rgba(75, 75, 75);
        font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
        line-height: 1.5em;
      }

      .slider-container {
        width: 90vw;
        max-width: 580px;
        height: 512px !important;
        margin-inline: auto;
        overflow: hidden;
      }

      .slider {
        display: flex;
        width: 90vw;
        max-width: 420px;
        height: 512px !important;
        margin-inline: auto;
        position: relative;
        align-items: center;
      }
      
      .thumbnailLink {
        position: absolute;
        width: 100%;
        max-width: 420px;
        max-height: 512px !important;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(105, 105, 105, 0.5);
        margin-bottom: 20px;
        padding-bottom: 20px;
        outline: 3px solid transparent;
        transition-duration: 250ms;
      }

      .thumbnailLink:hover {
        cursor: pointer;
      }

      .thumbnail {
        width: 100%;
        height: 100%;
      }

      .thumbnail-pic {
        width: 100%;
        max-height: 250px;
        object-fit: contain;
      }

      .text {
        width: 100%;
        max-width: 420px;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-height: 222px;
      }

      .share-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-height: 50px;
        padding-inline: 10px;
        padding-block: 5px;
        width: 100%;
      }

      .details {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 5px;
      }

      .profile-img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
      }

      .credits {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }

      .author {
        font-size: 14px;
        font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
      }

      .times {
        font-size: 11px;
        font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
      }

      .dots {
        border: none;
        background-color: transparent;
        font-size: 13px;
        width: 10%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      .title {
        font-size: 25px;
        font-family: lulo-clean-w01-one-bold, lulo-clean-w05-one-bold,
          sans-serif;
        vertical-align: middle;
        line-height: 1.2em;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 90px;
        text-align: left;
        padding-inline: 10px;
        letter-spacing: 1pt;
        width: 100%;
      }

      .snippet {
        font-size: 16px;
        color: rgba(75, 75, 75);
        font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
        line-height: 1.5em;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: justify;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 82px;
        padding-inline: 10px;
        padding-block: 5px;
        width: 100%;
      }

      .right-arrow {
        position: absolute;
        right: -80px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
        z-index: 999;
        height: 100%;
        background-color: white;
        display: grid;
        place-content: center;
        width: 80px;
      }

      .left-arrow {
        position: absolute;
        left: -80px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
        z-index: 999;
        height: 100%;
        background-color: white;
        display: grid;
        place-content: center;
        width: 80px;
      }

      .right-arrow i, .left-arrow i {
        border: 1px solid rgb(242,162,171);;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: grid;
        place-content: center;
        color: rgb(242,162,171);
      }

      .right-arrow i:hover, .left-arrow i:hover {
        color: white;
        background-color: rgb(242,162,171);
        cursor: pointer;
      }

      @media only screen and (max-width: 1000px) {
        .thumbnailLink {
          width: 375px;
        }

        .text,
        .snippet,
        .share-bar,
        .title {
          max-width: 100%;
        }
      }

      .searchBar {
        position: absolute;
        top: 200px;
        left: 50%;
        transform: translateX(-50%);
        height: 36px;
        width: 90vw;
        max-width: 920px;
      }

      @media only screen and (max-width: 800px) {
        .body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .thumbnailLink, .searchBar {
          max-width: 75%;
          width: 75%;
          min-width: 375px;
          max-height: 662px !important;
        }

        .thumbnail-pic {
          height: auto;
          max-height: 400px;
        }
      }

      @media only screen and (max-width: 620px) {
        .recent, .slider-container {
            display: none !important;
        }
      }
  
      </style>
      <h1 class="recent">Recent Posts: </h1>
      <div class="slider-container">
      <div class="slider">
      </div>
      </div>
            `;
  }
}

customElements.define("slider-component", Slider);

const slider = document.querySelector(".slider");
let thumbnailArr = [];
let index;
let slideCount = 0;

const rightArrow = document.createElement("div");
rightArrow.insertAdjacentHTML(
  "afterbegin",
  `<i class="fa-solid fa-arrow-right-long"></i>`
);
const leftArrow = document.createElement("div");
leftArrow.insertAdjacentHTML(
  "afterbegin",
  `<i class="fa-solid fa-arrow-left-long"></i>`
);
rightArrow.classList.add("right-arrow");
leftArrow.classList.add("left-arrow");
leftArrow.classList.add("display-none");
slider.appendChild(rightArrow);
slider.appendChild(leftArrow);
let numThumbnails;

const findNextSlide = function () {
  let transArr = [];

  thumbnailArr.forEach((x, i) => {
    let str = x.style.transform;
    let transValue = [...str]
      .splice(16, [...str].splice(16, 6).join("").indexOf("%"))
      .join("");
    transArr.push(transValue);

    if (transArr.reduce((a, b) => +a + +b, 0) == (numThumbnails * 100) / -2) {
      rightArrow.classList.add("display-none");
    } else {
      leftArrow.classList.remove("display-none");
    }
    x.style.transform = `translateX(calc(${transValue - 100}% )`;
  });
};

const findPrevSlide = function () {
  let transArr = [];

  thumbnailArr.forEach((x, i) => {
    let str = x.style.transform;
    let transValue = [...str]
      .splice(16, [...str].splice(16, 6).join("").indexOf("%"))
      .join("");
    transArr.push(transValue);
    if (transArr.reduce((a, b) => +a + +b, 0) == (numThumbnails * 100) / 2) {
      leftArrow.classList.add("display-none");
    } else {
      rightArrow.classList.remove("display-none");
    }
    x.style.transform = `translateX(calc(${+transValue + 100}%)`;
  });
};

rightArrow.addEventListener("click", findNextSlide);
leftArrow.addEventListener("click", findPrevSlide);

const req = fetch("/Blog/Posts/PostData.json");
req.then(function (res) {
  res.json().then(function (obj) {
    obj["thumbnails"].forEach((x) => {
      numThumbnails = obj["thumbnails"].length;
      thumbnailLink = document.createElement("a");
      thumbnailArr.push(thumbnailLink);
      //   console.log(
      //     document.title.slice(17, document.title.length),
      //     thumbnailLink
      //   );
      thumbnailArr.forEach((x, i) => {
        x.style.transform = `translateX(calc(${i * 100}%)`;
      });

      const postLink = function (e) {
        const request2 = fetch("/Blog/Posts/PostData.json");
        request2.then(function (response2) {
          response2.json().then(function (data2) {
            Object.keys(data2).forEach((x, i) => {
              cur = e.target;
              while (!cur.classList.contains("slider")) {
                cur = cur.parentElement;
              }
              thumbnailArr = [];
              [...cur.children].forEach((y, i) => {
                thumbnailArr.push(isDescendant(y, e.target));
              });
              thumbnailArr.forEach((z, i) => {
                z ? (index = thumbnailArr.indexOf(z)) : null;
              });
              window.location = `/${postLink()}`;
            });
          });
        });
        return "Post" + index;
      };

      thumbnailLink.addEventListener("mousedown", postLink);

      thumbnailLink.classList.add("thumbnailLink");
      slider.appendChild(thumbnailLink);

      // thumbnail
      const thumbnail = document.createElement("div");
      thumbnail.classList.add("thumbnail");
      thumbnailLink.appendChild(thumbnail);

      // thumbnail-pic
      const thumbnailPic = document.createElement("img");
      thumbnailPic.classList.add("thumbnail-pic");
      thumbnailPic.src = `/images/thumbnail_images/${x["thumbnail"]}`;
      thumbnailPic.alt = x["alt"];
      thumbnail.appendChild(thumbnailPic);

      //text
      const text = document.createElement("div");
      text.classList.add("text");
      thumbnail.appendChild(text);

      //share-bar
      const shareBar = document.createElement("div");
      shareBar.classList.add("share-bar");
      text.appendChild(shareBar);

      //details
      const details = document.createElement("div");
      details.classList.add("details");
      shareBar.appendChild(details);

      //profile-img
      const profileImg = document.createElement("img");
      profileImg.classList.add("profile-img");
      profileImg.src = x["profile-img"];
      profileImg.alt = "Profile Image";
      details.appendChild(profileImg);

      //credits
      const credits = document.createElement("div");
      credits.classList.add("credits");
      details.appendChild(credits);

      //author
      const author = document.createElement("p");
      author.classList.add("author");
      author.insertAdjacentHTML("afterBegin", x["author"]);
      credits.appendChild(author);

      //times
      const times = document.createElement("p");
      times.classList.add("times");
      times.insertAdjacentHTML("afterBegin", x["times"]);
      credits.appendChild(times);

      //dots
      const dots = document.createElement("button");
      dots.classList.add("dots");
      dots.insertAdjacentHTML("afterBegin", "");

      shareBar.appendChild(dots);

      //title
      const title = document.createElement("h1");
      title.classList.add("title");
      title.insertAdjacentHTML("afterBegin", x["title"]);
      text.appendChild(title);

      //snippet
      const snippet = document.createElement("p");
      snippet.classList.add("snippet");
      snippet.insertAdjacentHTML("afterBegin", x["snippet"]);
      text.appendChild(snippet);
    });
  });
});
