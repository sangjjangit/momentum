const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

function onSearchSubmit (event) {
  event.preventDefault();
  location.href = `https://www.google.com/search?q=${searchInput.value}`;
  searchInput.value = "";
}

searchForm.addEventListener("submit", onSearchSubmit);

