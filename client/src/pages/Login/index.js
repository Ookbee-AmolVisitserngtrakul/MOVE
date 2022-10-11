import React, { Component } from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import { Button, InputGroup ,Form , Container, Row, Col } from 'react-bootstrap';
import { BsEnvelopeFill , BsLockFill , BsChevronDown, BsTelephone,BsWalletFill ,BsFillChatSquareTextFill ,BsFacebook ,BsLine,BsTwitter } from "react-icons/bs";



class Login extends Component {
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
    // let card = this.state.fetchData.map((val, key) => {
    //     return (
    //         <React.Fragment>
    //             <Card style={{ width: '18rem' }} className='m-2'>
    //                 <Card.Body>
    //                     <Card.Title>{val.book_name}</Card.Title>
    //                     <Card.Text>
    //                         {val.book_review}
    //                     </Card.Text>
    //                     <input name='reviewUpdate' onChange={this.handleChange2} placeholder='Update Review' ></input>
    //                     <Button className='m-2' onClick={() => { this.edit(val.id) }}>Update</Button>
    //                     <Button onClick={() => { this.delete(val.id) }}>Delete</Button>
    //                 </Card.Body>
    //             </Card>
    //         </React.Fragment>
    //     )
    // })
  
    return (
        <Container fluid style={{padding:0,margin:0}}>
           
            <Container style={{paddingTop:'1em' , backgroundColor:'#000000' , color:'white'}}>
                <div className='d-flex justify-content-center mt-2 mb-3'>
                    <h1 style={{ fontSize:'24px'}}>LOGIN</h1>
                </div>
                <div className='d-flex justify-content-center mt-2 mb-2' style={{ backgroundColor:'white' , color:'black'}}>
                        <img
                        src='iconfacebook.png'
                        className='img-fluid shadow-2-strong mt-3 mb-3'
                        alt=''
                        style={{marginRight:'5px'}}
                        />
                    <h1 style={{ fontSize:'16px'}} className="mt-3 mb-3"> Continue with facebook</h1>
                </div>
                <div className='d-flex justify-content-center mb-5' style={{ backgroundColor:'white' , color:'black'}}>
                        <img
                        src='icongoogle.png'
                        className='img-fluid shadow-2-strong mt-3 mb-3'
                        alt=''
                        style={{marginRight:'5px'}}
                        />
                    <h1 style={{fontSize:'16px'}}  className="mt-3 mb-3" > Continue with Google</h1>
                </div>

                <div className='d-flex justify-content-center mb-5'>
                    <h1 style={{fontSize:'16px'}}>Or Login</h1>
                </div>
                
                <div className='row'>
                    <div className='col-12'>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><BsEnvelopeFill></BsEnvelopeFill></InputGroup.Text>
                        <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    </div>
                    <div className='col-12'>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><BsLockFill></BsLockFill></InputGroup.Text>
                        <Form.Control
                        placeholder="Parssword"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                        
                    </div>
                </div>

                <div className='d-flex justify-content-center mb-5'>
                    <h1 style={{textDecoration:'underline', fontSize:'16px'}}>Forgot Password</h1>
                </div>

                <Button className='col-12 btnmove mb-3 ' style={{ backgroundColor:'#F900C0', fontSize:'16px',  color:'#000000'}} size='lg'> <b>LOGIN</b> 
                </Button>
                <br></br>
                <div className='d-flex justify-content-center mb-5' style={{color:'#FFFFFF',fontSize:'14px' , textDecoration:'underline'}}>             
                       <Link to="/registermember">
                       <b>Register here</b>
                       </Link>
                                       
                </div>



                <br></br>
               
            </Container>
        </Container>
    )
  }
}
export default Login
