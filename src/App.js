import {useEffect} from 'react';
// 2e86ea9f
const API_URL = "https://www.omdbapi.com?apikey=2e86ea9f";

const App = () => {

    const searchMovies = async (title) => {
        
    }

    useEffect(() => {

    }, []); 
    // dependecy array '[]' is there if we only want to call useEffect at the start.
    // async -> asyncronus data -> means it takes some time to featch the data.

    return(
        <h1>App</h1>
    );
}

export default App;