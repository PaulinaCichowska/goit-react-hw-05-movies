import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<CustomeNavigation />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<MovieDetails/>} />
        <Route path="/movies/:movieId/cast" element={<Cast/>} />
        <Route path="/movies/:movieId/reviews" element={<Reviews/>} />
      </Route>
    </Routes>
    </>
  );
};
