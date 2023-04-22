import { render , screen } from "@testing-library/react";
import MovieDetails from ".";
import constants from "../../utils/constants";

describe('MovieDetails Component related test cases' , function() {
    it('if MovieDetails Component is rendered with proper props' , function() {
        render(<MovieDetails movieDetailInfo={constants.MovieDetailINFO}/>)
        const image = screen.getByAltText('poster of image');
        const src = image.getAttribute('src');
        expect(constants.MovieDetailINFO.poster_path).toEqual(src);
        expect(screen.getByText(constants.MovieDetailINFO.title)).toBeInTheDocument();
        expect(screen.getByText(constants.MovieDetailINFO.release_date.substring(0,4))).toBeInTheDocument();
        expect(screen.getByText(constants.MovieDetailINFO.genres[2])).toBeInTheDocument();
    })
})