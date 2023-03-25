import SearchForm from "."
import { render , screen , fireEvent } from "@testing-library/react"

describe('SearchForm Component Related Test Cases :', () => {

    it('If initial value from props displayed inside the input value' , () => {
        const value = 'text';
        render(<SearchForm initialSearchQuery={value}/>)
        expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    })

    it('If onSubmit button triggers event with proper value' , () => {
        const mockSearch = jest.fn();
        const value = 'test';
        render(<SearchForm initialSearchQuery={value} onSearch={mockSearch}/>)
        fireEvent.click(screen.getByText(/Search/i));
        expect(mockSearch).toHaveBeenCalledWith(value);
    })

    it('If type some text in input enter should trigger props callback with proper value' , () => {
        const mockSearch = jest.fn();
        const value = 'test';
        render(<SearchForm initialSearchQuery={value} onSearch={mockSearch}/>)
        const input = screen.getByPlaceholderText('What do you want to watch?');
        fireEvent.change(input , { target : { value : 'enteredValue'}})
        fireEvent.keyDown(input , { key: "Enter", code: 13, charCode: 13 });
        expect(mockSearch).toHaveBeenCalledWith('enteredValue');
    })
})