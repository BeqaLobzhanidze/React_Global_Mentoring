// import Components 
import Counter from './components/Counter';
import GenreSelect from './components/GenreSelect';
import SearchForm from './components/SearchForm';

// import styling
import './App.css';

// import utils
import { Genres } from './utils/constants';
import React from 'react';

function App() {
  const [query , setQuery] = React.useState('')
  return (
    <div className="App">
      <Counter initialValue={10}/>
      <SearchForm initialSearchQuery='' onSearch={data => setQuery(data)}/>
      <GenreSelect genres={Genres} selectedGenre='ALL' onSelect={genre => console.log(genre)}/>
      <h5 id="forTesting">{query}</h5>
    </div>
  );
}

export default App;
