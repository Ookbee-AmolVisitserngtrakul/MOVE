import React, { Component } from 'react';
import '../../Appbuymedia.css';
import { Button, Container, Row, Col ,input ,icon , Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsGeoAltFill , BsChevronDown, BsTelephone,BsWalletFill ,BsFillChatSquareTextFill ,BsFacebook ,BsLine,BsTwitter } from "react-icons/bs";


class PayMent extends Component {
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



                <div className='textsize' >
                <b style={{color:'#FFFFFF'}}> PAYMENT</b> 
                </div>

                <b style={{color:'#FFFFFF'}}>INFOR </b> 
                <b  style={{color:'#F900C0'}}> PAYMENT </b> <br></br>

                <div className=' row'> 
                    <div className='col-12 '>
                    <br></br>
                    <input className='form-control'  style={{backgroundColor:'#000000', fontSize:'12px', borderLeft:'none', borderRight:'none', borderTop:'none',  borderBottom:'none',  color:'white'}} type="text" value="Care@gmail.com" id="starttime" name="starttime"></input>
                    </div>
                    <hr className='mt-2' style={{color:'white' ,borderWidth:'2px' }}></hr>
                    <div className='col-12' >
                    <input className='form-control'   style={{backgroundColor:'#000000',  fontSize:'12px',  borderLeft:'none', borderRight:'none', borderTop:'none',  borderBottom:'none',  color:'white'}} type="text" value="tam" id="endtime" name="endtime"></input>
                    </div>        
                    <hr className='mt-2' style={{color:'white' ,borderWidth:'2px' }}></hr>
                    <div className='col-12' >
                    <input className='form-control'   style={{backgroundColor:'#000000',  fontSize:'12px',  borderLeft:'none', borderRight:'none', borderTop:'none',  borderBottom:'none',  color:'white'}} type="text" value="popopop" id="endtime" name="endtime"></input>
                    </div>        
                    <hr className='mt-2' style={{color:'white' ,borderWidth:'2px' }}></hr>
                  
                </div>

                
                <div className='row'>
                    <div className='col-10'>
                        <div className='textsize' >
                            <b style={{color:'#FFFFFF'}}> SAMARY</b> 
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='textsize-sm mt-3' >
                            <b style={{color:'#FFFFFF',textDecoration:'underline'}}> EDIT</b> 
                        </div>
                    </div>
                </div>
    

                <div style={{ fontSize:'24px',}}>
                               
                               
                                <div class="form-check mb-3 mt-2" style={{fontSize:'14px', backgroundColor:'#1F2432' , color:'#FFFFFF' }}>
                                   
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
                            <div className='row' style={{fontSize:'16px'}}>
                                <div className='col-5 '>
                                <label class="form-check-label" for="defaultCheck1">
                                    
                                </label>
                                </div>
                                <div className='col-7 '>
                                <label>Total price <b style={{color:'#F900C0'}}>176,000฿</b> </label>   
                                </div>
                            </div>
                            
                            
                            </div>

                            <br></br>

                   
                            </div>
    
                        </div>


                </div>  
                    
            </Container> 

            <Container style={{paddingTop:'1em', backgroundColor:'#000000'}}> 
                <div className='row'>
                        <div className='col mt-3 mb-3'>
                  
                            <div className="vl">
                                <b  style={{color:'#FFFFFF'}}> PAYMENT</b> <b  style={{color:'#F900C0'}}> METHOD </b> <br></br>
                            </div>
                        </div>  
                </div>
            
            </Container>
            <Container style={{paddingTop:'1em', backgroundColor:'#01A4FF' , opacity:'52%' }}> 
                <div className='row'>
                        <div className='col mt-3 mb-3'>
                                <img
                                    src='iconvisa.png'
                                    className='img-fluid shadow-2-strong'
                                    alt=''
                                />

                                <b  style={{color:'#4A4A4A' , fontSize:'12px'}}> Credit or Debit card</b> <b  style={{color:'#F900C0'}}> </b> <br></br>
                           
                        </div>  
                </div>
            
            </Container>
            <Container style={{paddingTop:'1em', backgroundColor:'#FFFFFF'}}> 
                <div className='row'>
                        <div className='col mt-3 mb-3'>
                                <img
                                    src='iconqr.png'
                                    className='img-fluid shadow-2-strong'
                                    alt=''
                                />

                                <b  style={{color:'#4A4A4A' , fontSize:'12px'}}> QECODE </b> <b  style={{color:'#F900C0'}}> </b> <br></br>
                           
                        </div>  
                </div>
            
            </Container>


            <Container style={{paddingTop:'1em', backgroundColor:'#000000'}}> 
                <div className='row'>
                        <div className='col mt-3 mb-3'>
                        <Link to="/optconfirm">
                        <Button className='col-12 btnmove mb-2 ' style={{ backgroundColor:'#F900C0', fontSize:'16px',  color:'#000000'}} size='lg'> <b>CONFIRM </b> 
                        </Button>
                        </Link>
                       
                        
                        </div>
                        <div className='d-flex justify-content-center mb-5'>

                            <b style={{color:'#FFFFFF',textDecoration:'underline'}}> BUYMORE</b>   
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
export default PayMent
