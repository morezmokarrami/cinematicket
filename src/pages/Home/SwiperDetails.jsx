import React from "react";
import {Link} from "react-router-dom";
import {SwiperActors} from "./SwiperActors";

export const SwiperDetails = ({item}) => {
    return (
        <>
            <div className={'shadow position-relative rounded-4'}>
                <div className={'slider-pic3 rounded-4'}>
                    <img src={item.right_image?.desktop_url} className={'rounded-3'}
                         style={{width: '300px', height: '360px'}} alt=""/>
                </div>
                <div className={'slider-pic2'}><img src={item.left_image?.desktop_url} alt=""/>
                </div>
                <div className={'slider-content'}>
                    <h4 className={'slider-text text-start'}>{item.name}</h4>
                    <p className={'slider-text text-start mt-4'}>کارگردان
                        : {item.movie?.directors[0]?.full_name}</p>
                    <div className={'d-flex justify-content-end mt-4'}>
                        <div className={'px-3 py-1 box_fm slider-text rounded-4'}>
                            <span>{item.movie?.genres[0].name}</span></div>
                        <div className={'px-3 py-1 box_fm slider-text rounded-4 me-2'}>
                            <span> دقیقه {item.movie?.duration} &#9202;</span></div>
                        <div className={'px-3 py-1 box_fm slider-text rounded-4 me-2'}>
                            <span>{Math.ceil((item.movie?.movie_rate) * 10) / 10}/5 &#10084;</span>
                        </div>
                    </div>
                    <div className={'mt-4 slider-description text-start'} dir={'rtl'}>
                        <span className={'slider-text'}>{item.movie?.description}</span>
                    </div>
                    <div className={'mt-4 d-flex justify-content-end'}>
                        <SwiperActors actors={item.movie}/>
                    </div>
                    <div className={'mt-4 d-flex justify-content-end'}>
                        <Link to={`/cinematicket/${item.movie?.id}`}>
                            <div className={'buy-box px-2 py-2 rounded-3'}>
                                <span style={{color: 'black', fontSize: '16px'}}> خرید بلیت</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}