// import Components 
import Counter from './components/Counter';
import GenreSelect from './components/GenreSelect';
import SearchForm from './components/SearchForm';

// import styling
import './App.css';

// import utils
import { Genres } from './utils/constants';
import React from 'react';
import MovieTile from './components/MovieTile';

const MovieINFO = {
  imgURL: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
  movieName: 'Avengers',
  releaseYear: 2010,
  genres: ['horror' , 'adventure' , 'comedy']
}

function App() {
  const [query , setQuery] = React.useState('')
  return (
    <div className="App">
      <Counter initialValue={10}/>
      <SearchForm initialSearchQuery='' onSearch={data => setQuery(data)}/>
      <GenreSelect genres={Genres} selectedGenre='ALL' onSelect={genre => console.log(genre)}/>
      <h5 id="forTesting">{query}</h5>
      <MovieTile movieInfo={MovieINFO} callback={() => console.log('capture movie click')}/>
    </div>
  );
}

export default App;
