import React, { Component } from 'react';
import '../../Appbuymedia.css';
import { Button, Container, Row, Col ,input ,icon , Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsGeoAltFill , BsChevronDown, BsTelephone,BsWalletFill ,BsFillChatSquareTextFill ,BsFacebook ,BsLine,BsTwitter } from "react-icons/bs";


class OptSuccess extends Component {
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
                            src='optsuscess.png'
                            className='img-fluid shadow-2-strong'
                            alt=''
                        />  
                        
                </div>    
                <div className='d-flex justify-content-center mt-2 mb-4' style={{color:'#FFFFFF',fontSize:'24px'}}>             
                        <b>successful payment</b>                           
                </div>
                <div className='d-flex justify-content-center' style={{color:'#FFFFFF',fontSize:'14px'}}>             
                        <b>Details of the media you purchased </b>               
                </div>
                <div className='d-flex justify-content-center' style={{color:'#FFFFFF',fontSize:'14px'}}>             
                        <b>have been sent to your email.</b>               
                </div>
                <div className='d-flex justify-content-center' style={{color:'#FFFFFF',fontSize:'14px'}}>             
                        <b>care@gmail.com</b>               
                </div>
                <br></br>
               



                <Link to="/sentgift">
                <Button className='col-12 btnmove mb-2 ' style={{ backgroundColor:'#F900C0', fontSize:'16px',  color:'#000000'}} size='lg'> <b> UPLOAD ARTWORK </b> 
                </Button>
                </Link>
              
                <br></br>
                <div className='d-flex justify-content-center' style={{color:'#FFFFFF',fontSize:'14px' ,textDecoration:'underline'}}>             
                        <b>Sent as gift</b>               
                </div>
                <br></br>
                <br></br>
                <br></br>

            

                </Container>

        </Container>

    
    )
  }
}
export default OptSuccess
