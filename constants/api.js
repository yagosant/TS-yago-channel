export const API_ROUTES = {
    baseUrl: (api_key) => `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    imageUrl: (imageName) => `https://image.tmdb.org/t/p/w400/${imageName}`,
};
