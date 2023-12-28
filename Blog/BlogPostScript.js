let title, body;
// const fs = require("fs");

const reqFunc2 = fetch("/Blog/Posts/PostData.json")
  .then(async (response2) => {
    if (!response2.ok) {
      throw new Error("Error in request");
    }
    const data2 = await response2.json();
    title = document.URL.slice(
      document.URL.toLowerCase().indexOf("/blogposts/") + 11,
      document.URL.length - 1
    )
      .split("%20")
      .join(" ");
  })
  .catch((error) => {
    window.location.reload();
  });

const reqFunc = fetch("/Posts/PostsData/Posts.json")
  .then(async (response) => {
    if (!response.ok) {
      throw new Error("Error in request");
    }
    const data = await response.json();
    const posts = data["posts"];
    let postArr = posts.map(
      (x, i) => x.title.toLowerCase() == title.toLowerCase()
    );
    let thePost = posts[postArr.indexOf(true)];
    body = document.querySelector(".body");
    document.title = `Queen Pin Blog - ${thePost.title}`;
    // topBar
    const topBar = document.createElement("div");
    const share = document.createElement("ul");
    const shareOverlay = document.createElement("div");
    topBar.classList.add("top-bar");
    share.classList.add("shareDiv");
    shareOverlay.classList.add("shareOverlay");
    share.classList.add("display-none");
    shareOverlay.classList.add("display-none");
    body.appendChild(topBar);
    share.insertAdjacentHTML(
      "afterBegin",
      `<li><i class="fa-solid fa-share"></i> Share Post</li>`
    );
    shareOverlay.insertAdjacentHTML(
      "afterBegin",
      `
        <ul>
            <li><a href="https://www.facebook.com/sharer/sharer.php?u=${window.location}" target="_blank"aria-label="Share Post Link"><?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="56px" id="Layer_1" style="enable-background:new 0 0 67 67;" version="1.1" viewBox="0 0 67 67" width="56px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M29.765,50.32h6.744V33.998h4.499l0.596-5.624h-5.095  l0.007-2.816c0-1.466,0.14-2.253,2.244-2.253h2.812V17.68h-4.5c-5.405,0-7.307,2.729-7.307,7.317v3.377h-3.369v5.625h3.369V50.32z   M34,64C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#3A589B;"/></svg></a></li>
            <li><a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20blog%20post%20by%20Queen%20Pin:&url=${window.location}" target="_blank"aria-label="Share Post Link"><?xml version="1.0" ?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" width="48px" height="48px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g><polygon points="12.153992,10.729553 8.088684,5.041199 5.92041,5.041199 10.956299,12.087097 11.59021,12.97345    15.900635,19.009583 18.068909,19.009583 12.785217,11.615906  "/><path d="M21.15979,1H2.84021C1.823853,1,1,1.823853,1,2.84021v18.31958C1,22.176147,1.823853,23,2.84021,23h18.31958   C22.176147,23,23,22.176147,23,21.15979V2.84021C23,1.823853,22.176147,1,21.15979,1z M15.235352,20l-4.362549-6.213013   L5.411438,20H4l6.246887-7.104675L4,4h4.764648l4.130127,5.881958L18.06958,4h1.411377l-5.95697,6.775635L20,20H15.235352z"/></g></svg></a></li>
            <li><a href="https://www.linkedin.com/shareArticle?mini=true&url=${window.location}&title=${document.title}" target="_blank"aria-label="Share Post Link"><?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.0//EN'  'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'><svg enable-background="new 0 0 32 32" height="48px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="48px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle clip-rule="evenodd" cx="16" cy="16" fill="#007BB5" fill-rule="evenodd" r="16"/><g><rect fill="#FFFFFF" height="14" width="4" x="7" y="11"/><path d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z" fill="#FFFFFF"/><circle cx="9" cy="8" fill="#FFFFFF" r="2"/></g></svg></a></li>
            <li><a class="clipBoardLink" title="Copy to clipboard" onclick="copyToClipBoard()" aria-label="Copy Post Link" style="font-size: 20px"><i class="fa-solid fa-paperclip"></i></a></li>
        </ul>`
    );
    let xOutShare = document.createElement("div");
    xOutShare.classList.add("x-out-share");
    xOutShare.addEventListener("click", () => {
      shareOverlay.classList.add("display-none");
      share.classList.add("display-none");
      dots.innerHTML = "";
      dots.insertAdjacentHTML(
        "afterbegin",
        `<i class="fa-solid fa-ellipsis-vertical"></i>`
      );
    });
    xOutShare.insertAdjacentHTML("afterbegin", `<i class="fa-solid fa-x"></i>`);
    shareOverlay.appendChild(xOutShare);
    topBar.appendChild(share);
    topBar.appendChild(shareOverlay);
    // details
    const details = document.createElement("div");
    details.classList.add("details");
    topBar.appendChild(details);
    const dots = document.createElement("button");
    dots.insertAdjacentHTML(
      "afterBegin",
      '<i class="fa-solid fa-ellipsis-vertical"></i>'
    );
    dots.ariaLabel = "Share Post Button";
    dots.classList.add("dots");
    dots.addEventListener("click", () => {
      if (share.classList.contains("display-none")) {
        share.classList.remove("display-none");
        dots.innerHTML = "";
        dots.insertAdjacentHTML("afterbegin", `<i class="fa-solid fa-x"></i>`);
      } else {
        share.classList.add("display-none");
        dots.innerHTML = "";
        dots.insertAdjacentHTML(
          "afterbegin",
          `<i class="fa-solid fa-ellipsis-vertical"></i>`
        );
      }
    });
    share.addEventListener("click", () => {
      shareOverlay.classList.remove("display-none");
    });
    topBar.appendChild(dots);
    const authorImg = document.createElement("img");
    authorImg.src = `/images/unnamed.jpg`;
    authorImg.alt = `${thePost.author} Image`;
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
    thePost.orderOfTags.forEach((x_1, i_1) => {
      let el;
      switch (x_1) {
        case "h1":
          el = document.createElement(x_1);
          el.classList.add("title1");
          el.insertAdjacentHTML("afterBegin", `${thePost.orderOfContent[i_1]}`);
          break;
        case "h2":
          el = document.createElement(x_1);
          el.classList.add("title2");
          el.insertAdjacentHTML("afterBegin", `${thePost.orderOfContent[i_1]}`);
          break;
        case "h3":
          el = document.createElement(x_1);
          el.classList.add("title3");
          el.insertAdjacentHTML("afterBegin", `${thePost.orderOfContent[i_1]}`);
          break;
        case "h4":
          el = document.createElement(x_1);
          el.classList.add("title4");
          el.insertAdjacentHTML("afterBegin", `${thePost.orderOfContent[i_1]}`);
          break;
        case "p":
          el = document.createElement(x_1);
          el.classList.add("paragraph");
          el.insertAdjacentHTML("afterBegin", `${thePost.orderOfContent[i_1]}`);
          break;
        case "video-small":
          el = document.createElement("video");
          el.classList.add("small-image");
          el.src = `/Posts/PostsData/images/${thePost.orderOfContent[i_1]}`;
          el.setAttribute("autoplay", "");
          el.setAttribute("loop", "");
          el.setAttribute("controls", "");
          el.setAttribute("muted", "");
          el.alt = "Blog Post Image";
          break;
        case "img-big":
          el = document.createElement("img");
          el.classList.add("big-image");
          el.src = `/Posts/PostsData/images/${thePost.orderOfContent[i_1]}`;
          el.alt = "Blog Post Image";
          break;
        case "img-small":
          el = document.createElement("img");
          el.classList.add("small-image");
          el.src = `/Posts/PostsData/images/${thePost.orderOfContent[i_1]}`;
          el.alt = "Blog Post Image";
          break;
        case "lh":
          el = document.createElement("h2");
          el.classList.add("lh");
          el.insertAdjacentHTML("afterBegin", `${thePost.orderOfContent[i_1]}`);
          break;
        case "italic":
          el = document.createElement("em");
          el.classList.add("italic");
          el.insertAdjacentHTML("afterBegin", `${thePost.orderOfContent[i_1]}`);
          break;
        case "quote":
          el = document.createElement("em");
          el.classList.add("quote");
          el.insertAdjacentHTML("afterBegin", `${thePost.orderOfContent[i_1]}`);
          break;
      }
      body.appendChild(el);
    });
    body.appendChild(document.createElement("socials-component"));
  })
  .catch((error) => {
    window.location.reload();
  });

// const html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta name="description" content="Queen Pin - Pinterest Management Services - Blog"/><link rel="stylesheet" type="text/css" href="/Blog/postStyle.css" /><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous"/><link rel="icon" type="image/x-icon" href="/photos/favicon.ico" /><title>Queen Pin Blog</title></head><body><menu-component></menu-component><header-component></header-component><div class="body"></div><script src="https://kit.fontawesome.com/5d743bbd3f.js" crossorigin="anonymous" async></script><script src="/Posts/PostsData/Posts.json" type="text/json" async></script><script src="/Blog/BlogPostScript.js" async></script><script src="/components/header.js" type="text/javascript" async></script><script src="/components/footer.js" type="text/javascript" async></script><script src="/components/menu.js" async></script><script src="/components/socials.js" async></script><script src="/components/slider.js" async></script></body></html>'
// fs.writeFileSync(`Blog/BlogPosts/${}`, html)
