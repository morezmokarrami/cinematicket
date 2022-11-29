import {Col, Container} from "reactstrap";
import SwiperT from "./swiperT";

export const Theaters = () => {

    return(
        <>
            <div>
                <h4 className={'text-start mb-5'}><span style={{color: '#818181'}}>تئاتر</span></h4>
                <SwiperT/>
            </div>
        </>
    )
}