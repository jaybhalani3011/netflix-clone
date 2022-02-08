import React from 'react';
import '../css/banner.css';
import axios from '../utilities/localaxios';
import userRequests from '../utilities/apirequest';
import { useState } from 'react';
import { useEffect } from 'react';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            const request = await axios.get(userRequests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        }

        fetchdata();
    }, []);

    console.log('movie', movie);
    return (
        <div className='banner' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`, backgroundPosition: 'top', backgroundSize: '100% 100vh', backgroundRepeat: 'no-repeat' }}>
            <div className="banner__content">
                <h1 className='banner__title'> {movie?.title || movie?.name || movie?.original_name } </h1>
                <div className="banner__buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <div className="banner__description">
                    <p>
                        {movie?.overview || 'No Overview....'}
                    </p>
                </div>
            </div>
            <div className="banner__fade"></div>
        </div>
    );
}

export default Banner;
