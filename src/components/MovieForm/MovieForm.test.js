import MovieForm from "../MovieForm";
import { render , screen , fireEvent } from "@testing-library/react";
import constants from "../../utils/constants";

describe('MovieForm Component Related test cases' , function() {

    it('if we are rendering our MovieForm' , function() {
        render(<MovieForm />);
        expect(screen.getByTestId('form')).toBeInTheDocument()
    })

    it('if we are rendering prefilled movieform while we are passing prop movieInfo' , function() {
        render(<MovieForm movieInfo={constants.MovieDetailINFO}/>);
        expect(screen.getByDisplayValue(constants.MovieDetailINFO.imgURL)).toBeInTheDocument()
        expect(screen.getByDisplayValue(constants.MovieDetailINFO.duration)).toBeInTheDocument()
        expect(screen.getByDisplayValue(constants.MovieDetailINFO.rating)).toBeInTheDocument()
        expect(screen.getByDisplayValue(constants.MovieDetailINFO.movieName)).toBeInTheDocument()
    })

    it('if we are calling callback props' , function() {
        const mockCallback = jest.fn();
        const mockOnClose = jest.fn();
        render(<MovieForm movieInfo={constants.MovieDetailINFO} callback={mockCallback} onClose={mockOnClose}/>);
        const submitBtn = screen.getByText('SUBMIT');
        fireEvent.click(submitBtn);
        expect(mockCallback).toHaveBeenCalled();
    })
})