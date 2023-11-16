
import { useEffect, useState, useLocation } from "react";
import { fetchDataDetails } from "api/fetchDataDetails";
import { useNavigate, Link } from "react-router-dom";
import { useSearchContext } from "components/Context/searchContext";


export const MovieDetails = () => {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [term, setTerm] = useState('');
    const { search, changeSearchValue, id, setId } = useSearchContext();

    const navigate = useNavigate();

    const fetchMovies = async () => {
        const data = await fetchDataDetails(id);
        setData([...data]);
        console.log(data)

    }

    useEffect(() => {
        fetchMovies()
    }, [])


    return (
        <>
            <div>
                <Link to={location.state.from}>go back</Link>;

            </div>
        </>
    )
}