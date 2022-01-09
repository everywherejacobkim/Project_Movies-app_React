import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';

const Movie_API = "https://api.themoviedb.org/3/movie/550?api_key=a146524bcccfe899ad423758704f4e83";
const Image_API = "https://image.tmdb.org/t/p/w1280";
const Search_API = "https://api.themoviedb.org/3/search/movie?api_key=a146524bcccfe899ad423758704f4e83&query";

function App() {
  
  const [movies, setMovies] = useState([]);
  
  useEffect(()=>{
    fetch(Movie_API)
      .then((res) => res.json())
      .then((data) =>{
        console.log(data);
        setMovies(data);
    });
    
  }, []);

  return (
    <div className="App">
      {movies.length >0 && movies.map((movie) => 
        <Movie key={movie.id} data={movie} />
      )}
    </div>
  );  
}

export default App;
