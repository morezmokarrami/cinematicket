import React from "react";

export const PanelItem = ({item}) => {

    return(
        <>
            {item.cinemas?.map((item, index) => {
                return (
                    <div className={''} key={index.toString()}>
                        <div className={'mt-5'}>
                            <p>{item.cinema?.name_fa}</p>
                            <div><img src={item.cinema?.thumbnail?.desktop_url} alt=""/>
                            </div>
                            <p>{item.cinema?.address}</p>
                            <p>امتیاز{Math.ceil(((item.cinema?.rate) * 10) / 10)}/5</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}