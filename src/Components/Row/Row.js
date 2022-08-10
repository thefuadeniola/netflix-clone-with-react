import React from "react";
import instance from "../../axios";
import './Row.css'
import YouTube from "react-youtube";
import Details from "../details/MovieDetails";

const base_url = "https://image.tmdb.org/t/p/original/"

export default function Row ({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = React.useState([])

    React.useEffect(()=>{
        async function fetchData () {
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request
        }
        fetchData();
    }, [fetchUrl])

    const [details, setDetails] = React.useState ({})

    function handleClick(movie){
        if (Object.entries(details).length !== 0) {
            setDetails({});
        } else {
            setDetails(movie)
        }
    }

    const moviePosters = movies.map((movie) => {
        return (
                <img 
                onClick={() => handleClick(movie)}
                className={`${isLargeRow ? 'row__poster-large' : 'row__poster'}`} 
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name} 
                key={movie.id} />
                                
        ) 
    })

    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {moviePosters}
            </div>
            {Object.entries(details).length !== 0 && <Details details={details}/>}
        </div>
    )
}
