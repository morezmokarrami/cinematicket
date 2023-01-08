import React, {useState} from "react";
import {Sans} from "./Sans";
import {Accordion, Button, Collapse} from "reactstrap";


export const PanelItem = ({item}) => {


    const [toggle, setToggle] = useState(false);

    const onClick = () => {
        setToggle(!toggle);
        console.log(toggle);
    };

    return (
        <>
            {item.cinemas?.map((item, index) => {


                return (
                    <div className={'d-flex justify-content-around'} key={index.toString()}>
                        <div className={'mt-5'}>
                            <Button onClick={onClick} className={'bg-body'}
                                    style={{marginBottom: '1rem', color: '#ff3543', border: 0}}>
                                سانس ها
                            </Button>
                        </div>
                        <div className={'mt-5'}>
                            <p>{item.cinema?.name_fa}</p>
                            <div><img src={item.cinema?.thumbnail?.desktop_url} alt=""/>
                            </div>
                            <p>{item.cinema?.address}</p>
                            <p>امتیاز{Math.ceil(((item.cinema?.rate) * 10) / 10)}/5</p>
                            <Sans cinemas={item} id={item.cinema?.id} toggle={toggle}/>
                        </div>
                    </div>
                )
            })}
        </>
    )
}