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

    let temp = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

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
                        {movie?.overview && movie?.overview.slice(0, 300)  ||'No Overview....'}
                    </p>
                </div>
            </div>
            <div className="banner__fade"></div>
        </div>
    );
}

export default Banner;
