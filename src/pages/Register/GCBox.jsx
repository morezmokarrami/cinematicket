import {Button, Col, Container, Row} from "reactstrap";
import {RegisterInputs} from "./RegisterInputs";
import {GCInputs} from "./GCInputs";

export const GCBox = ({value}) => {

    return(
        <>
            <Container className={'center text-center register-box rounded-4 bg-white'} style={{zIndex: 5}}>
                <Row>
                    <Col lg={12} className={''}>
                        <div className={'text-center'}>
                            <GCInputs/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}