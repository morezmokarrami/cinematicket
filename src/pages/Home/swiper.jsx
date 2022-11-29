import React, {useEffect, useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/navigation";
import '../../assets/styles/slider css/style.css'


// import required modules
import {Pagination, Navigation} from "swiper";
import getSlider from "../../queries/getSlider";
import {Link, useParams} from "react-router-dom";
import getDetailsSlider from "../../queries/getDetailsSlider";
import {getDetails} from "../../redux/slices/fDetails";
import {useDispatch, useSelector} from "react-redux";


import SwiperCore, {
    Autoplay
} from 'swiper/core';
import {SwiperDetails} from "./SwiperDetails";


// install Swiper modules
SwiperCore.use([Autoplay]);

export default function App() {

    const sliderDetails = useSelector(state => state.fDetails)

    return (
        <>
            <Swiper
                slidesPerView={1}
                pagination={{
                    type: "bullets",
                    clickable: true
                }}
                loop={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false
                }
                }
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {


                    sliderDetails.map((item, index) => {
                        return (
                                <SwiperSlide key={index.toString()} className={'slider-pic rounded-4'}
                                             style={{backgroundImage: `url(${item.background_image?.desktop_url})`}}>
                                        <SwiperDetails item={item}/>
                                </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}
