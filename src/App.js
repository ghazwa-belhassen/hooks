import "./App.css";
import Filter from "./components/Filter";
import MovieCard from "./components/MovieCard";
import MovieListe from "./components/MovieListe";
import Navigation from "./components/Navigation";
import { movies } from "./data";

function App() {
  console.log(movies);
  return (
    <div className="App">
      <Navigation />
      <MovieListe title="All movies" movies={movies} />
      <MovieCard movies={movies} />
      <Filter />
      <AddModal />
    </div>
  );
}

export default App;
