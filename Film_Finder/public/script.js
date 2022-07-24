const tmdbKey = '';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list'
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;

  try {
    const response = await fetch(urlToFetch)
    if(response.ok) {
      const jsonResponse = await response.json();
      //console.log(jsonResponse);
      //const genres = jsonResponse.genres;
      console.log(genres);
      return genres;
    }
    throw new Error('Request failed');
  } catch(error) {
    console.log(error);
  }

};


const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie';
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;

  const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;

  try {
    const response = await fetch(urlToFetch)
    if(response.ok) {
      //console.log('parsing response');
      const jsonResponse = await response.json();
      const movies = jsonResponse.results;
      //console.log(movies);
      return movies;
    }
    throw new Error('Request failed');
  } catch(error) {
    console.log(error);
  }
  
};


const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  console.log('showRandomMovie called');
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

};

getGenres().then(populateGenreDropdown, () => {console.log('rejected');});
playBtn.onclick = showRandomMovie;