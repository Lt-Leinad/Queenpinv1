console.log(location.pathname);
console.log(location.pathname);

const image = document.createElement("img");
image.src = `${location.pathname}images/thumbnail.webp`;
document.querySelector(".body").appendChild(image);
