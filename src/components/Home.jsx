import React from 'react';
import '../css/homescreen.css';
import userRequests from '../utilities/apirequest';
import Banner from './Banner';
import NavforHome from './NavforHome';
import Row from './Row';

function Home() {
    return (
        <div className='homescreen'>
            <NavforHome/>
            <Banner/> 
            <Row title="Netflix Originals" isLargeRow fetchURL={userRequests.fetchNetflixOriginals}/>
            <Row title="Trending Show" fetchURL={userRequests.fetchTrending}/>
            <Row title="Top Rated" fetchURL={userRequests.fetchTopRated}/>
            <Row title="Action Movies" fetchURL={userRequests.fetchActionMovies}/>
            <Row title="Horror Movies" fetchURL={userRequests.fetchHorrorMovies}/>
            <Row title="Comedy Movies" fetchURL={userRequests.fetchComedyMovies}/>
            <Row title="Romantic Movies" fetchURL={userRequests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchURL={userRequests.fetchDocumentaries}/>
        </div>
    );
}

export default Home;
