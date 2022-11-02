import React, { Component } from 'react';
import '../../App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';


class MyBooking extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container className='align-items-center' style={{ color: 'white' }}>
                <Row stype={{ paddingTop: '20px' }}>
                    <Col xs={1}>
                        <a href='javascript:history.back()'><img className='arrow-left-line-1' src={process.env.PUBLIC_URL + '/img/arrow-left-line-3@2x.svg'} /></a>
                    </Col>
                    <Col style={{ paddingTop: '3px' }}>
                        <h3 style={{ maring: 0 }}>MY <span style={{ color: '#F900C0' }}>BOOKING</span></h3>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ padding: 0, margin: 0 }}>
                        <BookingFrame image_path='/mybooking/mybooking-banner-1.png'
                            name='TYPE 1 PARC PARAGON + 90 DEGREE + ROOFTOP & INTERCHANGE 21'
                            location='Huai Khwang Bangkok' qty='4' pack='9' loop='2'
                            start_date='12-06-2022' end_date='17-06-2022' />
                    </Col>
                </Row>
                <Row>
                    <Col style={{ padding: 0, margin: 0 }}>
                        <BookingFrame image_path='/mybooking/mybooking-banner-2.png'
                            name='TYPE 2 PARC PARAGON + 90 DEGREE + ROOFTOP'
                            location='Huai Khwang Bangkok' qty='4' pack='9' loop='2'
                            start_date='12-06-2022' end_date='17-06-2022' />
                    </Col>
                </Row>
            </Container>
        )
    }
}

function BookingFrame({ image_path, name, location, qty, pack, loop, start_date, end_date }) {

    return (
        <Container style={{ padding: '20px 0 10px 0', margin: 0 }}>
            <Row>
                <Col><img src={process.env.PUBLIC_URL + image_path} width='100%' /></Col>
            </Row>
            <Row>
                <Col>
                    <Container fluid style={{ padding: '20px' }}>
                        <Row>
                            <Col><span style={{ fontSize: '16px' }}>{name}</span></Col>
                        </Row>
                        <Row>
                            <Col style={{ paddingTop: '10px' }}>
                                <img src={process.env.PUBLIC_URL + '/mybooking/pin-location-white.png'} width='10px' />
                                <span style={{ fontSize: '8px' }}> {location}</span>
                            </Col>
                        </Row>
                        <Row style={{ paddingTop: '5px' }}>
                            <Col xs={4}><span style={{ fontSize: '10px' }}>Quantity : {qty} Screen</span></Col>
                            <Col xs={4}><span style={{ fontSize: '10px' }}>Available pack : {pack}</span></Col>
                            <Col xs={4}><span style={{ fontSize: '10px' }}>Min./Loop : {loop}</span></Col>
                        </Row>
                        <Row>
                            <Col style={{ paddingTop: '10px' }}>
                                <span style={{ fontSize: '10px' }}>Booking date</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ paddingTop: '10px' }}>
                                <Container style={{ backgroundColor: 'white', color: 'black', padding: '10px' }}>
                                    <Row>
                                        <Col><b>START<br />{start_date}</b></Col>
                                        <Col style={{ borderLeft: '1px solid black' }}><b>END<br />{end_date}</b></Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ paddingTop: '30px' }}>
                                <Button size='lg' className='btn-colorful-bg' style={{ color: 'black' }} href='/uploadmedia'>
                                    UPLOAD MEDIA
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ paddingTop: '10px' }}>
                                <Button size='lg' className='btn-black-bg' style={{ color: 'white' }} href='/releasetomarketplace'>
                                    RELEASE TO MARKETPLACE
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>

    )
}

export default MyBooking