import { render , screen , fireEvent } from "@testing-library/react";
import SortControl from ".";
import { useSearchParams } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    useSearchParams: jest.fn(),
}));

describe('SortControl Component related test cases' , function() {
    it('when we choose option we should call callback with proper parameter' , function() {
        const SortByMock = jest.fn();
        const mockSearchParams = new URLSearchParams('?query=react');
        useSearchParams.mockReturnValue([mockSearchParams, jest.fn()]);
        render(<SortControl currentSelectProps='TITLE' onSortBy={SortByMock}/>)
        fireEvent.change(screen.getByTestId('select' , {target : {value: 'TITLE'}}));
        expect(SortByMock).toHaveBeenCalledWith('title');
    })
})