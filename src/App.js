import  React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Components/Tmdb';
import MovieRow from './Components/MovieRow';

const App = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
      {
       movieList.map((item, key) => (
          <div>
            <MovieRow />
          </div>
        )
       )
      }
      </section>
    </div>
  );
};

export default App;