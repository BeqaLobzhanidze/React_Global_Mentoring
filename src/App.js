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
import MovieDetails from './components/MovieDetails';

const MovieINFO = {
  imgURL: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
  movieName: 'Avengers',
  releaseYear: 2010,
  genres: ['horror' , 'adventure' , 'comedy']
}

const MovieDetailINFO = {
  imgURL: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
  movieName: 'Avengers',
  releaseYear: 2010,
  genres: ['horror' , 'adventure' , 'comedy'],
  rating: 8.9,
  duration: '2h 34m',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
  tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,`
}

function App() {
  const [query , setQuery] = React.useState('')
  const [openDetails , setOpenDetails] = React.useState(false);
  return (
    <div className="App">
      <Counter initialValue={10}/>
      <SearchForm initialSearchQuery='' onSearch={data => setQuery(data)}/>
      <GenreSelect genres={Genres} selectedGenre='ALL' onSelect={genre => console.log(genre)}/>
      <h5 id="forTesting">{query}</h5>
      {openDetails && <MovieDetails movieDetailInfo={MovieDetailINFO}/>}
      <MovieTile movieInfo={MovieINFO} callback={() => setOpenDetails(prev => !prev)}/>
    </div>
  );
}

export default App;
