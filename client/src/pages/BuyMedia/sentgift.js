import React, { Component } from 'react';
import '../../Appbuymedia.css';
import { Button, InputGroup , Form , Container, Row, Col ,input ,icon , Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsEnvelopeFill , BsLockFill , BsCreditCard2BackFill, BsTelephone,BsWalletFill ,BsFillChatSquareTextFill ,BsFacebook ,BsLine,BsTwitter } from "react-icons/bs";


class SentGift extends Component {
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
             
                <Container style={{paddingTop:'1em', backgroundColor:'#000000'}}>  

                <div className='d-flex justify-content-center'>
                    
                        <img
                            src='gift.png'
                            className='img-fluid shadow-2-strong'
                            alt=''
                        />  
                        
                </div>    
                <div className='d-flex justify-content-center mt-2 mb-4' style={{color:'#FFFFFF',fontSize:'24px'}}>             
                        <b>Sent as gift</b>                           
                </div>
                <div className='d-flex justify-content-center' style={{color:'#FFFFFF',fontSize:'14px'}}>             
                        <b>You can send media as a gift to your friends. </b>               
                </div>
                <div className='d-flex justify-content-center' style={{color:'#FFFFFF',fontSize:'14px'}}>             
                        <b>by entering the wallet number</b>               
                </div>
                <div className='d-flex justify-content-center' style={{color:'#FFFFFF',fontSize:'14px'}}>             
                        <b></b>               
                </div>
                <br></br>
               

                    
                <div class="form-check mb-3 mt-3" style={{fontSize:'14px', backgroundColor:'#1F2432' , color:'#FFFFFF' }}>
                                   
                                   <div className='row'>
                                       <div className='col-3 mt-4'>
                                                <img
                                                src='showdcverbig.png'
                                                className='img-fluid shadow-2-strong'
                                                alt=''
                                                />
                                                </div>
                                                <div className='col-9 mt-3 mb-3'>
                                                <label class="form-check-label" for="defaultCheck1">
                                                PARC PARAGON + THE 90 DEGREE & INTERCHANGE 21
                                                </label>
                                                <br></br>
                                                <label style={{fontSize:'12px'}}>Period : 12-04-2022-12-04-2022  </label>
                                                <br></br>
                                                <label>Total price <a style={{color:'#F900C0'}}>88,000฿</a> </label> 

                                       </div>

                                   </div>                               
                </div>


                <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" style={{ border:'none' }}><BsCreditCard2BackFill></BsCreditCard2BackFill></InputGroup.Text>
                        <Form.Control
                        placeholder="werwowko-wk4567"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        type='password'
                        />
                </InputGroup>

         

                <Button className='col-12 btnmove mb-2 mt-3' style={{ backgroundColor:'#F900C0', fontSize:'16px',  color:'#000000'}} size='lg'> <b>SUMMIT </b> 
                </Button>

                <br></br>
                <br></br>
                <br></br>

             

                </Container>

        </Container>

    
    )
  }
}
export default SentGift
