import { useState } from "react";
import "./App.css";
import AddMovie from "./component/AddMovie";
import MovieList from "./component/MovieList";
import Search from "./component/Search";
import { movieData } from "./Data";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Description from "./component/Description";

function App() {
  const [movies, setMovies] = useState(movieData);
  const handleAdd = (newmovie) => {
    setMovies([...movies, newmovie]);
  };
  const [searchValue, setSearchValue] = useState("");
  const [searchrate, setSearchrate] = useState(1);
  const handelSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const handelRate = (newrate) => {
    setSearchrate(newrate);
  };
  return (
    <div className="App">
      <Router>
        <Search
          searchValue={searchValue}
          handelSearch={handelSearch}
          searchrate={searchrate}
          handelRate={handelRate}
        />
        <Switch>
          <Route exact path="/description/:name" render ={ (props)=> <Description {...props} movies={movies} /> } />
          <Route path="/" render= {()=> 
            <MovieList
            films={movies.filter(
              (el) =>
                el.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase().trim()) &&
                el.rating >= searchrate
            )}
          />
          }
          />
          
        </Switch>
      </Router>
      <AddMovie handleAdd={handleAdd} />

    </div>
  );
}

export default App;
