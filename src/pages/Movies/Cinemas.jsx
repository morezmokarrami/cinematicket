import {Collapse} from "antd";
import {PanelItem} from "./PanelItem";
import React from "react";
const {Panel} = Collapse;

export const Cinemas = ({value}) => {

    console.log(value);
    return (
        <>
            {
                value.cinemas?.map((item, index) => {
                    return (
                        <div className={'w-100 p-2 mt-1'} key={index.toString()}>
                            <Collapse className={''}>
                                <Panel header={item.day}
                                       extra={item.date}
                                       key={index}>
                                    <div className={''}>
                                        <PanelItem item={item}/>
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                    )
                })}
        </>
    )
}

