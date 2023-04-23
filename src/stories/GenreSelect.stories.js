import { useState } from 'react';
import GenreSelect from '../components/GenreSelect';

import constants from '../utils/constants';

export default {
  title: 'Components/GenreSelect',
  component: GenreSelect,
};

const Template = (args) => {
  const [currentGenre, setCurrentGenre] = useState(args.defaultGenre);

  return <GenreSelect {...args} currentGenre={currentGenre} onSelect={genre => console.log(genre)}/>;
};

export const Default = Template.bind({});

Default.args = {
  genres: constants.Genres,
  defaultGenre: 'Horror',
};