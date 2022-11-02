import { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class ToUpload2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container style={{ padding: 0, color: 'white', backgroundImage: "url('" + process.env.PUBLIC_URL + "/mybooking/toupload-bg.png')", backgroundSize: '100%' }}>
                <Row>
                    <Col style={{ paddingBottom: '20px' }}>
                        <Container>
                            <Row>
                                <Col xs={1}>
                                    <a href='javascript:history.back()'><img className='arrow-left-line-1' src={process.env.PUBLIC_URL + '/img/arrow-left-line-3@2x.svg'} /></a>
                                </Col>
                                <Col style={{ paddingTop: '3px' }}>
                                    <h3 style={{ maring: 0 }}>TO <span style={{ color: '#F900C0' }}>UPLOAD</span></h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ padding: 0 }}>
                                    <ToUploadFrame imagepath='mybooking/mybooking-banner-1.png'
                                        name='TYPE 1 PARC PARAGON+90 DEGREE+ROOFTOP & INTERCHANGE 21'
                                        location='Huai Khwang, Bangkok' qty='4 Screen'
                                        pack='9' look='2' start_date='12-06-2022' end_date='17-06-2022' />
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ padding: 0 }}>
                                    <ToUploadFrame imagepath='mybooking/mybooking-banner-2.png'
                                        name='TYPE 2 PARC PARAGON + 90 DEGREE + ROOFTOP'
                                        location='Huai Khwang, Bangkok' qty='3 Screen'
                                        pack='5' look='3' start_date='12-06-2022' end_date='17-06-2022' />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

function ToUploadFrame({ imagepath, name, location, qty, pack, loop, start_date, end_date }) {
    return (
        <Container style={{ paddingBottom: '40px', paddingTop: '20px' }}>
            <Row>
                <Col style={{ padding: 0 }}>
                    <Container style={{ padding: 0 }}>
                        <Row>
                            <Col style={{ padding: 0, margin: 0 }}>
                                <img src={process.env.PUBLIC_URL + imagepath} width='100%' />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col style={{ paddingTop: '10px' }}>
                    <span style={{ fontSize: '16px' }}>{name}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={process.env.PUBLIC_URL + '/mybooking/pin-location-white.png'} width='10px' />
                    <span style={{ fontSize: '8px' }}> {location}</span>
                </Col>
            </Row>
            <Row>
                <Col xs={4}><span style={{ fontSize: '10px' }}>Quantity: {qty}</span></Col>
                <Col xs={5}><span style={{ fontSize: '10px' }}>Availble pack: {pack}</span></Col>
                <Col xs={3}><span style={{ fontSize: '10px' }}>Min./Loop: {loop}</span></Col>
            </Row>
            <Row>
                <Col><span style={{ fontSize: '10px' }}>Booking date</span></Col>
            </Row>
            <Row>
                <Col>
                    <Container style={{ backgroundColor: 'white', color: 'black' }}>
                        <Row>
                            <Col style={{ borderRight: '1px solid black', paddingTop: '5px', paddingBottom: '10px' }}>
                                <span style={{ fontSize: '10px' }}>START</span><br />
                                <span style={{ fontSize: '16px' }}><b>{start_date}</b></span>
                            </Col>
                            <Col style={{ paddingTop: '5px', paddingBottom: '10px' }}>
                                <span style={{ fontSize: '10px' }}>END</span><br />
                                <span style={{ fontSize: '16px' }}><b>{end_date}</b></span>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col style={{ paddingTop: '30px' }}>
                    <Button size='lg' className="btn-colorful-bg" style={{ color: 'black' }}>UPLOAD MEDIA</Button>
                </Col>
            </Row>
        </Container>
    );
}
export default ToUpload2