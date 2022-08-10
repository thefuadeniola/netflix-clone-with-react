import React, { useState } from 'react'
import instance from '../../axios'
import './Banner.css'

export default function Banner ({ fetchUrl }) {
    const [banner, setBanner] = useState([])

    React.useEffect(()=> {
        async function fetchMovie (){
            const request = await instance.get(fetchUrl)
            const randomNumber = Math.floor(Math.random() * request.data.results.length -1)
            setBanner(request.data.results[randomNumber])
            return request
        }
        fetchMovie();
    }, [fetchUrl])
    console.log(banner)

    function truncate (str, n) {
        return str?.length > n ? str.substr(0, n - 1 ) + '...' : str;
    }

    return (
        <header className='banner' style={{
            backgroundSize: 'cover',
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${banner?.backdrop_path}')`,
            backgroundPosition: 'center center'
        }}>
            <div className='banner__content'>
                <h1 className='banner__title'>{banner?.title || banner?.name || banner.original_name}</h1>
                <div className='banner__buttons'>
                    <button>Play</button> 
                    <button>My List</button>
                </div>
                <h2 className='movie__overview'>
                    {truncate(banner?.overview, 250)}
                </h2>
            </div>
            <div className='banner--fadeBottom'/>
        </header>
    )
}