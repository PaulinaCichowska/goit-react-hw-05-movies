import axios from "axios";

const apiKey = process.env.REACT_APP_FILMS_API_KEY;
const URL = 'https://api.themoviedb.org/3/trending/movie/day?' + apiKey;

export const fetchTrendingData = async () => {
    const params = {
        page: 1,
        limit: 12,
    }
    try {
        const response = await axios.get(URL, { params });
        const trendingFilms = response.data;
        console.log(trendingFilms);
    } catch (error) {
        console.error('Error fetching', error);
    }

};