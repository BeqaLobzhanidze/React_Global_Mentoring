import GenreSelect from "."
import { render , screen , fireEvent } from "@testing-library/react"
import constants from "../../utils/constants"
import { useSearchParams } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
    useSearchParams: jest.fn(),
}));

describe('GenreSelect Component Related Test Cases :', () => {

    it('If component renders all genres passed in props' , () => {
        const mockSearchParams = new URLSearchParams('?query=react');
        useSearchParams.mockReturnValue([mockSearchParams, jest.fn()]);
        render(<GenreSelect genres={constants.Genres} />)
        const GenresNames = constants.Genres.map(item => item.name);
        const RenderedGenresNames = screen.getAllByRole('listitem').map(item => item.textContent);
        expect(RenderedGenresNames).toEqual(GenresNames)

    })

    it('If passed genre from props is highlited' , () => {
        const genreValue = 'ALL';
        const mockSearchParams = new URLSearchParams('?query=react');
        useSearchParams.mockReturnValue([mockSearchParams, jest.fn()]);
        const {container} = render(<GenreSelect genres={constants.Genres} selectedGenre={genreValue} />)
        const HighlitedGenre = container.getElementsByClassName('container__list__active')[0].textContent;
        expect(HighlitedGenre).toBe(genreValue)
    })

    it('If user click on genre if it`s calling props callback with proper genre' , () => {
        const genreValue = 'ALL';
        const targetValue = 'DOCUMENTARY';
        const onSelectMock = jest.fn();
        const mockSearchParams = new URLSearchParams('?query=react');
        useSearchParams.mockReturnValue([mockSearchParams, jest.fn()]);
        render(<GenreSelect genres={constants.Genres} selectedGenre={genreValue} onSelect={onSelectMock}/>)
        fireEvent.click(screen.getByText(/documentary/i))
        expect(onSelectMock).toHaveBeenCalledWith(targetValue)
    })
})