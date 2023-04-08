import MovieDetails from '../components/MovieDetails';

import constants from '../utils/constants';

export default {
  title: 'Components/MovieDetails',
  component: MovieDetails,
};
const Template = (args) => <MovieDetails {...args} />;

export const Default = Template.bind({});

Default.args = {
  movieDetailInfo: constants.MovieDetailINFO,
};