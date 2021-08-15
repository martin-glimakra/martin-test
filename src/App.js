import './App.css';
import Button from './components/Button';
import DisplayMovieTitle from './components/DisplayMovieTitle';
import data from './testdata/data.json'
import starwarsEpisodes from './testdata/starwarsEpisodes.json'

function App() {

  console.log('starwarsEpisodes', starwarsEpisodes)



  // console.log('data', data, typeof data)

  // let jsxArray = [
  //   <DisplayMovieTitle title={data.films[0]} />,
  //     <DisplayMovieTitle title={data.films[1]} />,
  //     <DisplayMovieTitle title={data.films[2]} />,
  //     <DisplayMovieTitle title={data.films[3]} />
  // ]

  let jsxArrayFromMap = data.films.map((filmLink) => <DisplayMovieTitle title={filmLink} />)
  
  return (
    <div className="App">
      <h1>Martins testapp</h1> 
      <Button starwarsData={starwarsEpisodes.arrayMedStarwarsfilmer[0]} />
      {/* <button onClick={() => alert('Film number: ' + starwarsEpisodes.arrayMedStarwarsfilmer[0].episode)}>{'Episode' + starwarsEpisodes.arrayMedStarwarsfilmer[0].filmnr}</button> */}

      {jsxArrayFromMap}
    </div> 
  );
}

export default App;
