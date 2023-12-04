const formSectionFocusFunc = function (n) {
  [
    ...[...document.querySelectorAll(".form-section")][n].children,
  ][0].classList.add("form-section-clicked");
};

const doubleformSectionFocusFunc = function (n) {
  [...[...document.querySelectorAll(".double-form-section")][0].children][
    n
  ].classList.add("form-section-clicked");
};
