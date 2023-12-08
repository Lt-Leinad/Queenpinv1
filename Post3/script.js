const request = fetch("/Posts/PostsData/Posts.json");
request.then(function (response) {
  response.json().then(function (data) {
    const posts = data["posts"];
    thePost = posts[3];
    const body = document.querySelector(".body");

    document.title = `Queen Pin Blog - ${thePost.title}`;

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
    // dots.title = "Share Post";
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
        case "h4":
          el = document.createElement(x);
          el.classList.add("title4");
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
          el.src = `/Posts/PostsData/images/${thePost.orderOfContent[i]}`;
          break;
      }
      body.appendChild(el);
    });
  });
});
