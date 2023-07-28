import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import search from './search.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=9cd75262'; 


// eslint-disable-next-line no-unused-vars



  
// const movie1 = {
//         "Title": "Captain America: The Winter Soldier",
//         "Year": "2014",
//         "imdbID": "tt1843866",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SX300.jpg"
//       }


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
        setMovies(data.Search);
    } 

    useEffect(() => {
        searchMovies('Captain America');
    },[]);

    return(
        <div className='app'>
            <h1>MovieLand</h1>
            <div className="search">
                <input type="text"
                       placeholder='Search for movies'
                       value={searchTerm}
                       onChange={(e) =>setSearchTerm(e.target.value)}

                 />
                 <img 
                    src={search} 
                    alt="search" 
                    onClick={() =>searchMovies(searchTerm)}
                 />
            </div>

            
            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ):(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
        
            <h2 id='name'>Created by Suraj Jyoti Changkakoti</h2>
        </div>
    );
}

export default App;


 