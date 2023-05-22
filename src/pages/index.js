import React from "react";
import MovieListPage from '../components/MovieListPage';
import HeaderSearch from "../components/HeaderSearch";
import axios from "axios";

export default function Page({movies}) {
    return <>
              <HeaderSearch />
              <MovieListPage movies={movies}/>
           </>;
  }


  export const getServerSideProps = async (context) => {
    let { sortBy, genre, query } = context.query;
  
    sortBy = sortBy || 'title';
    genre = !genre || genre === 'all' ? '' : genre;
    query = query || '';
    const response = await axios.get(`http://localhost:4000/movies?search=${query.toLowerCase()}&searchBy=title&sortBy=${sortBy.toLowerCase()}&sortOrder='asc'&filter=${genre.toLowerCase()}`).then(data => data.data.data);
    const movies = response;
    return {
      props: { movies },
    };
  };