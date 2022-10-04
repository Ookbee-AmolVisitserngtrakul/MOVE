import React, { Component } from 'react';
import '../App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

class Head extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   setBookName: '',
    //   setReview: '',
    //   fetchData: [],
    //   reviewUpdate: ''
    // }
  }

  render () {
    return (
        <Navbar bg="black" expand="lg">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/" style={{color:'white'}}><b>MOVE</b></Nav.Link>
                    {/* <Nav.Link href="/Detail" style={{color:'white'}}></Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
    )
  }
}
export default Head