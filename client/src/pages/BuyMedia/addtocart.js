import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../Appbuymedia.css';
import { Button, Container, Row, Col ,input ,icon , Card } from 'react-bootstrap';
import buynow from './buynow';
import { BsGeoAltFill , BsChevronDown, BsTelephone,BsWalletFill ,BsFillChatSquareTextFill ,BsFacebook ,BsLine,BsTwitter } from "react-icons/bs";


class AddToCart extends Component {
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
             
         <Container style={{paddingTop:'1em',backgroundColor:'#000000'}}>  



                <div className='textsize' >
                <b style={{color:'#FFFFFF'}}> YOUR CART</b> 
                </div>


                <div style={{ fontSize:'24px',}}>
                               

                                <div class="form-check mb-3 mt-2" style={{fontSize:'14px', backgroundColor:'#1F2432' , color:'#FFFFFF' }}>
                                    <input class="form-check-input mt-2" type="checkbox" value="" id="defaultCheck1"></input>
                                    <div className='row'>
                                        <div className='col-3 mt-2'>
                                        <img
                                        src='showdcsmal.png'
                                        className='img-fluid shadow-2-strong'
                                        alt=''
                                        />
                                        </div>
                                        <div className='col-9'>
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
                                

                                <div class="form-check mb-3 mt-2" style={{fontSize:'14px', backgroundColor:'#1F2432' , color:'#FFFFFF' }}>
                                    <input class="form-check-input mt-2" type="checkbox" value="" id="defaultCheck1"></input>
                                    <div className='row'>
                                        <div className='col-3 mt-2'>
                                        <img
                                        src='paragonsmal.png'
                                        className='img-fluid shadow-2-strong'
                                        alt=''
                                        />
                                        </div>
                                        <div className='col-9'>
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

                                <br></br>

                             
                </div>
            
              
           



            </Container>



           


            <Container fluid style={{padding:0 }}>   

              
                <div style={{paddingTop:'0em', backgroundColor:'#FFFFFF'}}>
                
                        <div  style={{color:'#000000', backgroundColor:'#FFFFFF'}}>

                            <div style={{  marginLeft:'1em',  marginRight:'1em',  fontSize:'24px',}}>
                            <br></br>
                            <div className="form-check">
                            <input className="form-check-input " type="checkbox" value="" id="defaultCheck1"></input>
                            <div className='row' style={{fontSize:'16px'}}>
                                <div className='col-5 mt-1'>
                                <label class="form-check-label" for="defaultCheck1">
                                    All
                                </label>
                                </div>
                                <div className='col-7 mt-1'>
                                <label>Total price <a style={{color:'#F900C0'}}>176,000฿</a> </label>   
                                </div>
                            </div>
                            
                            
                            </div>



                            <br></br>
                            <Link to="/Login"> 
                            <Button className='col-12 btnmove mb-2 ' style={{ backgroundColor:'#F900C0', fontSize:'16px',  color:'#000000'}} size='lg'> <b>CONFIRM</b> 
                            </Button>
                            </Link>
                           
                            </div>
                            

                            <br></br>

                
                        </div>


                </div>  
                    
            </Container> 

            <Container fluid style={{padding:0,margin:0 }}>   
             
                

          

             <div style={{paddingTop:'0em', backgroundColor:'#FFFFFF'}}>
             
                     <div  style={{ paddingLeft:'1em', color:'#FFFFFF', backgroundColor:'#1F2432'}}>

                         <div className='row'>

                             <div className='col-5 mt-4'>
                             <b  style={{color:'#F900C0'}}> About SPV</b> <br></br>
                             <a  style={{color:'#FFFFFF'}}> Company profile</a> <br></br>
                             <a  style={{color:'#FFFFFF'}}> Newsroom</a> <br></br>
                             <a  style={{color:'#FFFFFF'}}> Investors</a> <br></br>
                             </div>
                             <div className='col-7 mt-4'>
                              <br></br>
                              <a  style={{color:'#FFFFFF'}}> FAQ</a> <br></br>
                              <a  style={{color:'#FFFFFF'}}> Privacy policy</a>
                             </div>

                             <div className='col-5'>
                             <b  style={{color:'#F900C0'}}> We accept</b> <br></br>
                             <a  style={{color:'#FFFFFF'}}> Credit card</a> <br></br>
                             <a  style={{color:'#FFFFFF'}}> Fiat</a> <br></br>
                             <a  style={{color:'#FFFFFF'}}> Pay pal</a> <br></br>
                             </div>
                             <div className='col-7'>
                             <b  style={{color:'#F900C0'}}> Move token</b> <br></br>
                              <a  style={{color:'#FFFFFF'}}> Whitepaper</a> <br></br>
                              <a  style={{color:'#FFFFFF'}}> Developer</a>
                             </div>

                             <div className='col-7  '>
                             <b  style={{color:'#F900C0'}}> Contact</b> <br></br>
                             <a  style={{color:'#FFFFFF'}}> <BsTelephone></BsTelephone> 081-234-5678</a> <br></br>
                             <a  style={{color:'#FFFFFF'}}> <BsWalletFill></BsWalletFill> admin@mail.com </a> <br></br>
                             <a  style={{color:'#FFFFFF'}}> <BsFacebook></BsFacebook>  <BsLine></BsLine>  <BsTwitter></BsTwitter>  </a> <br></br>
                             </div>
                             <div className='col-5'>
                              <br></br>
                              <br></br>
                              
                             </div>

                             


                         </div>

                        
                                 <br></br>           
                     </div>

             </div>  
                 
         </Container> 


           

        </Container>

    
    )
  }
}
export default AddToCart
