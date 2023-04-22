import { Routes , Route  } from "react-router-dom";
import MovieListPage from "../components/MovieListPage";
import HeaderSearch from "../components/HeaderSearch";
import MovieDetails from "../components/MovieDetails";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function PageRoutes() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery , setSearchQuery] = useState(searchParams.get("query") || "");

    return (
        <Routes>
          <Route path="/" element={<MovieListPage searchQuery={searchQuery}/>}>
            <Route path="/" element={<HeaderSearch setQuery={setSearchQuery}/>} />
            <Route path=":movieID" element={<MovieDetails />} />
          </Route>
        </Routes>
      );
}