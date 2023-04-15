import { useState , useEffect } from "react"
import HeaderSearch from "../HeaderSearch";
import constants from "../../utils/constants";
import GenreSelect from "../GenreSelect";
import SortControl from "../SortControl";
import MovieCard from "../MovieCard";
import MovieDetails from "../MovieDetails";
import axios from "axios";

export default function MovieListPage() {

    const [searchQuery , setSearchQuery] = useState('');
    const [sortCriterion , setSortCriterion] = useState('');
    const [activeGenre , setActiveGenre] = useState('');
    const [movieList , setMovieList] = useState('');
    const [selectedMovie , setSelectedMovie] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:4000/movies').then(data => setMovieList(data.data.data));
    }, [])

    return (
        <>
            {selectedMovie ? <MovieDetails movieDetailInfo={constants.MovieDetailINFO}/> : <HeaderSearch setQuery={setSearchQuery}/>}
            <div className='search'>
                <GenreSelect genres={constants.Genres} selectedGenre='ALL' onSelect={setActiveGenre}/>
                <SortControl currentSelectProps='TITLE' onSortBy={setSortCriterion}/>
            </div>
            <MovieCard movieInfo={movieList}/>
        </>
    )
}