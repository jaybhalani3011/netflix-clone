import axios from '../utilities/localaxios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../css/row.css';
import Loader from './Loader';

function Row({ title, isLargeRow, fetchURL }) {

    const [moviesBanner, setMoviesBanner] = useState([]);
    const [isLoading, setLoading] = useState(true)

    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchURL);

            setMoviesBanner(request.data.results);
            setLoading(false);
            return request;
        }
        fetchData();
    }, [fetchURL]);
    
    if (isLoading) {
        return <Loader/>
    }  

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">

                {
                    moviesBanner.map(movie => {
                        return <img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="row_pic" className={`rowposter ${isLargeRow && 'largeImage'}`} key={movie.id} />
                    })
                }

            </div>
        </div>
    );
}

export default Row;
