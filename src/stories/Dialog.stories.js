import DeleteBlock from "../components/DeleteBlock";
import Dialog from "../components/Dialog";
import MovieForm from "../components/MovieForm";
import constants from "../utils/constants";

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    initialValue: { title: 'add movie' },
  },
};


export const Add = (args) => <Dialog {...args}><MovieForm /></Dialog>;

export const Edit = (args) => <Dialog {...args}><MovieForm movieInfo={constants.MovieDetailINFO} /></Dialog>;

export const Delete = (args) => <Dialog {...args}><DeleteBlock /></Dialog>;

Add.args = {
  title: 'add movie',
  isOpen: true
};

Edit.args = {
    title: 'add movie',
    isOpen: true
};

Delete.args = {
    title: 'add movie',
    isOpen: true
};