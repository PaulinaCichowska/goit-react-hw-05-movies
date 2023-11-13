import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from './Home/Home'
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from './Cast/Cast'
import { Movies } from "./Movies/Movies";
import { Reviews } from "./Reviews/Reviews";


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
