// import { Routes , Route  } from "react-router-dom";
// import MovieListPage from "../components/MovieListPage";
// import HeaderSearch from "../components/HeaderSearch";
// import MovieDetails from "../components/MovieDetails";
// import { useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import Dialog from "../components/Dialog";
// import MovieForm from "../components/MovieForm";


// export default function PageRoutes() {

//     const [searchParams, setSearchParams] = useSearchParams();
//     const [searchQuery , setSearchQuery] = useState(searchParams.get("query") || "");

//     return (
//         <Routes>
//           <Route path="/" element={<MovieListPage searchQuery={searchQuery}/>}>
//             <Route path="/" element={<HeaderSearch setQuery={setSearchQuery}/>}>
//               <Route path="/new" element={<Dialog title='add movie' isOpen='true'><MovieForm /></Dialog>}/>
//             </Route>
//             <Route path="/:movieID" element={<MovieDetails />}>
//               <Route path="edit" element={<Dialog title='edit movie' isOpen='true'><MovieForm /></Dialog>}/>
//             </Route>
//           </Route>
//         </Routes>
//       );
// }