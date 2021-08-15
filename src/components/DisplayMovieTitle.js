export default function DisplayMovieTitle(props) {
    return (
        <p>
           <a href={props.title}> {props.title} </a> 
        </p>
    )
}
