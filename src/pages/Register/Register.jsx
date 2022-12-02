import {Container, Col, Row, Button} from "reactstrap";
import {RegisterBox} from "./RegisterBox";
import getSlider from "../../queries/getSlider";
import {getData} from "../../redux/slices/bestSelling";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const Register = () => {

    useEffect(() => {
        getCustomers();
        console.log(value);
    }, [])

    const [value, setValue] = useState([])

    const getCustomers = async () => {
        try {
            const res = await getSlider({
                url: 'http://localhost:8080/customer',
                method: 'GET'
            });
            setValue(res.data)
        } catch (e) {
            console.log(e);
        }
    }


    return(
        <>
            <div className={'container-fluid w-100 h-100'}>
                <Row>
                    <Col lg={12}>
                        <div className={'backG-register'} ></div>
                        <div>
                            <Link to={'/cinematicket'}><Button className={'position-absolute bg-white'} style={{top: '20%', right: '30%', color: '#818181'}}>بازگشت</Button></Link>
                        </div>
                        <RegisterBox value={value}/>
                    </Col>
                </Row>
            </div>
        </>
    )
}