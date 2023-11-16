
import { useEffect, useState } from "react";
import { fetchDataDetails } from "api/fetchDataDetails";
import { useNavigate, Link, useParams, Outlet, useLocation } from "react-router-dom";
import { } from "react-router-dom";
import { useSearchContext } from "components/Context/searchContext";

const posterPath = 'https://image.tmdb.org/t/p/original/'

export const MovieDetails = () => {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState('');
    const { search, changeSearchValue, id, changeId } = useSearchContext();
    const { filmId } = useParams();

    const location = useLocation();
    // console.log(location)
    const navigate = useNavigate();

    const fetchMovies = async (id) => {
        const data = await fetchDataDetails(id);
        setData({ ...data });
        console.log(data)

    }

    useEffect(() => {
        fetchMovies(id)
    }, [id])

    // const backLinkHref = location.state.from
    return (
        <div>
            <Link to="/movies" >go back</Link>
            <h2> {data.title}  </h2>
            <p>{data.release_data}</p>
            <img
                src={posterPath + data.poster_path}
                alt={data.title}
                width={400}
                height={300}
            />
            <p >Vote average: {data.vote_average}</p>
            <h3>Description</h3>
            <p>{data.overview}</p>
            <div>
                <p>Genres:</p>
                <ul>
                    {data.genres.map(genre => (
                        <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
            </div>
            <Outlet />
        </div >

    )
}

