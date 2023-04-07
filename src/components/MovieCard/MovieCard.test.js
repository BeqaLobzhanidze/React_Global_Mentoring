import { render , screen , fireEvent } from "@testing-library/react";
import MovieCard from ".";

const MovieINFO = [
    {
      imgURL: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
      movieName: 'Avengers',
      releaseYear: 2010,
      genres: ['horror' , 'adventure' , 'comedy']
    },
    {
      imgURL: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
      movieName: 'Avengers2',
      releaseYear: 2010,
      genres: ['horror' , 'adventure' , 'comedy']
    },
    {
      imgURL: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
      movieName: 'Avengers3',
      releaseYear: 2010,
      genres: ['horror' , 'adventure' , 'comedy']
    },
    {
      imgURL: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
      movieName: 'Avengers4',
      releaseYear: 2010,
      genres: ['horror' , 'adventure' , 'comedy']
    },
    {
      imgURL: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
      movieName: 'Avengers5',
      releaseYear: 2010,
      genres: ['horror' , 'adventure' , 'comedy']
    },
    {
      imgURL: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
      movieName: 'Avengers6',
      releaseYear: 2010,
      genres: ['horror' , 'adventure' , 'comedy']
    },
    {
      imgURL: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
      movieName: 'Avengers7',
      releaseYear: 2010,
      genres: ['horror' , 'adventure' , 'comedy']
    }
  ]

describe('MovieTile Component related tests' , function() {
    it('MovieTile renders all movies which we passed as a props' , function() {
        render(<MovieCard movieInfo={MovieINFO} />)
        MovieINFO.map(item => (
            expect(screen.getByText(item.movieName)).toBeInTheDocument()
        ))
    })

    it('MovieTile receives callback which is called when we click movie' , function() {
        const captureClickEvent = jest.fn();
        render(<MovieCard movieInfo={MovieINFO} setOpenDetails={captureClickEvent}/>)
        const firstMovie = screen.getByText(MovieINFO[0].movieName);
        fireEvent.click(firstMovie);
        expect(captureClickEvent).toHaveBeenCalled();
        
    })
})