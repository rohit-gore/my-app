import {useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';

// 2e86ea9f
const API_URL = 'https://www.omdbapi.com?apikey=2e86ea9f';

const movie1 = {
    "Title": "The Grand Tour",
    "Year": "2016-2024",
    "imdbID": "tt5712554",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjkyOWIyZGYtYzU3ZS00NWM2LThjZGEtMDZjZjg2MTI2NzBhXkEyXkFqcGdeQXVyNjI4OTg2Njg@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('The Grand Tour');
    }, []); 
    // dependecy array '[]' is there if we only want to call useEffect at the start.
    // async -> asyncronus data -> means it takes some time to featch the data.

    return(
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                placeholder='Search for movies'
                value='The Grand Tour'
                onChange={() => {}}
                />

                <img
                src={SearchIcon}
                alt='search'
                onClick={() => {}}
                />
            </div>

            <div className='container'>
                <div className='movie'>
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
                    </div>

                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;