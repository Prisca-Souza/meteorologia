function handleSearchSubmit(event) {
  event.preventDefault();
  let seacrhInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = seacrhInput.value; 
 
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);