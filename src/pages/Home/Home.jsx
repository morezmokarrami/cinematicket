import {Button, Container, Col, Row} from "reactstrap";
import 'antd/dist/antd.css';
import Swiper from "./swiper";
import {NavbarMaker} from "../../containers/navbarMaker";
import {NavbarMaker2} from "../../containers/navbarMaker2";
import Movies from "./movies";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import getSlider from "../../queries/getSlider";
import {getMovies} from "../../redux/slices/sDetails";
import {getDetails} from "../../redux/slices/fDetails";
import {Loading} from "../../containers/Loading";
import {getData} from "../../redux/slices/bestSelling";
import {BestSelling} from "./BestSelling";
import '../../assets/styles/slider css/style.css';
import {getTheater} from "../../redux/slices/theaters";
import {Theaters} from "./Theaters";
import {GetComedyTheater} from "../../redux/slices/comedyTheaters";
import {ComedyTheater} from "./ComedyTheater";




export const Home = () => {


    const {bool, names} = useSelector(state => state.phone)

    useEffect(() => {
        getFirstMovies();
        getSliderDe();
        getMostSelling();
        getTheaters();
        getComedyTheaters();
        const set = setTimeout(() => {
            setLoading(false);
        },1500)
        if (!loading) {clearTimeout(set)}
        console.log({1: bool, 2:names});
    }, []);


    const getFirstMovies = async () => {
        try {
            const res = await getSlider({
                url: `https://cinematicket.org/api/v1/movie/movies/?categories=1&page=1`,
                method: 'GET'
            });
            fDet(getMovies(res.data.results));

        } catch (e) {
            console.log(e);
        }
    }

    const getTheaters = async () => {
        try {
            const res = await getSlider({
                url: `https://cinematicket.org/api/v1/movie/movies/?categories=147`,
                method: 'GET'
            });
            fDet(getTheater(res.data.results));
        } catch (e) {
            console.log(e);
        }
    }

    const getComedyTheaters = async () => {
        try {
            const res = await getSlider({
                url: `https://cinematicket.org/api/v1/movie/movies/?categories=3&page=1`,
                method: 'GET'
            });
            fDet(GetComedyTheater(res.data.results));
            console.log(fDet(GetComedyTheater(res.data.results)));

        } catch (e) {
            console.log(e);
        }
    }


    const getMostSelling = async () => {
        try {
            const res = await getSlider({
                url: 'https://cinematicket.org/api/v1/movie/new-boxoffice/?page_size=30&release_year=1401',
                method: 'GET'
            });
            fDet(getData(res.data.results));
        } catch (ee) {
            console.log(ee);
        }
    }

    const fDet = useDispatch();
    const details = useSelector(state => state.bSell);

    const getSliderDe = async () => {
        try {
            const req = await getSlider({
                url: 'https://cinematicket.org/api/v1/media/banners/home/?',
                method: 'GET'
            });
            if (req.data !== null || req.data) {
                fDet(getDetails(req.data));
            }
        } catch (ee) {
            console.log(ee);
        }

    }


    const [loading, setLoading] = useState(true);

    return (
        !loading ? (<>
            <div className={'bg-light'}>
                <div className={'container-fluid bg-white'}>
                    <Row>
                        <Col lg={12}>
                            <NavbarMaker/>
                        </Col>
                        <Col lg={12}>
                            <NavbarMaker2/>
                        </Col>
                    </Row>
                </div>
                <div className={'container-fluid py-3'}>
                    <Row>
                        <Col lg={12}>
                            <Swiper/>
                        </Col>
                    </Row>
                </div>
                <div className={'container-fluid py-3'}>
                    <Row>
                        <Col lg={3}>
                            <BestSelling/>
                        </Col>
                        <Col lg={9}>
                            <Movies/>
                            <Theaters/>
                            <ComedyTheater/>
                        </Col>
                    </Row>
                </div>
            </div>
        </>) : <Loading/>
    )

}
