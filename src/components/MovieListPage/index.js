//import components 
'use client'
import GenreSelect from "../GenreSelect";
import SortControl from "../SortControl";
import MovieCard from "../MovieCard";
import HeaderSearch from "../HeaderSearch";

//import packages
import { useState  } from "react";
import { useRouter }  from "next/router";
import React from "react";

//import utills
import constants from "../../utils/constants";

export default function MovieListPage({movies}) {

    const {query} = useRouter();
    const [activeGenre, setActiveGenre] = useState(query.genre || 'ALL');
    return (
        <>
            <HeaderSearch />
            <div className='search'>
                <GenreSelect genres={constants.Genres} selectedGenre={activeGenre} onSelect={setActiveGenre} />
                <SortControl currentSelectProps='TITLE'/>
            </div>
            <MovieCard movieInfo={movies}/>
        </>
    )
}