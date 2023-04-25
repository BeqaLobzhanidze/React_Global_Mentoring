import defaultPoster from "../../assets/poster.jpg";

export default function Poster({ src }) {
    function handleError(event) {
        event.target.src = defaultPoster;
    }
    return (
        <img src = {src ? src : defaultPoster } alt="poster of image" onError={handleError}/>
    )
}