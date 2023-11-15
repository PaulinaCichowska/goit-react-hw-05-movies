import { Routes, Route } from "react-router-dom";
import { Home } from './Home/Home'
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from './Cast/Cast'
import { Movies } from "./Movies/Movies";
import { Reviews } from "./Reviews/Reviews";
import { Navigation } from "./Navigation/Navigation";
import { useState, useEffect } from "react";


export const App = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [term, setTerm] = useState('');
  const [page, setPage] = useState(1);

  const fetchData = async (search) => {
    setIsLoading(true)


    const API_KEY = 'a6dea57c1aa25342be7364b15df895c0'
    const URL = `https://api.themoviedb.org/3/${term}?api_key=` + API_KEY
    try {
      const response = await fetch(URL);
      const json = await response.json();
      let newData = json.results
      console.log(newData)
      if (search === term) {
        setData([...data, ...newData])


      } else {
        setData([...newData])

      }

    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false)
    }
  }

  const getFilteredData = () => {
    return data.filter(film => film.title.toLowerCase().indexOf(term) !== -1)
  }

  useEffect(() => {
    const prev = page - 1;
    if (prev !== page) {
      fetchData(term);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const onFormSubmit = (e) => {
    const form = e.currentTarget;
    const search = e.target.search.value
    e.preventDefault();
    form.reset();
    if (term !== search && search !== "") {
      fetchData(search)
      setTerm(search)
      getFilteredData()

    }

  }

  // const loadMore = () => {
  //   setPage(page + 1)

  // }


  // const Click = (e) => {
  //   fetchData(term)
  //   e.preventDefault();
  // }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Home onSubmit={onFormSubmit} data={data} />} />
          <Route path="/movies" element={<Movies data={data} />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
