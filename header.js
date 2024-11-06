let search = document.querySelector(".headerSearchLink img");
let searchBar = document.querySelector(".headerSearchInput");

console.log(searchBar, search);

function showSearchBar(event){
    searchBar.style.display = "flex";
}

search.addEventListener("click", showSearchBar);