import React, { useEffect, useState } from 'react';
import './HomeScreen.scss';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import ajaxUrls from '../../ajaxUrls';
import Row from '../Row/Row';

export default function HomeScreen() {
    return (
        <div className="HomeScreen">
            <Header />
            <Banner />

            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={ajaxUrls.fetchNetflixOriginals}
                isLargeRow />
            <Row
                title="Trending Now"
                fetchUrl={ajaxUrls.fetchTrendingNow}
                isLargeRow />
            <Row
                title="Top Rated"
                fetchUrl={ajaxUrls.fetchTopRated}
                isLargeRow />
            <Row
                title="Action Movies"
                fetchUrl={ajaxUrls.fetchActionMovies}
                isLargeRow />
            <Row
                title="Comedy Movies"
                fetchUrl={ajaxUrls.fetchComedyMovies}
                isLargeRow />
            <Row
                title="Horror Movies"
                fetchUrl={ajaxUrls.fetchHorrorMovies}
                isLargeRow />
            <Row
                title="Romance Movies"
                fetchUrl={ajaxUrls.fetchRomanceMovies}
                isLargeRow />
            <Row
                title="Documentaries"
                fetchUrl={ajaxUrls.fetchDocumentaries}
                isLargeRow />
        </div>
    )
}
