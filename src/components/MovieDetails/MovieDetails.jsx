
import { useEffect, useState } from "react";
import { fetchDataDetails } from "api/fetchDataDetails";
import { useNavigate, Link, useParams, Outlet, useLocation } from "react-router-dom";
import { } from "react-router-dom";
import { useSearchContext } from "components/Context/searchContext";


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
        // console.log(data)

    }

    useEffect(() => {
        fetchMovies(id)
    }, [id])

    const backLinkHref = location.state?.from
    return (
        <>
            <div>
                <Link to={backLinkHref} >go back</Link>
                <p>{filmId} strona</p>
                <Outlet />
            </div>

        </>
    )
}

