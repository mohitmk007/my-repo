// const accessKey = "yA2H1bbEOofSYfQ5Fy86OqDKDbEnc1O3ahf3GkCTCUo";
// const url = `https://api.unsplash.com/search/photos?page=1&query=12&client_id=${accessKey}`;

// fetch(url)
// .then((Response)=>Response.json())
// .then((data)=> {

//   console.log(data.results[3].urls.raw);
//   console.log(data.results[3].urls.small);
//   console.log(data.results[3].urls.full);
//   console.log(data.results[3].urls.thumb);
//   console.log(data.results[3].urls.regular);

// })
// .catch((error)=>console.log("can't fetch data"))


const accessKey = "yA2H1bbEOofSYfQ5Fy86OqDKDbEnc1O3ahf3GkCTCUo";

const formElement = document.querySelector("form");
const inputElement = document.getElementById("search-input");
const searchReasults = document.querySelector(".search-results");
const showMore = document.getElementById("show-btn");

let inputData = "";
let page = 1;
async function searchImages() {
  inputData = inputElement.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  if (page === 1) {
    searchReasults.innerHTML = "";
  }
  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchReasults.appendChild(imageWrapper);
    console.log(imageWrapper)
  });

  page++;
  if (page > 1) {
    showMore.style.display = "block";
  }
}

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  page =1;
  searchImages();
});
showMore.addEventListener("click", () => {
  searchImages();
});
