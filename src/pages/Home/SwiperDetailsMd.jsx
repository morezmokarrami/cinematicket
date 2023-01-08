import React from "react";
import {Link} from "react-router-dom";
import {SwiperActors} from "./SwiperActors";
import {Button, Col} from "reactstrap";

export const SwiperDetailsMd = ({item}) => {
    console.log(item);
    return (
        <>
            <div className={'shadow position-relative rounded-4'}>
                <ul className={'position-absolute'} style={{bottom: '18%', right: '8%'}} dir={'rtl'}>
                    <li style={{backgroundColor: 'transparent'}} className={'text-start list-group-item'}>
                        <h4 style={{color:'#eee'}}>{item.name}</h4>
                    </li>
                    <li style={{backgroundColor: 'transparent'}} className={'text-start list-group-item'}>
                        <p style={{color:'#eee'}}>کارگردان : {item.movie?.directors[0]?.full_name}</p>
                    </li>
                    <li style={{backgroundColor: 'transparent'}} className={'list-group-item'}>
                        <div className={'px-1 py-1 box_fm slider-text rounded-4 me-2 w-50'}>
                            <span>&#10084; {Math.ceil((item.movie?.movie_rate) * 10) / 10}/5</span>
                        </div>
                    </li>
                    <li style={{backgroundColor: 'transparent'}} className={'list-group-item'} dir={'rtl'}>
                        <p style={{color:'#eee'}}>{item.movie?.description.substring(0, 30)}...</p>
                    </li>
                </ul>

                    <div className={'position-absolute text-start'} style={{bottom: '12%', width: '100%'}}>
                        <Link to={`/cinematicket/${item?.movie?.id}`}>
                            <div className={'rounded-3 text-center'}>
                                <div className={'text-center rounded-2 py-2 mx-4'} style={{color: '#eee', fontSize: '16px', border:'1px solid #eee'}}> خرید بلیت</div>
                            </div>
                        </Link>
                    </div>
            </div>
        </>
    )
}