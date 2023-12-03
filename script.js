const formSectionFocusFunc = function (n) {
  [
    ...[...[...document.querySelectorAll(".form-section")][n].children][0]
      .children,
  ][1].classList.add("form-section-clicked");
};
