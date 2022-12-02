import {Button, Col, Container, Row} from "reactstrap";
import {RegisterInputs} from "./RegisterInputs";

export const RegisterBox = ({value}) => {

    return(
        <>
            <Container className={'center text-center register-box rounded-4 bg-white'} style={{zIndex: 5}}>
                <Row>
                    <Col lg={12} className={''}>
                        <div className={'text-center'}>
                            <RegisterInputs value={value}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}