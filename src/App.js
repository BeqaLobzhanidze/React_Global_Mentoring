// import Components 
import Counter from './components/Counter';
import GenreSelect from './components/GenreSelect';
import SearchForm from './components/SearchForm';

// import styling
import './App.css';

// import utils
import { Genres } from './utils/constants';

function App() {
  return (
    <div className="App">
      <Counter initialValue={10}/>
      <SearchForm initialSearchQuery='text' onSearch={(data) => console.log(data)}/>
      <GenreSelect genres={Genres} selectedGenre='ALL' onSelect={genre => console.log(genre)}/>
    </div>
  );
}

export default App;
