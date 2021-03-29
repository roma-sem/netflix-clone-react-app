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
    console.log("[ Banner ]: featured movie = ", movie);
    console.log("[ Banner ]: ajaxUrls = ", ajaxUrls);

    useEffect(() => {
        const fetchMovies = async () => {
            const request = await axios.get(ajaxUrls.fetchNetflixOriginals)
                .then(result => {
                    // Set featured movie randomly:
                    setMovie( result.data.results[
                        Math.floor(Math.random() * result.data.results.length - 1)
                    ]);
                    // console.log("[ Banner ]: Fetch RESULT = ", result);
                })
                .catch(error => {
                    console.log("[ Banner ]: Fetch Error = ", error);
                    return null;
                });
            return request;
        }

        fetchMovies();
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
