import axios from "axios";


export const fetchDataCast = async (id) => {
    const apiKey = process.env.REACT_APP_FILMS_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=` + apiKey;

    const response = await axios.get(URL);
    const data = await response.data;
    const Cast = await data.cast;

    return Cast
}