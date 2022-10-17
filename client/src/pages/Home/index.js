import React, { Component } from 'react';
import '../../App.css';
import { Button, Container, Row, Col, Carousel } from 'react-bootstrap';
import { First } from 'react-bootstrap/esm/PageItem';
import { Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container style={{ color: 'white' }}>
                <Row>
                    <Col style={{ padding: 0 }}>
                        <BannerSlide />
                    </Col>
                </Row>
                <Row style={{ slide, backgroundImage: "url('" + process.env.PUBLIC_URL + "/home/home-bg-black.png')" }}>
                    <Col style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                        <Container>
                            <Row >
                                <Col>
                                    
                                    <h3>Buy Media</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col><span>You can easily book a LED billboard on our term. Reservation in NFT format</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col><img src={process.env.PUBLIC_URL + "/home/home-buymedia-bar.png"} height='5px' /></Col>
                            </Row>
                            <Row style={{ paddingTop: '10px' }}>
                                <Col>
                                    <b>PROCESS</b>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                <Col xs={3}>
                                    <img src={process.env.PUBLIC_URL + "/home/home-buymedia-1.png"} width="100%" />
                                </Col>
                                <Col xs={9}>
                                    <b>Buy Media</b><br /><span>Lorem ipsum is simple dummy text</span>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                <Col xs={3}>
                                    <img src={process.env.PUBLIC_URL + "/home/home-buymedia-2.png"} width="100%" />
                                </Col>
                                <Col xs={9}>
                                    <b>Upload artwork</b><br /><span>Lorem ipsum is simple dummy text</span>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                <Col xs={3}>
                                    <img src={process.env.PUBLIC_URL + "/home/home-buymedia-3.png"} width="100%" />
                                </Col>
                                <Col xs={9}>
                                    <b>Approve artwork</b><br /><span>Lorem ipsum is simple dummy text</span>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                <Col xs={3}>
                                    <img src={process.env.PUBLIC_URL + "/home/home-buymedia-4.png"} width="100%" />
                                </Col>
                                <Col xs={9}>
                                    <b>Ads on air</b><br /><span>Lorem ipsum is simple dummy text</span>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                                <Col className='d-grid gap-2'>

                                <Link to="/buynow">
                                <Button className='col-12 btnmove' style={{ backgroundColor:'#F900C0', fontSize:'16px',  color:'#000000'}} size='lg'> <b>Buy Media</b> 
                                </Button>
                                </Link>    


                                    {/* <Button size="lg" style={{ border: 0, backgroundImage: "url('" + process.env.PUBLIC_URL + "/home/home-buymedia-btn.png')" }}  >Buy Media</Button> */}
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row style={{ slide, backgroundImage: "url('" + process.env.PUBLIC_URL + "/home/home-promotion-bg.png')" }}>
                    <Col style={{ paddingTop: '20px', paddingBottom: '40px' }}>
                        <Container>
                            <Row>
                                <Col><img src={process.env.PUBLIC_URL + "/home/home-buymedia-bar.png"} height='5px' /></Col>
                            </Row>
                            <Row>
                                
                                <Col style={{ paddingBottom: '20px' }}>
                                    <h3>NEW <span style={{ color: '#F900C0' }}>PROMOTION</span></h3>
                                </Col>
                                
                            </Row>
                            <Row>
                          
                                <Col xs={6} style={{ padding: '5px' }}>
                                    <PromotionFrame imagePath='/home/home-promotion-banner1.png' name='BIRTHDAY PROJECT'
                                        location='EMPORIUM & EMQUARTIER' price='24,000' />
                                </Col>
                                <Col xs={6} style={{ padding: '5px' }}>
                                    <PromotionFrame imagePath='/home/home-promotion-banner2.png' name='VALENTIME DAY'
                                        location='EMPORIUM & EMQUARTIER' price='24,000' />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} style={{ padding: '5px' }}>
                                    <PromotionFrame imagePath='/home/home-promotion-banner3.png' name='MY IDOL'
                                        location='EMPORIUM & EMQUARTIER' price='24,000' />
                                </Col>
                                <Col xs={6} style={{ padding: '5px' }}>
                                    <PromotionFrame imagePath='/home/home-promotion-banner4.png' name='I LOVE NFT'
                                        location='EMPORIUM & EMQUARTIER' price='24,000' />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ paddingTop: '20px', paddingBottom: '40px', backgroundColor: 'white' }}>
                        <Container style={{ color: 'black' }}>
                            <Row>
                                <Col>
                                    <h3>MARKET<span style={{ color: '#F900C0' }}>PLACE</span></h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    The best media of the month will be displayed here.
                                </Col>
                            </Row>
                            <Row style={{ borderBottom: '1px solid gray', padding: '10px 0 10px' }}>
                                <Col xs={9} style={{ margin: 0, padding: 0 }}>
                                    <MarketPlaceFrame imagePath='/home/home-marketplace-banner1.png'
                                        name='Show DC' price='24,000' />
                                </Col>
                                <Col xs={3} style={{ textAlign: 'center' }}>
                                    <Link to="/buynow">
                                    <Button style={{ color: 'white', backgroundColor: 'black' }}><b>BUY</b></Button>
                                    </Link>
                                </Col>
                            </Row>
                            <Row style={{ borderBottom: '1px solid gray', padding: '10px 0 10px' }}>
                                <Col xs={9} style={{ margin: 0, padding: 0 }}>
                                    <MarketPlaceFrame imagePath='/home/home-marketplace-banner2.png'
                                        name='EMPORIUM & EMQUARTIER' price='24,000' />
                                </Col>
                                <Col xs={3} style={{ textAlign: 'center' }}>
                                    <Link to="/buynow">
                                    <Button style={{ color: 'white', backgroundColor: 'black' }}><b>BUY</b></Button>
                                    </Link>
                                </Col>
                            </Row>
                            <Row style={{ borderBottom: '1px solid gray', padding: '10px 0 10px' }}>
                                <Col xs={9} style={{ margin: 0, padding: 0 }}>
                                    <MarketPlaceFrame imagePath='/home/home-marketplace-banner3.png'
                                        name='PARC PARAGON + THE 90 DEGREE & INTERCHANGE 21' price='24,000' />
                                </Col>
                                <Col xs={3} style={{ textAlign: 'center' }}>
                                    <Link to="/buynow">
                                    <Button style={{ color: 'white', backgroundColor: 'black' }}><b>BUY</b></Button>
                                    </Link>
                                </Col>
                            </Row>
                            <Row style={{ borderBottom: '1px solid gray', padding: '10px 0 10px' }}>
                                <Col xs={9} style={{ margin: 0, padding: 0 }}>
                                    <MarketPlaceFrame imagePath='/home/home-marketplace-banner4.png'
                                        name='EMPORIUM & EMQUARTIER' price='24,000' />
                                </Col>
                                <Col xs={3} style={{ textAlign: 'center' }}>
                                    <Link to="/buynow">
                                    <Button style={{ color: 'white', backgroundColor: 'black' }}><b>BUY</b></Button>
                                    </Link>
                                </Col>
                            </Row>
                            <Row style={{ padding: '10px 0 10px' }}>
                                <Col xs={9} style={{ margin: 0, padding: 0 }}>
                                    <MarketPlaceFrame imagePath='/home/home-marketplace-banner5.png'
                                        name='Show DC' price='24,000' />
                                </Col>
                                <Col xs={3} style={{ textAlign: 'center' }}>
                                    <Link to="/buynow">
                                    <Button style={{ color: 'white', backgroundColor: 'black' }}><b>BUY</b></Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row style={{ slide, backgroundImage: "url('" + process.env.PUBLIC_URL + "/home/home-token-bg.png')" }}>
                    <Col style={{ paddingTop: '20px', paddingBottom: '40px' }}>
                        <Container id='tokenMove'>
                            <Row>
                                <Col>
                                    <img src={process.env.PUBLIC_URL + "/home/home-token-banner.png"} width='100px' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h3>MOVE <span style={{ color: '#F900C0' }}>TOKEN</span></h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src={process.env.PUBLIC_URL + '/home/home-token-bar.png'} width='40px' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src={process.env.PUBLIC_URL + '/home/home-token-gift.png'} width='40px' /> <b>BENEFIT</b>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>• Get a discount on media bookings.</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>• Get the right to reserve media before anyone else.</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-grid gap-2' style={{ padding: '20px 0 10px' }}>

                                    <Link to="/buynow">
                                        <Button className='col-12 btnmove' style={{ backgroundColor:'#F900C0', fontSize:'16px',  color:'#000000'}} size='lg'> <b>TRADE NOW</b> 
                                        </Button>
                                    </Link>  
{/* 
                                    <Button size='lg' style={{ border: 0, backgroundImage: "url('" + process.env.PUBLIC_URL + "/home/home-token-btn.png')" }}>TRADE NOW</Button> */}
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ paddingTop: '20px', paddingBottom: '40px', backgroundColor: 'white' }}>
                        <Container style={{ color: 'black' }}>
                            <Row>
                                <Col>
                                    <h3>ABOUT</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src={process.env.PUBLIC_URL + '/home/home-token-bar.png'} width='40px' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const slide = {
    width: '100%',
    height: 'auto',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}

class BannerSlide extends Component {
    render() {

        const slideText = {
            width: '100%',
            height: 'auto',
            paddingTop: '1em',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }

        return (
            <Container fluid style={{ padding: 0, color: 'white' }}>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            <Col>
                                <img style={slide} src={process.env.PUBLIC_URL + '/home/home-banner01.png'} />
                            </Col>
                        </Row>
                        <Row style={{ slideText, height: '135px', backgroundImage: "url('" + process.env.PUBLIC_URL + "/home/home-banner.png')" }}>
                            <Col style={{ padding: '10px 40px 0 40px ' }}>
                                <h4>OOH MEDIA <span style={{ color: '#F900C0' }}>REIMAGINE</span></h4>
                                <span>You can easily book a LED billboard on our term. Reservation in NFT format</span>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col>
                                <img style={slide} src={process.env.PUBLIC_URL + '/home/home-banner02.png'} />
                            </Col>
                        </Row>
                        <Row style={{ slideText, height: '135px', backgroundImage: "url('" + process.env.PUBLIC_URL + "/home/home-banner.png')" }}>
                            <Col style={{ padding: '10px 40px 0 40px ' }}>
                                <h4>FOR THE <span style={{ color: '#F900C0' }}>FIRST TIME</span></h4>
                                <span>The market place to let you buy OOH media</span><br />
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col>
                                <img style={slide} src={process.env.PUBLIC_URL + '/home/home-banner02.png'} />
                            </Col>
                        </Row>
                        <Row style={{ slideText, height: '135px', backgroundImage: "url('" + process.env.PUBLIC_URL + "/home/home-banner.png')" }}>
                            <Col style={{ padding: '10px 40px 0 40px ' }}>
                                <h4>INVEST WITH MOVE AND</h4>
                                <h4>RECEIVE A <span style={{ color: '#F900C0' }}>VARIETY OF</span></h4>
                                <h4><span style={{ color: '#F900C0' }}>BENEFITS!</span></h4>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container >
        )
    }
};

function PromotionFrame({ imagePath, name, location, price }) {
    return (
        <Container style={{ backgroundColor: 'white', color: 'black', borderRadius: '10px' }}>
            <Row>
                <Col style={{ margin: 0, padding: 0 }}>
                    <img src={process.env.PUBLIC_URL + imagePath} width='100%' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <b style={{ fontSize: '12px' }}>{name}</b><br />
                    <span style={{ fontSize: '8px' }}><img src={process.env.PUBLIC_URL + "/home/pin-location.png"} width='8px' /> {location}</span><br />
                    <b style={{ fontSize: '16px', color: '#F900C0' }}>{price}฿</b>
                </Col>
            </Row>
        </Container>
    )
};

function MarketPlaceFrame({ imagePath, name, price }) {
    return (
        <Container>
            <Row>
                <Col xs={4}>
                    <img src={process.env.PUBLIC_URL + imagePath} width="60px" style={{ borderRadius: '35px' }} />
                </Col>
                <Col xs={8}><b style={{ fontSize: '12px' }}>{name}</b><br /><span style={{ fontSize: '12px', color: '#696969' }}>Floor price: {price} THB</span></Col>
            </Row>
        </Container>
    )
}

export default Home
