const formSectionFocusFunc = function (n) {
  [
    ...[...[...document.querySelectorAll(".form-section")][n].children][0]
      .children,
  ][1].classList.add("form-section-clicked");
};

window.addEventListener("load", function () {
  if (this.screen.width > 800 && this.screen.height > 650) {
    this.setTimeout(function () {
      document.querySelector(".contact-modal").classList.remove("display-none");
    }, 3000);
  }
});

const xOutFunc = function () {
  document.querySelector(".contact-modal").classList.add("display-none");
};
