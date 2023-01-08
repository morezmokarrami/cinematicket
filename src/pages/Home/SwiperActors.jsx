import React from "react";

export const SwiperActors = ({actors}) => {
    return(
        <>
            {
                actors?.actors?.map((item, index) => {
                    if (index < 3) {
                        return (
                            <div key={index} className={'px-3 py-1 box_fm slider-text rounded-4'}>
                                <span className={'ms-1'}>{item?.full_name}</span>
                                <img className={'profile-pic'}
                                     src={item?.profile_photo?.desktop_url} alt=""/>
                            </div>
                        )
                    }

                })
            }
        </>
    )

}