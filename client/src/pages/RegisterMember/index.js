import React, { Component } from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import { Button, InputGroup ,Form , Container, Row, Col } from 'react-bootstrap';
import { BsEnvelopeFill , BsLockFill , BsChevronDown, BsTelephone,BsWalletFill ,BsFillChatSquareTextFill ,BsFacebook ,BsLine,BsTwitter } from "react-icons/bs";



class RegisterMember extends Component {
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
                    <h1 style={{ fontSize:'24px'}}>REGISTER</h1>
                </div>


                <div className=' row'> 
                    <div className='col-12 '>
                    <br></br>
                    <input className='form-control'  style={{backgroundColor:'#000000', fontSize:'12px', borderLeft:'none', borderRight:'none', borderTop:'none',  borderBottom:'none',  color:'white'}} type="text" value="Phone number" id="starttime" name="starttime"></input>
                    <hr className='mt-2' style={{color:'white' ,borderWidth:'2px' }}></hr>
                    </div>
                    <div className='col-12' >
                    <input className='form-control'   style={{backgroundColor:'#000000',  fontSize:'12px',  borderLeft:'none', borderRight:'none', borderTop:'none',  borderBottom:'none',  color:'white'}} type="text" value="email" id="endtime" name="endtime"></input>
                    <hr className='mt-2' style={{color:'white' ,borderWidth:'2px' }}></hr>
                    </div>        
                    <div className='col-12' >
                    <input className='form-control'   style={{backgroundColor:'#000000',  fontSize:'12px',  borderLeft:'none', borderRight:'none', borderTop:'none',  borderBottom:'none',  color:'white'}} type="text" value="Frist name" id="endtime" name="endtime"></input>
                    <hr className='mt-2' style={{color:'white' ,borderWidth:'2px' }}></hr>
                    </div>         
                    <div className='col-12' >
                    <input className='form-control'   style={{backgroundColor:'#000000',  fontSize:'12px',  borderLeft:'none', borderRight:'none', borderTop:'none',  borderBottom:'none',  color:'white'}} type="text" value="Last name" id="endtime" name="endtime"></input>
                    <hr className='mt-2' style={{color:'white' ,borderWidth:'2px' }}></hr>
                    </div>
                    <div className='col-12' >
                    <label style={{ color:'#F900C0' , fontSize:'15px'}}>Password</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" style={{ border:'none' }}><BsLockFill></BsLockFill></InputGroup.Text>
                        <Form.Control
                        placeholder="Parssword"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        type='password'
                        />
                    </InputGroup>
                    <label style={{fontSize:'8px'}}>8-16 character password contains at least one <br></br> uppercase(A-Z), one 
                    lowercase(a-z) and a number(0-9)</label>
                    </div>
                   

                    <div className='col-12' >
                    <br></br>
                    <label style={{fontSize:'15px'}}>Confirm password</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><BsLockFill></BsLockFill></InputGroup.Text>
                        <Form.Control
                        placeholder="Parssword"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        type='password'
                        />
                    </InputGroup>
                    
                    </div>             
                 
                  
                </div>

                <br></br>


             
                <Link to="/profile">
                <Button className='col-12 btnmove mb-3 ' style={{ backgroundColor:'#F900C0', fontSize:'16px',  color:'#000000'}} size='lg'> <b>Register</b> 
                </Button>
                </Link>
               
                <br></br>
                <div className='d-flex justify-content-center mb-5' style={{color:'#FFFFFF',fontSize:'14px' , textDecoration:'underline'}}>             
                    <Link to="/login"><b>Or Login here</b></Link>         
                </div>



                <br></br>
               
            </Container>
        </Container>
    )
  }
}
export default RegisterMember
