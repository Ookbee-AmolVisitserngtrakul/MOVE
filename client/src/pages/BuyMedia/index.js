import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../Appbuymedia.css';
import { Button, Container, Row, Col ,input ,icon , Card } from 'react-bootstrap';


import { BsGeoAltFill , BsTelephone,BsWalletFill ,BsFacebook ,BsLine,BsTwitter } from "react-icons/bs";


class BuyMedia extends Component {
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
            <div className='banner' style={{backgroundImage:"url('" + process.env.PUBLIC_URL + "/picture1.png')",backgroundRepeat: 'no-repeat',}}>
            </div>
            <Container style={{paddingTop:'1em',backgroundColor:'#000000'}} >
            <div  style={{ color:'#FFFFFF'}}>
                    <div className='textsize'>
                            <b style={{fontSize:'24px'}}> EASY BUYING PROCESS </b> <br></br>
                            <a style={{fontSize:'12px'}}> You can easily book a LED billboard on our terms. <br></br>
                            Reservation in NFT format </a>

                    </div>
                        <div className='row justifly-item-center' >
                            <div className='col-4 mt-4'>
                                <div className='icon' style={{backgroundImage:"url('" + process.env.PUBLIC_URL + "/icon1.png')",backgroundRepeat: 'no-repeat',}}>
                                </div>
                            </div>
                            <div className='col-8 mt-4'  >
                                <h1 style={{fontSize:'12px'}}>Buy media</h1>
                                <h2 style={{fontSize:'12px'}}>Lorem Ipsum is simply dummy text</h2>
                            </div>
                            <div className='col-4 mt-4'>
                                <div className='icon' style={{backgroundImage:"url('" + process.env.PUBLIC_URL + "/icon2.png')",backgroundRepeat: 'no-repeat',}}>
                                </div>
                            </div>
                            <div className='col-8 mt-4 '  >
                                <h1 style={{fontSize:'12px'}}>Upload artwork</h1>
                                <h2 style={{fontSize:'12px'}}>Lorem Ipsum is simply dummy text</h2>
                            </div>
                            <div className='col-4 mt-4'>
                                <div className='icon' style={{backgroundImage:"url('" + process.env.PUBLIC_URL + "/icon3.png')",backgroundRepeat: 'no-repeat',}}>
                                </div>
                            </div>
                            <div className='col-8 mt-4' >
                                <h1 style={{fontSize:'12px'}}>Approve artwork</h1>
                                <h2 style={{fontSize:'12px'}}>Lorem Ipsum is simply dummy text</h2>
                            </div>
                            <div className='col-4 mt-4'>
                                <div className='icon' style={{backgroundImage:"url('" + process.env.PUBLIC_URL + "/icon4.png')",backgroundRepeat: 'no-repeat',}}>
                                </div>
                            </div>
                            <div className='col-8 mt-4' >
                                <h1 style={{fontSize:'12px'}}>Buy media</h1>
                                <h2 style={{fontSize:'12px'}}>Lorem Ipsum is simply dummy text</h2>
                            </div>
                            
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                    </div>
            </div>
        
        </Container>

            <div style={{paddingTop:'0em', backgroundColor:'#FFFFFF'}}>
                
                <div className='mb-0 ' style={{ paddingLeft:'1em', color:'#FFFFFF', backgroundColor:'#1F2432'}}>
                <div className='textsize '>
                        <br></br>
                    <b>ABOUT OUR</b> <br></br>
                    <b  style={{color:'#F900C0'}}> MEDIA PACKAGE </b> <br></br>
                    
                </div>
                <div className='textsize-sm mt-2 mb-4'>
                    <a>
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s
                    </a> 
                    <br></br>
                    <br></br>
                    <a>
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s

                    </a>
                </div>
                        <br></br>           
                </div>

            </div>
            
            
         <Container style={{paddingTop:'1em',backgroundColor:'#000000'}}>    

                <div className='textsize' >
                <b style={{color:'#FFFFFF'}}> BUYNOW</b> 
                </div>
                

                <div className="col-md-12">
                    <select className="form-select mt-3" required defaultValue={0}>
                                                    <option disabled value="0"><i className="bi bi-geo-alt-fill"></i>Location</option>
                                                    <option value="1">Lorem Ipsum is simply dummy text</option>
                                                    <option value="2">Lorem Ipsum is simply dummy text</option>
                                                    <option value="3">Lorem Ipsum is simply dummy text</option>
                                                    <option value="4">Lorem Ipsum is simply dummy text</option>
                                                    <option value="5">Lorem Ipsum is simply dummy text</option>
                    </select>                
                </div>    
                <br></br>
                
                <div className='textsize-sm'>
                 <b style={{color:'#F900C0'}}> DETAIL</b> 
                </div>
                <br/>
                
                <div className=' row'> 
                    <div className='col-6 '>
                    <input className='form-control'  style={{backgroundColor:'#000000', fontSize:'12px', borderLeft:'none', borderRight:'none', borderTop:'none',  borderBottom:'none',  color:'white'}} type="datetime" value="12-06-2022" id="starttime" name="starttime"></input>
                    </div>
                   
                    <div className='col-6' style={{borderLeft:'solid', borderWidth:'2px',  borderColor:'white', }}>
                    <input className='form-control'   style={{backgroundColor:'#000000',  fontSize:'12px',  borderLeft:'none', borderRight:'none', borderTop:'none',  borderBottom:'none',  color:'white'}} type="datetime" value="17-07-2022" id="endtime" name="endtime"></input>
                    </div>        
                    <hr className='mt-2' style={{color:'white' ,borderWidth:'2px' }}></hr>
                  
                </div>
               
                <div className='row'> 
                    <div className='col-6'>
                    <select style={{backgroundColor:'#000000', borderLeft:'none',  fontSize:'12px', borderRight:'none', borderTop:'none',  borderBottom:'none',  color:'white' }} className="form-select " required defaultValue={0}>
                                                    <option disabled value="0">ALL media</option>
                                                    <option value="1">Lorem Ipsum is simply dummy text</option>
                                                    <option value="2">Lorem Ipsum is simply dummy text</option>
                                                    <option value="3">Lorem Ipsum is simply dummy text</option>
                    </select>
                    </div>
                    <div className='col-6'  style={{borderLeft:'solid', borderWidth:'2px',  borderColor:'white', }}>
                    <select style={{backgroundColor:'#000000', borderLeft:'none', fontSize:'12px',  borderRight:'none', borderTop:'none',  borderBottom:'none',  color:'white'}} className="form-select " required defaultValue={0}>
                                                    <option disabled value="0"><i className="bi bi-geo-alt-fill"></i>By price</option>
                                                    <option value="1">Lorem Ipsum is simply dummy text</option>
                                                    <option value="2">Lorem Ipsum is simply dummy text</option>
                                                    <option value="3">Lorem Ipsum is simply dummy text</option>
                                                   
                    </select>
                    </div>
                    <hr className='mt-2' style={{color:'white' ,borderWidth:'2px' }}></hr>          
                </div>
                
                <div className="col-md-12 ">
                    <select  style={{backgroundColor:'#000000', fontSize:'12px',  borderLeft:'none', borderRight:'none', borderTop:'none',  borderBottom:'none',  color:'white'}} className="form-select mt-3" required defaultValue={0}>
                                                    <option disabled value="0">media Type</option>
                                                    <option value="1">Lorem Ipsum is simply dummy text</option>
                                                    <option value="2">Lorem Ipsum is simply dummy text</option>
                                                    <option value="3">Lorem Ipsum is simply dummy text</option>
                                                    <option value="4">Lorem Ipsum is simply dummy text</option>
                                                    <option value="5">Lorem Ipsum is simply dummy text</option>
                    </select>
                  
                </div>
                <hr className='mt-2' style={{color:'white' ,borderWidth:'2px'}}></hr> 
                <br></br>

              
                <Link to="/buynow">
                <Button className='col-12 btnmove' style={{ backgroundColor:'#F900C0', fontSize:'16px',  color:'#000000'}} size='lg'> <b>SEARCH</b> 
                </Button>
                </Link>
                
               
                <Row>
                    <br/>
                </Row>


            </Container>


            <div style={{paddingTop:'0em', backgroundColor:'#FFFFFF'}}>
                
                <div className='mb-2 ' style={{ paddingLeft:'1em', color:'#FFFFFF', backgroundColor:'#1F2432'}}>
                <div className='textsize '>
                        <br></br>
                      
                        <progress  value="50" max="100"> 32% </progress>
                        <br></br>
                    <b>WHAT'S OUR </b><b  style={{color:'#F900C0'}}> HOT</b> <br></br>
                    
                </div>
                <div className='textsize-sm mt-2 mb-4' style={{paddingRight:'1em' }}>
                    <div className='row'>
                        <div className='col-6 mt-4'>
                        <Link to="/selecttime">
                            <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src="/showdc.png" />
                            <Card.Body>
                                <Card.Title style={{color:'black', fontSize:'14px'}}>SHOW DC</Card.Title>
                                <Card.Text style={{color:'black' , fontSize:'9px'}}>
                                <BsGeoAltFill></BsGeoAltFill>
                                EMPORIUM & EMQUARTIER.
                                </Card.Text>
                                <b style={{color:'#F900C0' , fontSize:'18px'}}>24,000฿</b>
                                
                            </Card.Body>
                            </Card>
                        </Link>
                        </div>
                        <div className='col-6 mt-4'>
                            <Card style={{ width: '10rem' }}>
                                <Card.Img variant="top" src="/empoium.png" />
                                <Card.Body>
                                    <Card.Title style={{color:'black', fontSize:'14px'}}>EMPORIUM</Card.Title>
                                    <Card.Text style={{color:'black' , fontSize:'9px'}}>
                                    <BsGeoAltFill></BsGeoAltFill>
                                    EMPORIUM & EMQUARTIER.
                                    </Card.Text>
                                    <b style={{color:'#F900C0' , fontSize:'18px'}}>14,000฿</b>
                                </Card.Body>
                                </Card>
                        </div>
                        <div className='col-6 mt-2 mb-2'>
                                <Card style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src="/myidol.png" />
                                    <Card.Body>
                                        <Card.Title style={{color:'black', fontSize:'14px'}}>MY IDOL</Card.Title>
                                        <Card.Text style={{color:'black' , fontSize:'9px'}}>
                                        <BsGeoAltFill></BsGeoAltFill>
                                        EMPORIUM & EMQUARTIER.
                                        </Card.Text>
                                        <b style={{color:'#F900C0' , fontSize:'18px'}}>24,000฿</b>
                                        
                                    </Card.Body>
                                    </Card>
                        </div>
                        <div className='col-6 mt-2 mb-2'>
                                <Card style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src="/ilovenft.png" />
                                    <Card.Body>
                                        <Card.Title style={{color:'black', fontSize:'14px'}}>I LOVE NFT</Card.Title>
                                        <Card.Text style={{color:'black' , fontSize:'9px'}}>
                                        <BsGeoAltFill></BsGeoAltFill>
                                        EMPORIUM & EMQUARTIER.
                                        </Card.Text>
                                        <b style={{color:'#F900C0' , fontSize:'18px'}}>24,000฿</b>
                                        
                                    </Card.Body>
                                    </Card>
                        </div>
                    </div>

                </div>
                        <br></br>           
                </div>

            </div>


            <Container fluid style={{padding:0,margin:0 }}>   
             
                <div className='banner1 mt-2' style={{backgroundImage:"url('" + process.env.PUBLIC_URL + "/banner1.png')",backgroundRepeat: 'no-repeat',fontSize:'24px',}}>
                        
                            <b style={{ marginLeft:'0.5em', }} >THIS MONTH’S</b>
                            <b style={{ marginLeft:'0.0em', color:'#F900C0'}}>SHOECASE</b> <br></br>
                            <a style={{ marginLeft:'1em',  fontSize:'12px'}}>The best media of the month </a>  <br></br>
                            <a style={{ marginLeft:'1em',  fontSize:'12px'}}> will be displayed here.</a>
                        
                </div>
                <img
                src='picture2.png'
                className='img-fluid shadow-2-strong'
                alt=''
                />
                <div className='row'>
                    <div className='col-4 mt-1 mb-2'>
                    <img 
                        src='picture3.png'
                        className='img-fluid shadow-2-strong'
                        alt=''
                        />

                    </div>
                    <div className='col-4 mt-1 mb-2'>
                    <img
                        src='picture4.png'
                        className='img-fluid shadow-2-strong'
                        alt=''
                        />

                    </div>
                    <div className='col-4 mt-1 mb-2'>
                    <img
                        src='picture5.png'
                        className='img-fluid shadow-2-strong'
                        alt=''
                        />

                    </div>
                </div>


                <Container style={{paddingTop:'1em',backgroundColor:'#000000' ,color:'#FFFFFF'}}>    

                    <div className='textsize mt-2 mb-3' >
                    <b style={{color:'#FFFFFF'}}> LAST CHANCE TO BUY</b> 
                    </div>

                    <div className='row mb-2'>
                        <div className='col-6 mb-2'>
                            <img
                            src='picture6.png'
                            className='img-fluid shadow-2-strong'
                            alt=''
                            />                                                  
                        </div>
                        <div className='col-6' style={{fontSize:'10px'}}>
                            <b>BASE</b><br></br>
                            <BsGeoAltFill></BsGeoAltFill>
                            <a>Huai Khwang, Bangkok</a><br></br>
                            <a>Available pack : 6</a><br></br>
                            <a>Date : 12/06/2565 - 15/07/2565</a><br></br>
                            <b style={{color:'#F900C0' , fontSize:'18px'}}>24,000฿</b> <br></br>
                            <Link to="/selecttime">
                            <Button className='col-6 ' style={{ backgroundColor:'#FFFFFF', fontSize:'10px',  color:'#000000'}} size='sm'> <b>Select</b>
                            </Button> 
                            </Link>
                        </div>
                        <hr></hr>
                        <div className='col-6 mb-2'>
                            <img
                            src='picture7.png'
                            className='img-fluid shadow-2-strong'
                            alt=''
                            />                                                  
                        </div>
                        <div className='col-6' style={{fontSize:'10px'}}>
                            <b>TWIN TUBE</b><br></br>
                            <BsGeoAltFill></BsGeoAltFill>
                            <a>Huai Khwang, Bangkok</a><br></br>
                            <a>Available pack : 6</a><br></br>
                            <a>Date : 12/06/2565 - 15/07/2565</a><br></br>
                            <b style={{color:'#F900C0' , fontSize:'18px'}}>24,000฿</b><br></br>
                            <Button className='col-6 ' style={{ backgroundColor:'#FFFFFF', fontSize:'10px',  color:'#000000'}} size='sm'> <b>Select</b>
                            </Button> 
                        </div>
                        <hr></hr>
                        <div className='col-6 mb-2'>
                            <img
                            src='picture8.png'
                            className='img-fluid shadow-2-strong'
                            alt=''
                            />                                                  
                        </div>
                        <div className='col-6' style={{fontSize:'10px'}}>
                            <b>EASTIN MAKKHASAN</b><br></br>
                            <BsGeoAltFill></BsGeoAltFill>
                            <a>Huai Khwang, Bangkok</a><br></br>
                            <a>Available pack : 6</a><br></br>
                            <a>Date : 12/06/2565 - 15/07/2565</a><br></br>
                            <b style={{color:'#F900C0' , fontSize:'18px'}}>24,000฿</b><br></br>
                            <Button className='col-6 ' style={{ backgroundColor:'#FFFFFF', fontSize:'10px',  color:'#000000'}} size='sm'> <b>Select</b>
                            </Button> 
                        </div>
                        <hr></hr>
                    </div>

                        <br></br>

                
                </Container>

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
export default BuyMedia
