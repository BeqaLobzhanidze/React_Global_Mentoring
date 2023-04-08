import { render , screen , fireEvent } from "@testing-library/react";
import MovieDetails from ".";

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

describe('MovieDetails Component related test cases' , function() {
    it('if MovieDetails Component is rendered with proper props' , function() {
        render(<MovieDetails movieDetailInfo={MovieDetailINFO}/>)
        const image = screen.getByAltText('movieTile');
        const src = image.getAttribute('src');
        expect(MovieDetailINFO.imgURL).toEqual(src);
        expect(screen.getByText(MovieDetailINFO.movieName)).toBeInTheDocument();
        expect(screen.getByText(MovieDetailINFO.releaseYear)).toBeInTheDocument();
        expect(screen.getByText(MovieDetailINFO.duration)).toBeInTheDocument();
        expect(screen.getByText(MovieDetailINFO.genres[2])).toBeInTheDocument();
    })
})