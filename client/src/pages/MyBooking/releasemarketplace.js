import React, { Component } from 'react';
import '../../App.css';
import { Button, Container, Row, Col, Carousel } from 'react-bootstrap';


class ReleaseMarketPlace2 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container style={{ color: 'white', backgroundImage: "url('" + process.env.PUBLIC_URL + "/mybooking/release-market-bg.png')" }}>
                <Row>
                    <Col style={{ paddingTop: '40px' }}>
                        <Container>
                            <Row>
                                <Col>
                                    <span style={{ fontSize: '24px' }}><b>PARC PARAGON + THE 90 DEGREE & INTERCHANGE 21</b></span>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingTop: '15px' }}>
                                    <img src={process.env.PUBLIC_URL + 'mybooking/pin-location-pink.png'} width='10px' />{'  '}
                                    <span style={{ fontSize: '10px' }}>Address Chaturathit Rd, Bang Kapi, Huai Khwang, Bangkok</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ fontSize: '16px', paddingTop: '25px ' }}>
                                    <b>FORMAT <span style={{ color: '#F900C0' }}>CUSTOMIZED</span></b>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ padding: 0 }}>
                                    <Container style={{ padding: 0 }}>
                                        <Row>
                                            <Col style={{ padding: '10px 0 0 0', margin: 0 }}>
                                                <img src={process.env.PUBLIC_URL + '/mybooking/upload-review-lg.png'} width='100%' />
                                            </Col>
                                        </Row>
                                        <Row style={{ paddingTop: '5px' }}>
                                            <Col xs={4} style={{ padding: 0, paddingRight: '5px' }}>
                                                <img src={process.env.PUBLIC_URL + '/mybooking/upload-review-sm-1.png'} width='100%' height='100%' />
                                            </Col>
                                            <Col xs={4} style={{ padding: 0, paddingLeft: '5px', paddingRight: '5px' }}>
                                                <img src={process.env.PUBLIC_URL + '/mybooking/upload-review-sm-2.png'} width='100%' height='100%' />
                                            </Col>
                                            <Col xs={4} style={{ padding: 0, paddingLeft: '5px' }}>
                                                <img src={process.env.PUBLIC_URL + '/mybooking/upload-review-sm-3.png'} width='100%' height='100%' />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingTop: '20px' }}>
                                    <img src={process.env.PUBLIC_URL + 'mybooking/upload-line-up.png'} width='5px' />
                                    <span style={{ fontSize: '16px', fontWeight: 'bolder' }}>  DETAIL <span style={{ color: '#F900C0' }}>BOOKING</span></span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span style={{ fontSize: '10px' }}><b>Quantity</b> : 4 Screen (Your art work will be displayed on 5 screens.)</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span style={{ fontSize: '10px' }}><b>Available pack</b> : 9</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span style={{ fontSize: '10px' }}><b>Min./Loop</b> : 2 (2 minutes per 1 Availble pack)</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingTop: '15px', paddingBottom: '10px' }}>
                                    <span style={{ fontSize: '10px' }}>Booking Date</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingBottom: '20px' }}>
                                    <Container style={{ padding: '5px 15px', backgroundColor: 'white', color: 'black' }}>
                                        <Row>
                                            <Col xs={6} style={{ borderRight: '1px solid black', }}>
                                                <p style={{ fontSize: '16px', margin: 0 }}>
                                                    <span style={{ fontSize: '10px' }}>START</span><br />
                                                    <b>12-06-2022</b></p>
                                            </Col>
                                            <Col style={{ borderLeft: '1px solid black', }}>
                                                <p style={{ fontSize: '16px', margin: 0 }}>
                                                    <span style={{ fontSize: '10px' }}>END</span><br />
                                                    <b>17-06-2022</b></p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ backgroundImage: "url('" + process.env.PUBLIC_URL + "/mybooking/release-market-sell-bg.png')" }}>
                        <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                            <Row>
                                <Col>
                                    <b><span style={{ fontSize: '16px' }}>SET DATE <span style={{ color: '#F900C0' }}>TO SELL</span></span></b>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingTop: '10px', borderBottom: '1px solid white' }}>
                                    <Container style={{ padding: '5px' }}>
                                        <Row>
                                            <Col xs={6} style={{ borderRight: '1px solid white' }}>
                                                <span style={{ fontSize: '12px' }}>12-06-2022</span>
                                            </Col>
                                            <Col xs={6} style={{ borderLeft: '1px solid white' }}>
                                                <span style={{ fontSize: '12px' }}>17-06-2022</span>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingTop: '20px' }}>
                                    <b><span style={{ fontSize: '16px' }}>SET<span style={{ color: '#F900C0' }}>PRICE</span></span></b>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '10px', fontSize: '12px' }}>
                                <Col xs={3}>
                                    Current Price
                                </Col>
                                <Col xs={3} style={{ borderBottom: '1px solid white', textAlign: 'center' }}>
                                    50,000
                                </Col>
                                <Col>
                                    THB
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingTop: '10px', fontSize: '12px' }}>
                                    Platform fee is sold <span style={{ color: '#F900C0' }}>1.000 (10%)</span>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                            <Row>
                                <Col style={{ paddingBottom: '20px' }}>
                                    <Button size='lg' className='btn-colorful-bg' style={{ color: 'black' }}>RELEASE TO MARKETPLACE</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button size='lg' className='btn-black-bg'>CANCLE</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container >
        )
    }
}


export default ReleaseMarketPlace2;