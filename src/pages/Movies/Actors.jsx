import React from "react";

export const Actors = ({value}) => {

    return(
            value.movie?.actors.map((item, index) => {
                return (
                    <div key={index} className={'mt-5 float-start me-2'}>
                        <div className={'px-3 py-1 box_fm slider-text rounded-4 bg-light'}>
                            <span className={'ms-1 text-dark'}>{item.full_name}</span>
                            <img className={'profile-pic'}
                                 src={item.profile_photo?.desktop_url} alt=""/>
                        </div>
                    </div>

                )
            })
    )
}