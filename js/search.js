const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

function onSearchSubmit (event) {
  event.preventDefault();
  window.open(`https://www.google.com/search?q=${searchInput.value}`, '_blank');

  searchInput.value = "";
}

searchForm.addEventListener("submit", onSearchSubmit);

