import { Routes, Route } from "react-router-dom";
import { Home } from './Home/Home'
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from './Cast/Cast'
import { Reviews } from "./Reviews/Reviews";
import { Navigation } from "./Navigation/Navigation";
import { MoviesPage } from "./MoviesPage/MoviesPage";
import { ErrorBoundary } from "react-error-boundary";

export const App = () => {
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
