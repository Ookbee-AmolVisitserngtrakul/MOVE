import React, { Component } from 'react';
import '../../App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Screen from '../../components/Screen'


class UploadMedia extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container style={{ color: 'white', backgroundImage: "url('" + process.env.PUBLIC_URL + "/mybooking/upload-media-bg.png')", backgroundSize: '100%' }}>
                <Row>
                    <Col style={{ paddingBottom: '40px' }}>
                        <Container>
                            <Row style={{ paddingTop: '40px' }}>
                                <Col xs={1}>
                                    <a href='javascript:history.back()'><img className='arrow-left-line-1' src={process.env.PUBLIC_URL + '/img/arrow-left-line-3@2x.svg'} /></a>
                                </Col>
                                <Col style={{ paddingTop: '3px' }}>
                                    <h3 style={{ maring: 0 }}>PARC PARAGON + THE 90 DEGREE & INTERCHANGE 21</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingTop: '15px' }}>
                                    <img src={process.env.PUBLIC_URL + 'mybooking/pin-location-pink.png'} width='10px' />{'  '}
                                    <span style={{ fontSize: '10px' }}>Address Chaturathit Rd, Bang Kapi, Huai Khwang, Bangkok</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-grid gap-2' style={{ paddingTop: '15px' }}>
                                    <Button size='lg' style={{ backgroundColor: 'white', backgroundSize: '100%', color: 'black', textAlign: 'left' }}>
                                        <p style={{ lineHeight: '20px', fontSize: '16px', fontWeight: 'bolder', margin: 0 }}>
                                            <img src={process.env.PUBLIC_URL + '/img/frame@2x.svg'} /> Upload time<br />
                                            <span style={{ lineHeight: '12px', fontSize: '10px', color: 'red' }}>You have 5 days and 3 hours left to upload.</span>
                                        </p>
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingTop: '20px', fontSize: '16px' }}>
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
                                                <img src={process.env.PUBLIC_URL + '/mybooking/upload-review-sm-3.png'} width='100%' />
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
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ backgroundImage: "url('" + process.env.PUBLIC_URL + "/mybooking/upload-mockup-bg.png')" }}>
                        <Container style={{ paddingBottom: '20px' }}>
                            <Row style={{ paddingTop: '20px', paddingBottom: '20px', }}>
                                <Col xs={2}>
                                    <span style={{ color: '#F900C0', fontSize: '14px', textDecoration: 'underline' }}>Mockup</span>
                                </Col>
                                <Col>
                                    <span style={{ fontSize: '14px' }}>Preview</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ padding: 0, minHeight: '100%', height: 'auto' }}>
                                    <Container style={{ padding: 0 }}>
                                        <Row>
                                            <Col style={{ padding: 0 }}>
                                                {/* <img src={process.env.PUBLIC_URL + '/mybooking/upload-mockup-screen.png'} width='100%' /> */}
                                                <Screen param="paragon90-degree" parentId="upload-screen"></Screen>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingTop: '15px' }}>
                                    <span style={{ fontSize: '13px' }}>Screen resolution : 1680 x 816 px</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span style={{ fontSize: '13px' }}>Format : Avi/ Wmv / Mov / MP4 px</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span style={{ fontSize: '13px' }}>Framerate : 25 frames per second</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span style={{ fontSize: '13px' }}>Format animate : Avi/ Wmv / Mov / MP4 px</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span style={{ fontSize: '13px' }}>
                                        Format art work : Ai/Psd</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingTop: '20px' }}>
                                    <span style={{ fontSize: '16px' }}><b>UPLOADING</b></span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <UploadFrame image_path='/mybooking/upload-screen-A.png'
                                        name='Screen A 480 x 408 Px' status='Completed' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <UploadFrame image_path='/mybooking/upload-screen-B.png'
                                        name='Screen B 360 x 408 Px' status='Completed' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <UploadFrame image_path='/mybooking/upload-screen-C.png'
                                        name='Screen C 60 x 408 Px' status='Completed' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <UploadFrame image_path='/mybooking/upload-screen-D.png'
                                        name='Screen D 600 x 408 Px' status='Completed' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <UploadFrame image_path='/mybooking/upload-screen-E.png'
                                        name='Screen E 660 x 408 Px' status='Completed' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <UploadFrame image_path='/mybooking/upload-screen-F.png'
                                        name='Screen F 1020 x 408 Px' status='Completed' />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ backgroundColor: 'white', color: 'black', paddingTop: '20px', paddingBottom: '20px' }}>
                        <Container>
                            <Row>
                                <Col style={{ padding: 0 }}>
                                    <b><img src={process.env.PUBLIC_URL + '/img/frame@2x.svg'} /> REMARK</b>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ padding: 0 }}>
                                    <span style={{ fontSize: '12px' }}>Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was in</span>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                        <Container>
                            <Row>
                                <Col>
                                    <Button size='lg' className='btn-colorful-bg' style={{ color: 'black' }} href='/upload-media-2'>
                                        UPLOAD MEDIA
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingTop: '10px' }}>
                                    <Button size='lg' className="btn-black-bg" style={{ color: 'whote' }}>Cancel</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container >
        )
    };
}

function UploadFrame({ image_path, name, status }) {
    return (
        <Container style={{ paddingTop: '10px', paddingBottom: '10px' }}>
            <Row>
                <Col xs={2} style={{ paddingTop: '5px' }}>
                    <img src={process.env.PUBLIC_URL + image_path} style={{ width: '60px', height: '60px', borderRadius: '50px', border: '2px solid white' }} />
                </Col>
                <Col>
                    <Container fluid>
                        <Row>
                            <Col>
                                <span style={{ fontSize: '10px' }}>{name}</span>
                            </Col>
                            <Col xs={1} style={{ float: 'right', color: '#F900C0' }}>X</Col>
                        </Row>
                        <hr style={{ border: '2px solid #F900C0', marginTop: '10px', marginBottom: 0 }} />
                        <Row>
                            <Col>
                                <span style={{ fontSize: '10px' }}>{status}</span>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default UploadMedia