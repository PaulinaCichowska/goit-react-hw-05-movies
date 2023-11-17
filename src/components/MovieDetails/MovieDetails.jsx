
import { useEffect, useState } from "react";
import { fetchDataDetails } from "api/fetchDataDetails";
import { Link, Outlet } from "react-router-dom";
import { useSearchContext } from "components/Context/searchContext";
import { Details } from "components/Details/Details";

export const MovieDetails = () => {
    const [data, setData] = useState(null);
    const { id } = useSearchContext();

    const fetchMovies = async (id) => {
        const data = await fetchDataDetails(id);
        setData({ ...data });
    }

    useEffect(() => {
        fetchMovies(id)
    }, [])

    return (
        <div>
            <Link to={"/movies"} >go back</Link >
            {data && <Details data={data} />}
            <div>
                <Link
                    to="cast">
                    Cast
                </Link>
                <Link
                    to="reviews">
                    Reviews
                </Link>
            </div>
            <Outlet />
        </div >

    )
}

