// import Components 
import Counter from './components/Counter';
import GenreSelect from './components/GenreSelect';

// import styling
import './App.css';

// import utils
import React from 'react';
import MovieDetails from './components/MovieDetails';
import SortControl from './components/SortControl';
import HeaderSearch from './components/HeaderSearch';
import MovieCard from './components/MovieCard';
import constants from './utils/constants';


function App() {
  const [query , setQuery] = React.useState('')
  const [openDetails , setOpenDetails] = React.useState(false);
  return (
    <div className="App">
      <Counter initialValue={10}/>
      <HeaderSearch setQuery={setQuery}/>
      <div className='search'>
        <GenreSelect genres={constants.Genres} selectedGenre='ALL' onSelect={genre => console.log(genre)}/>
        <SortControl currentSelectProps='TITLE' onSortBy={(data) => console.log(data)}/>
      </div>
      <h5 id="forTesting">{query}</h5>
      {openDetails && <MovieDetails movieDetailInfo={constants.MovieDetailINFO}/>}
      <MovieCard movieInfo={constants.MovieINFO} setOpenDetails={setOpenDetails}/>
    </div>
  );
}

export default App;
