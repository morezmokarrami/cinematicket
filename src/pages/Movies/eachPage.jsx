import {Col, Container, Row} from "reactstrap";
import {NavbarMaker} from "../../containers/navbarMaker";
import {Link, useParams} from "react-router-dom";
import getDetailsSlider from "../../queries/getDetailsSlider";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Accordion from "./Accordion";
import {Actors} from "./Actors";
import {Header} from "./Header";
import {BestSelling} from "../Home/BestSelling";
import '../../assets/styles/slider css/style.css'
import {Loading} from "../../containers/Loading";
import Pictures from "./Pictures";

const EachPage = () => {

    const {product_id} = useParams();

    useEffect(() => {
        getData();
        window.scrollTo(0,0)
        console.log({va: value, aa: details});
        const set = setTimeout(() => {
            setLoading(false)
        }, 1500)
        if (!loading){
            clearTimeout(set)
        }
    }, [product_id]);

    const [value, setValue] = useState([]);


    const getData = async () => {
        try {
            const res = await getDetailsSlider(product_id);
            setValue(res.data);
        } catch (e) {
            console.log(e);
        }
    }

    const details = useSelector(state => state.sDetails);
    const [loading, setLoading] = useState(true)


    return (
        !loading ? (<>
            <div className={'container-fluid bg-white'}>
                <Row>
                    <Col lg={12} className={'border-bottom'}>
                        <NavbarMaker/>
                    </Col>
                </Row>
            </div>
            <Header value={value}/>
            <Container style={{marginTop:'100px'}}>
                <Row>
                    <Col lg={12}>
                        <div dir={'rtl'} className={"mt-4"}>{value.movie?.description}</div>
                    </Col>
                </Row>
            </Container>
            <Container className={'mb-5'}>
                <Row>
                    <Col lg={12}>
                        <div>
                            <Actors value={value}/>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className={'mt-5'}>
                <Row>
                    <Col lg={4} className={'d-none d-xl-block'}>
                        <BestSelling/>
                    </Col>
                    <Col lg={8}>
                        <div>
                            <Accordion value={value}/>
                        </div>
                        <div>
                            <h5 style={{color: '#818181'}} dir={'rtl'} className={'mt-5'}>تصاویر فیلم {value.movie?.name}</h5>
                            <Pictures pics={value}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>) : <Loading/>

    )
}

export default EachPage;