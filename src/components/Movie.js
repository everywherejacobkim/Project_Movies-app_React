import React from "react";  
import "./Movie.css";

const Image_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if(vote >= 8) {
        return 'green';
    } else if(vote >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
};

const Movie = ({title, poster_path, overview, vote_average}) => (
    <div className="movie">
       
       <img src= {Image_API + poster_path} alt={title}></img>
       
       <div className="movie-info">
            <h3>{title}</h3>
            <div className={`tag ${setVoteClass(vote_average)
            }`}> {vote_average}</div>
       </div>

       <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p>
       </div>

    </div>
);

export default Movie;