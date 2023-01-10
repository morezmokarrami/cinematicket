import React, {useState} from "react";
import {Accordion, Button, Collapse} from "reactstrap";
import {StarOutlined} from "@ant-design/icons";


export const PanelItem = ({item}) => {

    return (
        <>
            {item.cinemas?.map((item, index) => {
                return (
                    <div className={'w-100'} key={index.toString()}>
                        <div className={'mt-5'}>
                            <div className={'d-flex justify-content-end'}>
                                <div dir={'rtl'} className={'text-start ms-4'}>
                                    <h6>{item.cinema?.name_fa}</h6>
                                    <p className={'text-start'}>{item.cinema?.address}</p>
                                    <div className={'rate rounded-3'} style={Math.ceil(((item.cinema?.rate) * 10) / 10) >= 4 ? {backgroundColor: "green"} : {backgroundColor: "gray"}}>
                                        <div className={'text-center mt-1'}>
                                            <div className={'d-flex justify-content-around'}>
                                                <div><StarOutlined size={20}/></div>
                                                <div>امتیاز
                                                    {Math.ceil(((item.cinema?.rate) * 10) / 10)}/5
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'ms-3 me-4'}>
                                    <img className={'rounded-3'} style={{width: '170px', height: '130px'}} src={item.cinema?.thumbnail?.desktop_url} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}