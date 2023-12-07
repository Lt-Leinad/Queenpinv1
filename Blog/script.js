const request = fetch("./Thumbnails/thumbnails.json");
request.then(function (response) {
  response.json().then(function (data) {
    console.log(data["thumbnails"].length);
    const numThumbnails = data["thumbnails"].length;

    data["thumbnails"].forEach((x) => {
      const body = document.querySelector(".body");

      body.style.gridTemplateRows = `${numThumbnails / 2}`;

      const thumbnailLink = document.createElement("a");
      thumbnailLink.href = "/";
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
