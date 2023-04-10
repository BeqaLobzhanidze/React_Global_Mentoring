import Dialog from ".";
import MovieForm from "../MovieForm";
import { render , screen , fireEvent} from "@testing-library/react";

describe('Dialog Component Related test cases' , function() {

    it('if we are rendering our title in Dialog' , function() {
        document.body.innerHTML = '<div id="modal" />';
        render(<Dialog title='ADD MOVIE' isOpen='true'><MovieForm /></Dialog>)
        expect(screen.getByText('ADD MOVIE')).toBeInTheDocument()
    })

    it('if we are our callback prop in Modal' , function() {
        document.body.innerHTML = '<div id="modal" />';
        const mockCloseModal = jest.fn();
        render(<Dialog title='ADD MOVIE' isOpen='true' onClose={mockCloseModal}><MovieForm /></Dialog>)
        const closeBtn = screen.getByTestId('closeModal');
        fireEvent.click(closeBtn);
        expect(mockCloseModal).toHaveBeenCalled()
    })
})