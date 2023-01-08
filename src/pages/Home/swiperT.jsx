import React, {useRef, useState, useEffect} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import {Grid, Pagination, Navigation} from "swiper";
import getSlider from "../../queries/getSlider";


// import Swiper core and required modules
import SwiperCore, {
    Autoplay
} from 'swiper/core';
import {Link} from "react-router-dom";

import {getMovies} from "../../redux/slices/sDetails";
import {useSelector} from "react-redux";
// install Swiper modules
SwiperCore.use([Autoplay]);



export default function SwiperT() {

    const theater = useSelector(state => state.theater)

    return (
        <>
            <Swiper
                slidesPerView={5}
                centeredSlides={true}
                spaceBetween={15}
                initialSlide={2}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >

                {
                    theater?.map((item, index) => {
                        return (
                                <SwiperSlide key={item.id}>
                                    <Link to={`/cinematicket/${item.id}`}>
                                        <div className={'text-center rounded-2'}>
                                            <img src={item.poster.desktop_url} className={'rounded-2'} alt={item.id}/>
                                        </div>
                                        <div className={'text-center'}>
                                            <p>{item.name}</p>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}

