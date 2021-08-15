import './App.css';
import DisplayMovieTitle from './components/DisplayMovieTitle';
import data from './testdata/data.json'

function App() {


  console.log('data', data, typeof data)
  return (
    <div className="App">
      <h1>Martins testapp</h1>
      <DisplayMovieTitle title={data.films[0]} />
      {/* <p>{data.films[0]}</p>
      <p>{data.films[1]}</p>
      <p>{data.films[2]}</p>
      <p>{data.films[3]}</p> */}
    </div>
  );
}

export default App;
