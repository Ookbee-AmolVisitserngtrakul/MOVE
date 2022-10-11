import React, { Component, useState } from 'react';
import '../App.css';
import { Container, Row, Col, Nav, Navbar, Offcanvas, NavDropdown, Dropdown, DropdownButton } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
class Head extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Sidebar />

      // <Navbar bg='black' expand='lg' >
      //   <Navbar.Brand className='order-1' style={{ marginRight: 0 }}>
      //     <Container fluid>
      //       <Row>
      //         <Col>
      //           <img src={process.env.PUBLIC_URL + '/header/header-logo.png'} width='120px' />
      //         </Col>
      //         <Col style={{ paddingTop: '2px', paddingRight: 0, color: 'white', float: 'right' }}>
      //           <Dropdown>
      //             <Dropdown.Toggle style={{ backgroundColor: 'black', color: 'white', border: 0 }}>
      //               <img src={process.env.PUBLIC_URL + '/header/header-profile.png'} width='20px' /> Phasika
      //             </Dropdown.Toggle>
      //           </Dropdown>
      //           {/* <img src={process.env.PUBLIC_URL + '/header/header-profile.png'} width='110px' /> */}
      //         </Col>
      //       </Row>
      //     </Container>
      //   </Navbar.Brand>
      //   <Navbar.Toggle aria-controls='canvas-expand' className='order-0' />
      //   <Navbar.Offcanvas id='canvas-expand' style={{ backgroundColor: 'black', color: 'white' }}>
      //     <Offcanvas.Header closeButton />
      //     <Offcanvas.Body>
      //       <Nav className="ms-auto">
      //         <Nav.Link><span style={{ color: '#F900C0' }}>EN</span> / TH</Nav.Link>
      //         <Nav.Link>Sign up</Nav.Link>
      //         <NavDropdown.Divider />
      //         <NavDropdown title='Buy media'>
      //           <NavDropdown.Item>Buy media</NavDropdown.Item>
      //           <NavDropdown.Item>Watching</NavDropdown.Item>
      //           <NavDropdown.Item>Saved</NavDropdown.Item>
      //           <NavDropdown.Item>Buy again</NavDropdown.Item>
      //           <NavDropdown.Item>Purchases</NavDropdown.Item>
      //           <NavDropdown.Item>Recently viewed</NavDropdown.Item>
      //         </NavDropdown>
      //         <NavDropdown title='Marketplace'>
      //           <NavDropdown.Item>Sell</NavDropdown.Item>
      //           <NavDropdown.Item>My listing</NavDropdown.Item>
      //           <NavDropdown.Item>Search market place</NavDropdown.Item>
      //         </NavDropdown>
      //         <Nav.Link>Move</Nav.Link>
      //         <Nav.Link>Inbox</Nav.Link>
      //         <Nav.Link>Connect wallet</Nav.Link>
      //         <Nav.Link>My media gallery</Nav.Link>
      //         <Nav.Link><img src={process.env.PUBLIC_URL + '/header/header-social.png'} width='80px' /></Nav.Link>
      //       </Nav>
      //     </Offcanvas.Body>
      //   </Navbar.Offcanvas>
      // </Navbar >
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
              <Dropdown.Toggle style={{ backgroundColor: 'black', color: 'white', border: 0 }}>
                <img src={process.env.PUBLIC_URL + '/header/header-profile.png'} width='20px' /> Phasika
              </Dropdown.Toggle>
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
                <Nav.Link>Sign up</Nav.Link>
                <NavDropdown.Divider />
                <NavDropdown title='Buy media'>
                  <NavDropdown.Item>Buy media</NavDropdown.Item>
                  <NavDropdown.Item>Watching</NavDropdown.Item>
                  <NavDropdown.Item>Saved</NavDropdown.Item>
                  <NavDropdown.Item>Buy again</NavDropdown.Item>
                  <NavDropdown.Item>Purchases</NavDropdown.Item>
                  <NavDropdown.Item>Recently viewed</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Marketplace'>
                  <NavDropdown.Item>Sell</NavDropdown.Item>
                  <NavDropdown.Item>My listing</NavDropdown.Item>
                  <NavDropdown.Item>Search market place</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>Move</Nav.Link>
                <Nav.Link>Inbox</Nav.Link>
                <Nav.Link>Connect wallet</Nav.Link>
                <Nav.Link>My media gallery</Nav.Link>
                <Nav.Link><img src={process.env.PUBLIC_URL + '/header/header-social.png'} width='80px' /></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Head

