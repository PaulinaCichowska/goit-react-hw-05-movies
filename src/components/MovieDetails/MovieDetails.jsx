
import { useEffect, useState } from "react";
import { fetchDataDetails } from "api/fetchDataDetails";
import { Link, Outlet } from "react-router-dom";
import { useSearchContext } from "components/Context/searchContext";
import { Details } from "components/Details/Details";
import css from './MovieDetails.module.css'

export const MovieDetails = () => {
    const [data, setData] = useState(null);
    const { id } = useSearchContext();

    const fetchMovies = async (id) => {
        const data = await fetchDataDetails(id);
        setData({ ...data });
    }

    useEffect(() => {
        fetchMovies(id)
    }, [id])

    return (
        <div>
            <Link to={"/movies"} className={css.link}>GO BACK</Link >
            {data && <Details data={data} />}
            <div className={css.buttons}>
                <Link className={css.cast}
                    to="cast">
                    Cast
                </Link>
                <Link className={css.reviews}
                    to="reviews">
                    Reviews
                </Link>
            </div>
            <Outlet />
        </div >

    )
}

