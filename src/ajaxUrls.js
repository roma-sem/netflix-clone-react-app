const ajaxUrls = {
    fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&with_networks=213`
}

export default ajaxUrls;
