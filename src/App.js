import './App.css';
import data from './testdata/data.json'

function App() {


  console.log('data', data, typeof data)
  return (
    <div className="App">
      <p>{data.films[0]}</p>
      <p>{data.films[1]}</p>
      <p>{data.films[2]}</p>
      <p>{data.films[3]}</p>
    </div>
  );
}

export default App;
