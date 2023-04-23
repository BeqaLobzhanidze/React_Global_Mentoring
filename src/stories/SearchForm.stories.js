import SearchForm from "../components/SearchForm";

export default {
  title: 'Components/SearchForm',
  component: SearchForm,
  initialSearchQuery: { control: 'text' },
};

export const Default = (args) => <SearchForm {...args} onSearch={data => console.log(data)}/>;

export const InitialSearch = (args) => <SearchForm {...args} onSearch={data => console.log(data)}/>;

InitialSearch.args = {
  initialSearchQuery: 'Initial Search Query',
};