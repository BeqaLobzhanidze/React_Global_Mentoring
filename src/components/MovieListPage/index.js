//import components 
import GenreSelect from "../GenreSelect";
import SortControl from "../SortControl";
import MovieCard from "../MovieCard";
import MovieDetails from "../MovieDetails";
import HeaderSearch from "../HeaderSearch";

//import packages
import { useState , useEffect } from "react";
import { useSearchParams , Outlet } from "react-router-dom";
import axios from "axios";

//import utills
import constants from "../../utils/constants";

export default function MovieListPage({searchQuery}) {

    const [searchParams, setSearchParams] = useSearchParams();
    const [sortCriterion , setSortCriterion] = useState(searchParams.get("sortBy") || "");
    const [activeGenre , setActiveGenre] = useState(searchParams.get("genre") || "");
    const [movieList , setMovieList] = useState('');

    useEffect(() => {
        const genre = activeGenre === "ALL" ? "" : activeGenre;
        axios.get(`http://localhost:4000/movies?search=${searchQuery}&searchBy=title&sortBy=${sortCriterion}&sortOrder='asc'&filter=${genre}`).then(data => setMovieList(data.data.data));
    }, [searchQuery , sortCriterion , activeGenre])

    return (
        <>
            <Outlet />
            <div className='search'>
                <GenreSelect genres={constants.Genres} selectedGenre='ALL' onSelect={setActiveGenre} />
                <SortControl currentSelectProps='TITLE' onSortBy={setSortCriterion}/>
            </div>
            <MovieCard movieInfo={movieList}/>
        </>
    )
}