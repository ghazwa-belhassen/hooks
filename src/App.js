import { Route, Routes } from "react-router-dom";
import "./App.css";
import Filter from "./components/Filter";
import MovieCard from "./components/MovieCard";
import MovieListe from "./components/MovieListe";
import Navigation from "./components/Navigation";
import { movies } from "./data";
import Series from "./components/pages/Series";

function App() {
  console.log(movies);
  return (
    <div className="App">
      <Navigation
        setMovies={setMovies}
        movies={movies}
        setSearchValue={setSearchValue}
      />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <MovieCard></MovieCard>
            </div>
          }
        ></Route>
        <Route path="/movies">
          <MovieListe
            title="All movies"
            movies={movies.filter(
              (el) =>
                el.title.toLowerCase().includes(searchValue.toLowerCase()) &&
                el.rate >= SearchByRating
            )}
          />
        </Route>
        <Route path="/Movie.id" element={<Series></Series>}></Route>
      </Routes>

      <Route path="/series" element={<Series></Series>}></Route>
      <MovieCard movies={movies} />
      <Filter setSearchByRating={setSearchByRating} />
      <AddModal />
    </div>
  );
}

export default App;
