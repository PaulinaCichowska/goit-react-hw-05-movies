import axios from "axios";


export const fetchDataByQuery = async (search) => {
    const apiKey = process.env.REACT_APP_FILMS_API_KEY;
    const URL = 'https://api.themoviedb.org/3/search/movie';

    const searchParams = new URLSearchParams({
        query: search,
        api_key: apiKey,

    });
    const response = await axios.get(`${URL}?${searchParams}`);
    const data = await response.data;
    const results = await data.results;

    return results
}