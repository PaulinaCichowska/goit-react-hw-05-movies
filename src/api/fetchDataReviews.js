import axios from "axios";

export const fetchDataReviews = async (filmId) => {
    const apiKey = process.env.REACT_APP_FILMS_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/${filmId}/reviews?api_key=` + apiKey;
    const response = await axios.get(URL);
    const data = await response.data;
    const reviews = data.results

    return reviews
}