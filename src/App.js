import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';

const Movie_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a146524bcccfe899ad423758704f4e83";

const Search_API = "https://api.themoviedb.org/3/search/movie?api_key=a146524bcccfe899ad423758704f4e83&query=";

function App() {
  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  
  useEffect(()=>{
    fetch(Movie_API)
      .then((res) => res.json())
      .then((data) =>{
        console.log(data);
        setMovies(data.results);
    }); 
    
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
        fetch(Search_API + searchTerm)
            .then((res) => res.json())
            .then((data) =>{
              setMovies(data.results);
          }); 

        setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
  <div className='movie-container'>

      <div className='movieHeader'>
        <header>
            <h1>Search Your Favorite Movies</h1>
            <form onSubmit={handleOnSubmit}>
                <input 
                    className='search'
                    type='search' 
                    placeholder='search...'
                    value={searchTerm}
                    onChange={handleOnChange}>
                </input>
            </form>
        </header>
      </div>

      <div className='movieTile'>
        {movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>

  </div>
  )  
}

export default App;
