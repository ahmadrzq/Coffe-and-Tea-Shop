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

// Category
// Get the category buttons and item list
const categoryButtons = document.querySelectorAll(".btn-sidebar");
const productItems = document.querySelectorAll(".product-menu");

for (let i = 0; i < categoryButtons.length; i++) {
  let categoryNow = window.location.href;
  categoryButtons[i].addEventListener("click", function (event) {
    // Remove active-sidebar class from all buttons except the clicked one
    for (let j = 0; j < categoryButtons.length; j++) {
      if (j !== i) {
        categoryButtons[j].classList.remove("active-sidebar");
      }
    }

    // Add active-sidebar class to the clicked button
    categoryButtons[i].classList.add("active-sidebar");

    const category = event.target.dataset.category;
    const url = new URL(categoryNow);
    url.searchParams.set("category", category);
    window.history.pushState({ category }, "", url); // update the URL without reloading the page
    filterProducts();
  });
}

function filterProducts() {
  const url = new URL(window.location.href);
  let category = url.searchParams.get("category");

  if (!category) {
    category = "all"; // default to "all" if no category is selected
  }

  productItems.forEach((item) => {
    const itemCategory = item.dataset.category;
    if (category === "all" || category === itemCategory) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Listen for popstate event to handle back/forward navigation
window.addEventListener("popstate", (event) => {
  if (event.state && event.state.category) {
    filterProducts();
  }
});

filterProducts();
