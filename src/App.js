import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';

const Movie_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a146524bcccfe899ad423758704f4e83";

const Search_API = "https://api.themoviedb.org/3/search/movie?api_key=a146524bcccfe899ad423758704f4e83&query";

function App() {
  
  const [movies, setMovies] = useState([]);
  
  useEffect(()=>{
    fetch(Movie_API)
      .then((res) => res.json())
      .then((data) =>{
        console.log(data);
        setMovies(data.results);
    });
    
  }, []);

  return (
  <div className='movie-container'>
    {movies.map((movie) => <Movie key={movie.id} {...movie} />)}
  </div>
  )  
}

export default App;
