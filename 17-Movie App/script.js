//open API https://icanhazdadjoke.com/api

//TMDB api key:d34637193700131d47505b704fc14dcf
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d34637193700131d47505b704fc14dcf&page=1"
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=d34637193700131d47505b704fc14dcf&query="'

const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")
//Get initial movies
getMovies(API_URL)
async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data.results)
  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = ""
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie
    const movieEl = document.createElement("div")
    movieEl.classList.add("movie")
    movieEl.innerHTML = `
  
      <img
      src="${IMG_PATH + poster_path}"
      alt="${title}"
     />
      <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
     <div class="overview">
      <h3>Overview</h3>
        ${overview}
      </div>
    `
    main.appendChild(movieEl)
  })
}
function getClassByRate(vote) {
  console.log(" vote is:", typeof vote, vote)

  switch (true) {
    case vote >= 8:
      return "green"
      console.log("green vote is:", vote)
      break
    case vote >= 5:
      return "orange"
      console.log("orange vote is:", vote)
      break
    default:
      console.log("red vote is:", vote)
      return "red"
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const searchTerm = search.value
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm)
    search.value = ""
  } else {
    window.location.reload()
  }
})
