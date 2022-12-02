import {Button, Col, Container, Row} from "reactstrap";
import React from "react";
import {ActorsHeader} from "./ActorsHeader";
import {Link} from "react-router-dom";
import {CaretRightOutlined} from "@ant-design/icons";

export const Header = ({value}) => {

    return(
        <>
            <div className={'container-fluid'} style={{
                backgroundImage: `url(${value.movie?.background?.desktop_url})`,
                backgroundSize: "cover",
                height: '250px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
            }}>
                <Row>
                    <Col lg={12}>
                        <Container className={'py-3'}>
                            <Row>
                                <Col lg={12}>
                                    <div className={'d-flex justify-content-end position-relative'}>
                                        <div className={'text-white text-start mt-3 position-absolute'} style={{top: '0px', right:'220px'}}>
                                            <h5 className={'text-white text-start'}>{value.movie?.name} | {value.movie?.directors[0]?.full_name}</h5>
                                            <div className={'d-flex justify-content-end mt-3'}>
                                                <div className={'ms-2'} dir={'rtl'}><span>{value.movie?.duration}دقیقه </span></div>
                                                <div className={''}>{value.movie?.genres[0]?.name}</div>
                                            </div>
                                            <div className={'mt-3'}>{Math.ceil((value.movie?.movie_rate) * 10) / 10}/5 &#10084;</div>
                                            <div>
                                                <ActorsHeader value={value}/>
                                            </div>
                                            <div style={{marginTop:'75px', color: "white"}} >
                                                <Button style={{backgroundColor: '#ff3543'}}><a href={value.movie?.aparat_trailer} target={'_blank'} style={{color: 'white'}}> تیزر فیلم{<CaretRightOutlined style={{fontSize: '20px'}}/>}</a></Button>
                                            </div>
                                        </div>
                                        <div className={'position-absolute'} style={{top: '30px', right:'-50px'}}>
                                            <img src={value.movie?.poster?.desktop_url} style={{width: '230px', height: '250px'}} className={'rounded-4'} alt=""/>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                        </Container>
                    </Col>`
                </Row>
            </div>
        </>
    )
}