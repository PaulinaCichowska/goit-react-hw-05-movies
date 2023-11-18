import { Searchbar } from "components/Searchbar/Searchbar"
import { Movies } from '../Movies/Movies'
import { useEffect, useState, } from "react";
import { fetchDataByQuery } from "api/fetchDataByQuery";
import { useSearchContext } from "components/Context/searchContext";


export const MoviesPage = () => {
    const [term, setTerm] = useState('');
    const [data, setData] = useState([]);
    const { search, changeSearchValue } = useSearchContext();

    const fetchMoviesByQuery = async (search) => {
        const data = await fetchDataByQuery(search);
        setData([...data]);
    }

    useEffect(() => {
        fetchMoviesByQuery(search)
    }, [search])

    const onFormSubmit = (e) => {
        const form = e.currentTarget;
        const search = e.target.search.value
        e.preventDefault();
        form.reset();
        if (term !== search && search !== "") {
            changeSearchValue(search)
            setTerm(search)
        }
    }

    return (
        <>
            <header >
                <Searchbar onSubmit={onFormSubmit} ></Searchbar>
            </header>
            <div>
                <Movies data={data} ></Movies>
            </div>
        </>)
}