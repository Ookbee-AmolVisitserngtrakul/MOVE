import React, { Component, useState } from 'react';
import '../App.css';
import { Container, Row, Col, Nav, Navbar, Offcanvas, NavDropdown, Dropdown, DropdownButton } from 'react-bootstrap';

class Head extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Sidebar />
    )
  };
}

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container style={{ padding: '10px 20px', backgroundColor: 'black', color: 'white' }}>
        <Row>
          <Col xs={1} style={{ paddingTop: '5px' }}>
            <img src={process.env.PUBLIC_URL + '/header/header-menu.png'}
              width='20px' onClick={handleShow} />
          </Col>
          <Col xs={6}>
            <img src={process.env.PUBLIC_URL + '/header/header-logo.png'} width='120px' />
          </Col>
          <Col xs={5} style={{ padding: '2px 0' }} >
            <Dropdown style={{ float: 'right' }}>
              <Dropdown.Toggle style={{ backgroundColor: 'black', color: 'white', border: 0 }} >
                <img src={process.env.PUBLIC_URL + '/header/header-profile.png'} width='20px' /> Phasika
              </Dropdown.Toggle>
              <Dropdown.Menu variant='success'>
                <Dropdown.Item href='profile'>Profile</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
      <Offcanvas show={show} onHide={handleClose} backdrop="static" style={{ backgroundColor: 'black' }}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <Navbar expand='false'>
            <Container >
              <Nav className="me-auto">
                <Nav.Link><span style={{ color: '#F900C0' }}>EN</span> / TH</Nav.Link>
                <Nav.Link href='/registermember'>Sign up</Nav.Link>
                <NavDropdown.Divider />
                <NavDropdown title='Buy media'>
                  <NavDropdown.Item href='/buymedia'>Buy media</NavDropdown.Item>
                  <NavDropdown.Item href='/selecttime'>Watching</NavDropdown.Item>
                  <NavDropdown.Item href='/my-booking'>Saved</NavDropdown.Item>
                  <NavDropdown.Item href='/buynow'>Buy again</NavDropdown.Item>
                  <NavDropdown.Item href='/addtocart' >Purchases</NavDropdown.Item>
                  <NavDropdown.Item href='/selectsite'>Recently viewed</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Marketplace'>
                  <NavDropdown.Item href='/release-to-marketplace-2'>Sell</NavDropdown.Item>
                  <NavDropdown.Item href='/ads-on-air-1'>My listing</NavDropdown.Item>
                  <NavDropdown.Item href='/marketplace'>Search market place</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='/#tokenMove'>Move</Nav.Link>
                <Nav.Link href='/chat'>Inbox</Nav.Link>
                <Nav.Link href='/payment'>Connect wallet</Nav.Link>
                <Nav.Link href='/to-upload'>My media gallery</Nav.Link>
                <Nav.Link><img src={process.env.PUBLIC_URL + '/header/header-social.png'} width='80px' /></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Head

