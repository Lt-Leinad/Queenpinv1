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

let thePost;
const body = document.querySelector(".body");
let styling;
let head = document.head;
let thumbnailArr = [];
let index;
let cur;
let loco;
styleTag = document.createElement("style");

const blogPageStyles = `.body {
    width: 100vw;
    max-width: 1000px;
    min-width: fit-content;
    margin-inline: auto;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto, 1fr);
  }
  
  .body * {
    box-sizing: border-box;
  }
  
  .thumbnailLink {
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
    border-bottom: 1px solid transparent;
    outline: 3px solid rgb(242,162,171);
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
  
  @media only screen and (max-width: 800px) {
    .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    .thumbnailLink {
      max-width: 75%;
      width: 75%;
      min-width: 375px;
      max-height: 662px !important;
    }
  
    .thumbnail-pic {
      height: auto;
      max-height: 400px;
    }
  }`;

const postStyles = `.body {
    max-width: 750px;
    width: 100vw;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-block: 40px;
  }
  
  .top-bar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid rgba(75, 75, 75, 0.5);
    padding-bottom: 10px;
  }
  
  .dots {
    border: none;
    background-color: transparent;
    font-size: 18px;
    width: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .details {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .author {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
  }
  
  .authorName {
    font-size: 14px;
    font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
  }
  
  .author-pic {
    width: 60px;
    height: 60px;
    border-radius: 50%;;
  }
  
  .time {
    font-size: 11px;
    font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
  }
  
  .title1 {
    font-size: 34px;
    font-family: lulo-clean-w01-one-bold, lulo-clean-w05-one-bold,
        sans-serif;
    line-height: 1.5em;
    letter-spacing: 1pt;
    width: 100%;
  }
  
  .title2 {
    font-size: 24px;
    font-family: lulo-clean-w01-one-bold, lulo-clean-w05-one-bold,
        sans-serif;
    line-height: 1.2em;
    width: 100%;
  }
  
  .title3 {
    font-size: 22px;
    font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
    text-align: center;
    margin-inline: auto;
  }
  
  .paragraph {
    font-size: 18px;
    font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
    color: rgba(75, 75, 75);
    line-height: 1.4em;
  }
  
  .small-image {
    width: 375px;
    margin-inline: auto;
  }
  
  .big-image {
    width: 100%;
  }
  
  .internal-link {
    text-decoration: underline;
    color: rgb(255,140,8);
  }
  
  .external-link {
    text-decoration: underline;
  }
  
  @media only screen and (max-width: 850px) {
    .title1 {
        font-size: 28px;
    }
  
    .top-bar, .title1, .title2, .title3, .paragraph {
        padding-inline: 5vw;
    }
  }
  
  @media only screen and (max-width: 500px) {
    .small-image {
        width: 100%;
    }
  }`;

const request = fetch("/Blog/Posts/PostData.json");
request.then(function (response) {
  response.json().then(function (data) {
    const numThumbnails = data["thumbnails"].length;

    styling = blogPageStyles;
    styleTag.insertAdjacentHTML("afterbegin", styling);
    head.appendChild(styleTag);

    data["thumbnails"].forEach((x) => {
      body.style.gridTemplateRows = `${numThumbnails / 2}`;

      const thumbnailLink = document.createElement("a");

      const postLink = function (e) {
        const request2 = fetch("/Blog/Posts/PostData.json");
        request2.then(function (response2) {
          response2.json().then(function (data2) {
            Object.keys(data2).forEach((x, i) => {
              cur = e.target;
              while (!cur.classList.contains("body")) {
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

      // thumbnailLink.href = `/${postLink()}`;
      thumbnailLink.addEventListener("mousedown", postLink);

      thumbnailLink.classList.add("thumbnailLink");
      body.appendChild(thumbnailLink);

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
      dots.insertAdjacentHTML(
        "afterBegin",
        '<i class="fa-solid fa-ellipsis-vertical"></i>'
      );
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

const findThePost = function (thePost) {
  const request = fetch("/Posts/PostsData/Posts.json");
  request.then(function (response) {
    response.json().then(function (data) {
      styleTag.innerHTML = "";
      styleTag.insertAdjacentHTML("afterbegin", postStyles);

      const posts = data["posts"];
      thePost = posts[0];

      document.title = `Queen Pin Blog | ${thePost.title}`;

      // topBar
      const topBar = document.createElement("div");
      topBar.classList.add("top-bar");
      body.appendChild(topBar);

      // details
      const details = document.createElement("div");
      details.classList.add("details");
      topBar.appendChild(details);

      const dots = document.createElement("button");
      dots.insertAdjacentHTML(
        "afterBegin",
        '<i class="fa-solid fa-ellipsis-vertical"></i>'
      );
      dots.classList.add("dots");

      topBar.appendChild(dots);

      const authorImg = document.createElement("img");
      authorImg.src = `/images/unnamed.jpg`;
      authorImg.classList.add("author-pic");
      details.appendChild(authorImg);

      const author = document.createElement("div");
      author.classList.add("author");
      details.appendChild(author);

      const authorName = document.createElement("p");
      authorName.classList.add("authorName");
      authorName.insertAdjacentHTML("afterBegin", thePost.author);
      const time = document.createElement("p");
      time.classList.add("time");
      time.insertAdjacentHTML("afterBegin", thePost.times);
      author.appendChild(authorName);
      author.appendChild(time);

      thePost.orderOfTags.forEach((x, i) => {
        let el;
        switch (x) {
          case "h1":
            el = document.createElement(x);
            el.classList.add("title1");
            el.insertAdjacentHTML("afterBegin", `${thePost.orderOfContent[i]}`);
            break;
          case "h2":
            el = document.createElement(x);
            el.classList.add("title2");
            el.insertAdjacentHTML("afterBegin", `${thePost.orderOfContent[i]}`);
            break;
          case "h3":
            el = document.createElement(x);
            el.classList.add("title3");
            el.insertAdjacentHTML("afterBegin", `${thePost.orderOfContent[i]}`);
            break;
          case "p":
            el = document.createElement(x);
            el.classList.add("paragraph");
            el.insertAdjacentHTML("afterBegin", `${thePost.orderOfContent[i]}`);
            break;
          case "video-small":
            el = document.createElement("video");
            el.classList.add("small-image");
            el.src = `/Posts/PostsData/images/${thePost.orderOfContent[i]}`;
            break;
          case "img-big":
            el = document.createElement("img");
            el.classList.add("big-image");
            el.src = `/Posts/PostsData/images/${thePost.orderOfContent[i]}`;
            break;
          case "img-small":
            el = document.createElement("img");
            el.classList.add("small-image");
            el.src = `/Posts/PostsData/images/${posts[0].orderOfContent[i]}`;
            break;
        }
        body.appendChild(el);
      });
      body.appendChild(document.createElement("socials-component"));
    });
  });
};
