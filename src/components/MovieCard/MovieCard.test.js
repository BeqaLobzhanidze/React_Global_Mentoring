import { render , screen , fireEvent } from "@testing-library/react";
import MovieCard from ".";
import constants from "../../utils/constants";
import { useLocation} from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn(),
    Link: jest.fn().mockImplementation(({ children, to }) => (
        <a href={to}>{children}</a>
      )),
}));

describe('MovieTile Component related tests' , function() {
    it('MovieTile renders all movies which we passed as a props' , function() {
        const location = { search: '?q=search query' };
        useLocation.mockReturnValue(location)
        render(<MovieCard movieInfo={constants.MovieINFO} />)
        constants.MovieINFO.map(item => (
            expect(screen.getAllByText(item.release_date.substring(0, 4))[0]).toBeInTheDocument()
        ))
    })
})