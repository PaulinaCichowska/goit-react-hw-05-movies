import { Routes, Route, useSearchParams } from "react-router-dom";
import { Home } from './Home/Home'
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from './Cast/Cast'
import { Movies } from "./Movies/Movies";
import { Reviews } from "./Reviews/Reviews";
import { Navigation } from "./Navigation/Navigation";
import { useState, useEffect } from "react";
import { MoviesPage } from "./MoviesPage/MoviesPage";
import { fetchDataByQuery } from "api/fetchDataByQuery";
import { ErrorBoundary } from "react-error-boundary";
import { useSearchContext } from "./Context/searchContext";
import { fetchDataDetails } from "api/fetchDataDetails";


export const App = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [term, setTerm] = useState('');
  const [page, setPage] = useState(1);
  // const { searchValue, changeSearchValue } = useSearchValue();
  const { search, changeSearchValue } = useSearchContext();

  return (
    <div>

      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Routes>
          <Route path="/" element={<Navigation />} >
            <Route index element={<Home />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </ErrorBoundary>

    </div>
  );
};
