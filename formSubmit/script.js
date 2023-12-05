const backBtn = document.querySelector(".backBtn");

backBtn.addEventListener("click", function () {
  window.location = document.referrer;
});
