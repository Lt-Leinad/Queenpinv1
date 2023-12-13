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
const body = document.querySelector(".body");
let thumbnailLink;

let thePost,
  thumbnailArr = [],
  index,
  cur,
  loco;

//search bar
const searchBar = document.createElement("form");
searchBar.classList.add("searchBar");

const searchBarInput = document.createElement("input");
searchBarInput.style = `font-size: 18px;
font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;outline: none;border: none; border-bottom: 1px solid rgba(105, 105, 105, 0.5);;width:100%;height: 36px;`;
searchBarInput.type = "text";
searchBarInput.placeholder = "Search";
searchBar.appendChild(searchBarInput);
document.body.appendChild(searchBar);

let thumbnailToShow;

const searchDesktopFunc = function (e) {
  if (e.key == "Enter") {
    e.preventDefault();
    const request = fetch("/Blog/Posts/PostData.json");
    request.then(function (response3) {
      response3.json().then(function (data3) {
        // x.title.includes(searchBarInput.value)
        thumbnailArr.forEach((a, i) => {
          a.classList.remove("display-none");
          if (
            !a.innerHTML
              .toUpperCase()
              .includes(searchBarInput.value.toUpperCase())
          ) {
            a.classList.add("display-none");
          }
        });
      });
    });
  } else {
    const request4 = fetch("/Blog/Posts/PostData.json");
    request4.then(function (response4) {
      response4.json().then(function (data4) {
        thumbnailArr.forEach((a, i) => {
          a.classList.remove("display-none");
          if (
            !a.innerHTML
              .toUpperCase()
              .includes(searchBarInput.value.toUpperCase())
          ) {
            a.classList.add("display-none");
          }
        });
      });
    });
  }
};

const request = fetch("/Blog/Posts/PostData.json")
  .then(async (response) => {
    if (!response.ok) {
      throw new Error("Error in request");
    }
    const data = await response.json();
    const numThumbnails = data["thumbnails"].length;
    data["thumbnails"].forEach((x) => {
      body.style.gridTemplateRows = `${numThumbnails / 2}`;

      thumbnailLink = document.createElement("a");
      thumbnailArr.push(thumbnailLink);

      const postLink = function (e_1) {
        const request2 = fetch("/Blog/Posts/PostData.json");
        request2.then(function (response2) {
          response2.json().then(function (data2) {
            Object.keys(data2).forEach((x_1, i) => {
              cur = e_1.target;
              while (!cur.classList.contains("body")) {
                cur = cur.parentElement;
              }
              thumbnailArr = [];
              [...cur.children].forEach((y, i_1) => {
                thumbnailArr.push(isDescendant(y, e_1.target));
              });
              thumbnailArr.forEach((z, i_2) => {
                z ? (index = thumbnailArr.indexOf(z)) : null;
              });
              window.location = `BlogPosts/${data2.thumbnails[index].title}`;
            });
          });
        });
      };

      searchBarInput.addEventListener("keydown", searchDesktopFunc);
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
      author.insertAdjacentHTML(
        "afterBegin",
        `${x["author"]}<svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" class="blog-post-homepage-description-fill" style="fill-rule: evenodd;"><path d="M15.3812,6.495914 L12.6789333,8.77258837 C12.6191333,8.84477644 12.5099333,8.85722265 12.4354,8.79997005 C12.4215333,8.79001308 12.4094,8.77756686 12.3998667,8.76429089 L9.78686667,6.14327115 C9.67766667,5.99225704 9.46186667,5.95491839 9.305,6.05863687 C9.26946667,6.08186981 9.23913333,6.11091099 9.21573333,6.14493065 L6.60013333,8.81075677 C6.5464,8.88626383 6.43893333,8.90534803 6.3592,8.85390366 C6.34446667,8.84394669 6.33146667,8.83233022 6.32106667,8.81905425 L3.61966667,6.50587098 C3.5018,6.36149485 3.28426667,6.33577266 3.13346667,6.44861837 C3.0494,6.51167921 3,6.60792997 3,6.70998895 L4,14 L15,14 L16,6.70169148 C16,6.51831719 15.8448667,6.36979232 15.6533333,6.36979232 C15.5476,6.36979232 15.4470667,6.41625821 15.3812,6.495914 Z"></path></svg>`
      );
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
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

window.addEventListener("load", function () {
  searchBarInput.value = "";
});
