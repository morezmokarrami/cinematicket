import React, {useEffect} from 'react'
import "antd/dist/antd.css";
import {Collapse} from 'antd';
import {PanelItem} from "./PanelItem";
import {NotFound} from "./NotFound";
import {Cinemas} from "./Cinemas";
import {NotFoundBox} from "./NotFoundBox";

const {Panel} = Collapse;

export default function Accordion({value}) {
    console.log(value);
    return (
        <div className={'text-start'}>
            <h4 className={'mt-5'}>روز و سینما</h4>
            {
                (value.cinemas?.length !== 0) ? <Cinemas value={value}/> : <NotFoundBox/>
            }
        </div>
    )
}