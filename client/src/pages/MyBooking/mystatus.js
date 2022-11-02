import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

class MyStatus2 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container style={{ padding: 0, color: 'white', backgroundImage: "url('" + process.env.PUBLIC_URL + "/mybooking/mystatus-bg.png')", backgroundSize: '100%' }}>
                <Row>
                    <Col style={{ paddingBottom: '20px' }}>
                        <Container>
                            <Row>
                                <Col xs={1}>
                                    <a href='javascript:history.back()'><img className='arrow-left-line-1' src={process.env.PUBLIC_URL + '/img/arrow-left-line-3@2x.svg'} /></a>
                                </Col>
                                <Col style={{ paddingTop: '3px' }}>
                                    <h3 style={{ maring: 0 }}>TO <span style={{ color: '#F900C0' }}>STATUS</span></h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ padding: 0 }}>
                                    <Container>
                                        <Row>
                                            <Col style={{ padding: 0, backgroundImage: "url('" + process.env.PUBLIC_URL + "/mybooking/mystatus-bg-2.png')", backgroundSize: '100%' }}>
                                                <StatusFrame location='PARC PARAGON + THE 90 DEGREE & INTERCHANGE 21'
                                                    book_date='May 6,2022 - May 12,2022' upload_date='March 6,2022' status='Checking' />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ padding: 0 }}>
                                                <StatusFrame location='PARC PARAGON + THE 90 DEGREE & INTERCHANGE 21'
                                                    book_date='May 6,2022 - May 12,2022' upload_date='March 6,2022' status='Approved' />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ padding: 0, backgroundImage: "url('" + process.env.PUBLIC_URL + "/mybooking/mystatus-bg-2.png')", backgroundSize: '100%' }}>
                                                <StatusFrame location='PARC PARAGON + THE 90 DEGREE & INTERCHANGE 21'
                                                    book_date='May 6,2022 - May 12,2022' upload_date='March 6,2022' status='Checking' />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ padding: 0 }}>
                                                <StatusFrame location='PARC PARAGON + THE 90 DEGREE & INTERCHANGE 21'
                                                    book_date='May 6,2022 - May 12,2022' upload_date='March 6,2022' status='Rejected' />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                            <Row style={{ padding: '20px' }}>
                                <Col style={{ backgroundColor: 'white', color: 'black' }}>
                                    <span style={{ fontSize: '8px' }}>Invalid category</span><br />
                                    <span style={{ color: 'red', fontSize: '12px', textDecoration: 'underline' }}>Please re-upload.</span>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}
function StatusFrame({ location, book_date, upload_date, status }) {
    return (
        <Container style={{ padding: '10px 20px', color: 'white', fontSize: '12px' }} >
            <Row>
                <Col xs={4}>Location</Col>
                <Col><a href={'/my-status2-' + (status)} style={{ color: '#F900C0' }}>{location}</a></Col>
            </Row>
            <Row>
                <Col xs={4}>Booking Date</Col>
                <Col>{book_date}</Col>
            </Row>
            <Row>
                <Col xs={4}>Upload Date</Col>
                <Col>{upload_date}</Col>
            </Row>
            <Row>
                <Col xs={4}>Status</Col>
                <Col>
                    {/* <Button className="btn-status-(status)" variant={(status) == 'Approved' ? 'outline-success' : ((status) == 'Checking' ? 'outline-warning' : 'outline-danger')} style={{ backgroundColor: 'white', border: 0, fontSize: '12px', padding: '5px' }}> */}
                    <Button className={'btn-status btn-status-' + (status)} >
                        <img src={process.env.PUBLIC_URL + '/mybooking/mystatus-btn-' + status + '.png'} width='13px' style={{ borderRadius: '50px' }} /> {status}
                    </Button>
                </Col>
            </Row>
        </Container >
    )
}

export default MyStatus2