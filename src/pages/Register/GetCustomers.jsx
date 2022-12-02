import {Button, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {RegisterBox} from "./RegisterBox";
import {GCBox} from "./GCBox";

export const GetCustomers = () => {

    return (
        <>
            <div className={'container-fluid w-100 h-100'}>
                <Row>
                    <Col lg={12}>
                        <div className={'backG-register'} ></div>
                        <div>
                            <Link to={'/cinematicket'}><Button className={'position-absolute bg-white'} style={{top: '20%', right: '30%', color: '#818181'}}>بازگشت</Button></Link>
                        </div>
                        <GCBox/>
                    </Col>
                </Row>
            </div>
        </>
    )
}