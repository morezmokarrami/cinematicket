import {Collapse} from "antd";
import moment from "jalali-moment";
import {PanelItem} from "./PanelItem";
import React from "react";

const {Panel} = Collapse;

export const Cinemas = ({value}) => {

    return (
        <>
            {
                value.cinemas?.map((item, index) => {
                    return (
                        <div className={'w-100 p-2 mt-1'} key={index.toString()}>
                            <Collapse className={''}>
                                <Panel header={item.day}
                                       extra={moment(item.date, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}
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

