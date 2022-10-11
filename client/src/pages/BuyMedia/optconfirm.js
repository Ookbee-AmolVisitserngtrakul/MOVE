import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../Appbuymedia.css';
import { Button, Container, Row, Col ,input ,icon , Card } from 'react-bootstrap';
import buynow from './buynow';
import { BsGeoAltFill , BsChevronDown, BsTelephone,BsWalletFill ,BsFillChatSquareTextFill ,BsFacebook ,BsLine,BsTwitter } from "react-icons/bs";


class OptConFirm extends Component {
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
                            src='opt.png'
                            className='img-fluid shadow-2-strong'
                            alt=''
                        />  
                        
                </div>    
                <div className='d-flex justify-content-center mt-2 mb-2' style={{color:'#FFFFFF',fontSize:'24px'}}>             
                        <b>OPT</b>                           
                </div>
                <div className='d-flex justify-content-center' style={{color:'#FFFFFF',fontSize:'14px'}}>             
                        <b>Please enter the OTP sent your mobile number</b>               
                </div>
                <br></br>
                <div className='row mt-5 mb-5'>
                    
                    <div className='col-2'>
                        <input class="form-control" type="text" placeholder="_"/>
                    </div>
                    <div className='col-2'>
                        <input class="form-control" type="text" placeholder="_"/>
                    </div>
                    <div className='col-2'>
                        <input class="form-control" type="text" placeholder="_"/>
                    </div>
                    <div className='col-2'>
                        <input class="form-control" type="text" placeholder="_"/>
                    </div>
                    <div className='col-2'>
                        <input class="form-control" type="text" placeholder="_"/>
                    </div>
                    <div className='col-2'>
                        <input class="form-control" type="text" placeholder="_"/>
                    </div>
                </div>

                <div className='d-flex justify-content-center mb-3' style={{color:'#585858',fontSize:'14px'}}>             
                        <b>Don’t receive an OTP?</b>               
                </div>
                <div className='d-flex justify-content-center mb-5' style={{color:'#FFFFFF',fontSize:'16px' ,textDecoration:'underline'}}>             
                        <b>Resent OTP</b>               
                </div>


                <Link to="/optsuscess">
                    <Button className='col-12 btnmove mb-2 ' style={{ backgroundColor:'#F900C0', fontSize:'16px',  color:'#000000'}} size='lg'> <b>CONFIRM </b> 
                    </Button>
                </Link>
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            

                </Container>

        </Container>

    
    )
  }
}
export default OptConFirm
