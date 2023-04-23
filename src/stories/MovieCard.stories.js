import MovieCard from '../components/MovieCard';

import constants from '../utils/constants';

export default {
  title: 'Components/MovieCard',
  component: MovieCard,
};
const Template = (args) => <MovieCard {...args} />;

export const Default = Template.bind({});

Default.args = {
    movieInfo: constants.MovieINFO,
};