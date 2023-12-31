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

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
