const accessKey = "W9k2K_jrdxQU0WGBMl3R_MIr5Zhg9KA9vJIzJXJlbrE";

const searchBar = document.getElementById("search-bar");
const searchInput = document.getElementById("searchInput");
const imageContainer = document.getElementById("imageContainer");
const searchButton = document.getElementById("searchBtn");
const showMoreBtn = document.getElementById("show");


let keyword = "";
let page = 1; 

async function searchImages(){
    keyword = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1){
        imageContainer.innerHTML = "";
        showMoreBtn.style.display = "none";
    };

    const results = data.results;

    results.map((results) => {
        const image = document.createElement("img");
        image.src = results.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = results.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        imageContainer.appendChild(imageLink);
    });

    showMoreBtn.style.display = "block";
};

searchBar.addEventListener("submit", (e) => {
    e.preventDefault();
    searchImages();
    page = 1;
});

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    searchImages();
    page = 1;
});


showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});