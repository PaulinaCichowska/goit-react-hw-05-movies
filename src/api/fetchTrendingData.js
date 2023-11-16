import axios from "axios";

const apiKey = process.env.REACT_APP_FILMS_API_KEY;
const URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=' + apiKey;

export const fetchTrendingData = async () => {

    const response = await axios.get(URL);
    const data = response.data;
    const trendingFilms = data.results;

    return trendingFilms
}