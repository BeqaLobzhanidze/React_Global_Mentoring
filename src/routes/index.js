import { Routes , Route  } from "react-router-dom";
import MovieListPage from "../components/MovieListPage";


export default function PageRoutes() {
    return (
        <Routes>
          <Route path="/" element={<MovieListPage />} />
        </Routes>
      );
}