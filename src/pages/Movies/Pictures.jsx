// Import Swiper styles
import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {Navigation, Pagination} from "swiper";

export default function Pictures({pics}) {
    return (
        <>
            <Swiper
                slidesPerView={7}
                spaceBetween={85}
                pagination={{
                    clickable: true,
                    type: 'bullets'
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper mt-5 mb-5"
                loop={true}
            >

                {
                    pics.movie?.images ? (
                        pics.movie?.images?.map((item, index) => {
                            console.log(item);
                            return (
                                <SwiperSlide>
                                    <img className={'rounded-3'} src={item?.desktop_url} style={{width:'120px', height: '100px'}} alt=""/>
                                </SwiperSlide>
                            )
                        })
                    ) : (
                        <p>
                            salam
                        </p>

                    )

                }
            </Swiper>
        </>
    );
}