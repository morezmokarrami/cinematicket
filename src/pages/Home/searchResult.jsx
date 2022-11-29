import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export const SearchResult = ({value, value2}) => {

    const movies = useSelector(state => state.sDetails);


    if (value2. length > 0) {
        value = movies.filter((i) => {
            return i.name.match(value2);
        })
    }else {
        value = null
    }


    return (
        <>
            <div>
                {
                    value?.map((item, index) => {
                        return (
                            <div key={index}>
                                <ul className={'list-group'}>
                                    <li className={'list-group-item'} style={{borderBottom: '#818181 solid 1px',padding: '15px'}}>
                                        <Link to={`/cinematicket/${item.id}`} style={{color:'#555'}}>
                                            <div className={'d-flex justify-content-around'}>
                                                <div className={''}><img src={item.poster?.desktop_url} alt=""
                                                          className={'w-25 h-75'}/></div>
                                                <div className={'me-5'}>{item.name}</div>
                                                <div className={'ms-5'}><span>{Math.ceil((item?.movie_rate) * 10) / 10}/5 &#10084;</span></div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}