import './App.css';
import Counter from './components/Counter';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <Counter initialValue={5}/>
      <SearchForm initialSearchQuery='text' onSearch={(data) => console.log(data)}/>
    </div>
  );
}

export default App;
