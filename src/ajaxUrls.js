const ajaxUrls = {
    fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&with_networks=213`,
    fetchTrendingNow: `/trending/all/week?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&with_genres=99`,
}

export default ajaxUrls;
