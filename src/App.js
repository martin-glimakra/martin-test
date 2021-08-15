import './App.css';
import DisplayMovieTitle from './components/DisplayMovieTitle';
import data from './testdata/data.json'

function App() {


  console.log('data', data, typeof data)

  // let jsxArray = [
  //   <DisplayMovieTitle title={data.films[0]} />,
  //     <DisplayMovieTitle title={data.films[1]} />,
  //     <DisplayMovieTitle title={data.films[2]} />,
  //     <DisplayMovieTitle title={data.films[3]} />
  // ]

  let jsxArrayFromMap = data.films.map((filmLink) => {
    // console.log('x', x)
    return <DisplayMovieTitle title={filmLink} />
  })
  return (
    <div className="App">
      <h1>Martins testapp</h1>
      {jsxArrayFromMap}
    </div>
  );
}

export default App;
