import SortControl from '../components/SortControl';

export default {
  title: 'Components/SortControl',
  component: SortControl,
};
const Template = (args) => <SortControl {...args} />;

export const Default = Template.bind({});

Default.args = {
  currentSelectProps: 'TITLE',
};