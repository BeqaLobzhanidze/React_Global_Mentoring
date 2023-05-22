import MovieDetails from "../components/MovieDetails";
import React from "react";
import axios from "axios";
import MovieListPage from "../components/MovieListPage";

const MovieDetailPage = ({ selectedMovie , movies}) => {
  
    return (
      <>
        <MovieDetails selectedMovie={selectedMovie}/>
        <MovieListPage movies={movies}/>
      </>
    );
};

export const getServerSideProps = async (context) => {
    const { movieID } = context.params;
  
    const selectedMovie = await axios.get(`http://localhost:4000/movies/${movieID}`).then(data => data.data);
  
    // if (!activeMovie || activeMovie === 'Not Found') {
    //   return { notFound: true };
    // }
  
    let { sortBy, genre, query } = context.query;
  
    sortBy = sortBy || 'title';
    genre = !genre || genre === 'all' ? '' : genre;
    query = query || '';
    const response = await axios.get(`http://localhost:4000/movies?search=${query.toLowerCase()}&searchBy=title&sortBy=${sortBy.toLowerCase()}&sortOrder='asc'&filter=${genre.toLowerCase()}`).then(data => data.data.data);
    const movies = response;
  
    return {
      props: { selectedMovie , movies },
    };
  };
  

export default MovieDetailPage;