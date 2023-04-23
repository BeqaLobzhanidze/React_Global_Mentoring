import { render , screen , fireEvent } from "@testing-library/react";
import MovieCard from ".";
import constants from "../../utils/constants";

describe('MovieTile Component related tests' , function() {
    it('MovieTile renders all movies which we passed as a props' , function() {
        render(<MovieCard movieInfo={constants.MovieINFO} />)
        constants.MovieINFO.map(item => (
            expect(screen.getByText(item.movieName)).toBeInTheDocument()
        ))
    })

    it('MovieTile receives callback which is called when we click movie' , function() {
        const captureClickEvent = jest.fn();
        render(<MovieCard movieInfo={constants.MovieINFO} setOpenDetails={captureClickEvent}/>)
        const firstMovie = screen.getByText(constants.MovieINFO[0].movieName);
        fireEvent.click(firstMovie);
        expect(captureClickEvent).toHaveBeenCalled();
    })
})