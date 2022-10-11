import React, { Component } from 'react';
import '../App.css';
import { Col, Container, Row } from 'react-bootstrap';

class Foot extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container className='container' style={{ color: 'white', padding: '20px', backgroundImage: "url('" + process.env.PUBLIC_URL + "/footer/footer-bg.png')" }}>
                <Row>
                    <Col><h6 style={{ color: '#F900C0' }}>About</h6>
                    </Col>
                </Row>
                <Row style={{ paddingBottom: '30px' }}>
                    <Col xs={5}>
                        <span>Company profile</span>
                    </Col>
                    <Col xs={2}>
                        <span>FAQ</span>
                    </Col>
                    <Col xs={5}>
                        <span>Privacy policy</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={5}>
                        <h6 style={{ color: '#F900C0' }}>We accept</h6>
                    </Col>
                    <Col>
                        <h6 style={{ color: '#F900C0' }}>Move token</h6>
                    </Col>
                </Row>
                <Row style={{ paddingBottom: '30px' }}>
                    <Col xs={5}>
                        <span>Credit card</span><br />
                        <span>Flat</span><br />
                        <span>Pay pal</span>

                    </Col>
                    <Col>
                        <span>Whitepaper</span><br />
                        <span>Developer</span>
                    </Col>
                </Row>
                <Row>
                    <Col><h6 style={{ color: '#F900C0' }}>Contact</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img width='25px' src={process.env.PUBLIC_URL + '/footer/footer-telephone.png'} /> <span>081-234-5678</span><br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img width='25px' src={process.env.PUBLIC_URL + '/footer/footer-email.png'} /> <span>admin@mail.com</span><br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img width='25px' src={process.env.PUBLIC_URL + '/footer/footer-facebook.png'} />{' '}
                        <img width='25px' src={process.env.PUBLIC_URL + '/footer/footer-line.png'} />{' '}
                        <img width='25px' src={process.env.PUBLIC_URL + '/footer/footer-twitter.png'} />
                    </Col>
                </Row>
            </Container >
        )
    }
}
export default Foot