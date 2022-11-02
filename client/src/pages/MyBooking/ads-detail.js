import React, { Component } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap"

class StatusApproved extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container style={{ padding: 0, color: 'white', backgroundImage: "url('" + process.env.PUBLIC_URL + "/mybooking/upload-media-bg.png')", backgroundSize: '100%' }}>
                <Row>
                    <Col>
                        <Container>
                            <Row style={{ paddingTop: '40px' }}>
                                <Col style={{ paddingTop: '3px' }}>
                                    <h3 style={{ maring: 0 }}>PARC PARAGON + THE 90 DEGREE & INTERCHANGE 21</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingTop: '15px' }}>
                                    <img src={process.env.PUBLIC_URL + 'mybooking/pin-location-pink.png'} width='10px' />{'  '}
                                    <span style={{ fontSize: '10px' }}>Address: Chaturathit Rd, Bang Kapi, Huai Khwang, Bangkok</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingTop: '15px', paddingBottom: '15px' }}>
                                    <Button className='btn-status btn-status-adsonair'>
                                        <img src={process.env.PUBLIC_URL + '/mybooking/ads-btn-onair.png'} width='13px' style={{ borderRadius: '50px' }} /> Onair
                                    </Button>{'  '}<span style={{ fontSize: '16px' }}>30-08-2022 12:00</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col><b>PREVIEW</b></Col>
                            </Row>
                            <Row>
                                <Col style={{ padding: 0, paddingTop: '10px' }}>
                                    <Container style={{ padding: 0 }}>
                                        <Row>
                                            <Col style={{ margin: 0 }}>
                                                <img src={process.env.PUBLIC_URL + '/mybooking/mybooking-banner-1.png'} width='100%' />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingBottom: '20px', backgroundSize: '100%', backgroundImage: "url('" + process.env.PUBLIC_URL + "/mybooking/mystatus-bg-3.png')" }}>
                                    <Container style={{ padding: 0 }}>
                                        <Row>
                                            <Col style={{ paddingTop: '15px' }}>
                                                <span style={{ fontSize: '10px' }}>Booking Date :</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Container style={{ color: 'black', backgroundColor: 'white', padding: '10px' }}>
                                                    <Row>
                                                        <Col xs={6} style={{ borderRight: '1px solid black' }}>
                                                            <span style={{ fontSize: '10px' }}>START</span><br />
                                                            <span style={{ fontSize: '16px' }}><b>12-06-2022</b></span>
                                                        </Col>
                                                        <Col>
                                                            <span style={{ fontSize: '10px' }}>END</span><br />
                                                            <span style={{ fontSize: '16px' }}><b>17-06-2022</b></span>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ paddingTop: '5px' }}>
                                                <span style={{ fontSize: '10px' }}><b>Upload Date:</b>  March 6,2022</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ paddingTop: '5px' }}>
                                                <span style={{ fontSize: '10px' }}><b>Quantity:</b>  4 Screen (Your art work will be displayed on 4 screens.)</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ paddingTop: '5px' }}>
                                                <span style={{ fontSize: '10px' }}><b>Available pack:</b>  9</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ paddingTop: '5px' }}>
                                                <span style={{ fontSize: '10px' }}><b>Min./Loop:</b>  (2 minutes per 1 Available pack)</span>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default StatusApproved