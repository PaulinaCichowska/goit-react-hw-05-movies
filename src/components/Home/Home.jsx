import { Searchbar } from "components/Searchbar/Searchbar"
import { Movies } from '../Movies/Movies'
import { useEffect, useState, } from "react";
import { fetchTrendingData } from "api/fetchTrendingData";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSearchContext } from "components/Context/searchContext";

export const Home = () => {
    const [trendingData, setTrendingData] = useState([]);
    const { search, changeSearchValue } = useSearchContext();

    const navigate = useNavigate();

    const fetchMovies = async () => {
        const data = await fetchTrendingData();
        setTrendingData([...data]);
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    const onFormSubmit = (e) => {
        const form = e.currentTarget;
        const searchValue = e.target.search.value
        e.preventDefault();
        form.reset();
        if (search !== searchValue && searchValue !== "") {
            changeSearchValue(searchValue)
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