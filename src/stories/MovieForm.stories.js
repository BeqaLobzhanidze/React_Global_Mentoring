import MovieForm from "../components/MovieForm";
import constants from "../utils/constants";

export default {
  title: 'Components/MovieForm',
  component: MovieForm,
};


export const Default = () => <MovieForm />;

export const FilledForm = (args) => <MovieForm {...args}/>;

FilledForm.args = {
    movieInfo : constants.MovieDetailINFO
};