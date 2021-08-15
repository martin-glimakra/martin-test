export default function Button(props) {
    console.log('props', props.starwarsData.filmnr)
    return (
    <button onClick={() => alert('Film number ' + props.starwarsData.filmnr)}>{'Episode: ' + props.starwarsData.episode}</button>

    )
}
