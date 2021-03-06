import React, { useEffect, useState } from 'react';
import './Banner.scss';
import BannerTitle from './BannerTitle/BannerTitle';
import BannerButtons from './BannerButtons/BannerButtons';
import BannerDescription from './BannerDescription/BannerDescription';
import FadeBottom from './FadeBottom/FadeBottom';
import axios from '../../axios';
import ajaxUrls from '../../ajaxUrls';


function Banner() {
    const [movie, setMovie] = useState([]);
    // console.log("[ Banner ]: featured movie = ", movie);
    // console.log("[ Banner ]: ajaxUrls = ", ajaxUrls);

    useEffect(() => {
        async function fetchMovie() {
            try {
                let response = await axios.get(ajaxUrls.fetchNetflixOriginals);
                // console.log("[ Banner ]: fetchMovie Response = ", response.data);

                // Set random Banner movie:
                setMovie( response.data.results[
                    Math.floor(Math.random() * response.data.results.length - 1)
                ])
            } catch (err) {
                console.log("[ Banner ]: fetchMovie Error = ", err);
            }
        }

        fetchMovie();
    }, []);


    return (
        <div
            className="Banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
            }}>

            <div className="banner-contents">
                <BannerTitle title={movie?.name} />
                <BannerButtons />
                <BannerDescription description={movie?.overview} />

            </div>

            <FadeBottom />
        </div>
    )
}

export default Banner;
