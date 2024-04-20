import {useEffect} from 'react';
// 2e86ea9f
const API_URL = 'https://www.omdbapi.com?apikey=2e86ea9f';

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
        <h1>App</h1>
    );
}

export default App;