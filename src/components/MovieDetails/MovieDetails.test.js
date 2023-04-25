import { render } from "@testing-library/react";
import MovieDetails from ".";
import { fetchData } from "./__mock__";
import axios from "axios";
import { useLocation} from 'react-router-dom';

jest.mock('axios');

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn(),
    Link: jest.fn().mockImplementation(({ children, to }) => (
        <a href={to}>{children}</a>
      )),
    useParams: () => ({
        movieID: '337167'
    })
}));

describe('MovieDetails Component related test cases' , function() {
    it('if MovieDetails Component is rendered with proper props' , async function () {
        const data = [{
            poster_path: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
            title: 'Avengers',
            release_date: "2018-02-07",
            genres: ['horror' , 'adventure' , 'comedy'],
            vote_average: 8.9,
            runtime: 106,
            overview: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,`
          }];
        axios.get.mockResolvedValue({ data });
        const response = await fetchData();
        const location = { search: '?q=search query' };
        useLocation.mockReturnValue(location);
        render(<MovieDetails />)
        expect(response.data).toEqual(data); 
    })
})