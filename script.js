// Active navbar list
const buttonActiveNow = window.location.href;
const navList = document.querySelectorAll(".nav-list");

if (
  buttonActiveNow === "http://127.0.0.1:5501/menu.html" ||
  buttonActiveNow === "http://127.0.0.1:5501/detail.html"
) {
  navList[0].classList.add("active");
}
if (buttonActiveNow === "http://127.0.0.1:5501/find-us.html") {
  navList[1].classList.add("active");
}
if (buttonActiveNow === "http://127.0.0.1:5501/help.html") {
  navList[2].classList.add("active");
}
