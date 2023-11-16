import { Searchbar } from "components/Searchbar/Searchbar"
import { Movies } from '../Movies/Movies'
import { useEffect, useState, } from "react";
import { fetchTrendingData } from "api/fetchTrendingData";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchContext } from "components/Context/searchContext";

export const Home = () => {
    const [trendingData, setTrendingData] = useState([]);
    const [term, setTerm] = useState('');
    const { search, changeSearchValue } = useSearchContext();

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const fetchMovies = async () => {
        const data = await fetchTrendingData();
        setTrendingData([...data]);

    }

    useEffect(() => {
        fetchMovies()
    }, [])

    const onFormSubmit = (e) => {
        const form = e.currentTarget;
        const search = e.target.search.value
        e.preventDefault();
        form.reset();
        if (term !== search && search !== "") {
            changeSearchValue(search)
            navigate("/movies", { replace: true })
        }
    }
    return (
        <>
            <header >
                <Searchbar onSubmit={onFormSubmit} ></Searchbar>
            </header>
            <div>
                <Movies data={trendingData} ></Movies>
            </div>
        </>
    )

}