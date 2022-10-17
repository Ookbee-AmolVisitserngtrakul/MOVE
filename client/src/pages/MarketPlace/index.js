import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../Appbuymedia.css';
import { Button, Container, Row, Col ,input ,icon , Card } from 'react-bootstrap';
import { BsGeoAltFill , BsTelephone,BsWalletFill ,BsFacebook ,BsLine,BsTwitter } from "react-icons/bs";


class MarketPlace extends Component {
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
                {/* <Link to="/about">
                    <Button variant="outline-light" size="lg">
                        <about>
                    </Button>
                </Link> */}
                <div className='textsize' >
                <b style={{color:'#FFFFFF'}}> MARKET<b style={{color:'#F900C0'}}> PLACE</b> </b> 
                </div>
                <div className="col-md-12">
                    <select className="form-select mt-3" required defaultValue={0}>
                                                    <option disabled value="0"><i class="bi bi-geo-alt-fill"> </i>Location</option>
                                                    <option value="1">10,000 - 20,000 บาท</option>
                                                    <option value="2">20,000 - 50,000 บาท</option>
                                                    <option value="3">50,000 - 80,000 บาท</option>
                                                    <option value="4">80,000 - 100,000 บาท</option>
                                                    <option value="5">มากกว่า 100,000 บาท</option>
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
                                                    <option value="1">10,000 - 20,000 บาท</option>
                                                    <option value="2">20,000 - 50,000 บาท</option>
                                                    <option value="3">50,000 - 80,000 บาท</option>
                    </select>
                    </div>
                    <div className='col-6'  style={{borderLeft:'solid', borderWidth:'2px',  borderColor:'white', }}>
                    <select style={{backgroundColor:'#000000', borderLeft:'none', fontSize:'12px',  borderRight:'none', borderTop:'none',  borderBottom:'none',  color:'white'}} className="form-select " required defaultValue={0}>
                                                    <option disabled value="0"><i class="bi bi-geo-alt-fill"></i>By price</option>
                                                    <option value="1">10,000 - 20,000 บาท</option>
                                                    <option value="2">20,000 - 50,000 บาท</option>
                                                    <option value="3">50,000 - 80,000 บาท</option>
                                                   
                    </select>
                    </div>
                    <hr className='mt-2' style={{color:'white' ,borderWidth:'2px' }}></hr>          
                </div>
                
                <div className="col-md-12 ">
                    <select  style={{backgroundColor:'#000000', fontSize:'12px',  borderLeft:'none', borderRight:'none', borderTop:'none',  borderBottom:'none',  color:'white'}} className="form-select mt-3" required defaultValue={0}>
                                                    <option disabled value="0">media Type</option>
                                                    <option value="1">10,000 - 20,000 บาท</option>
                                                    <option value="2">20,000 - 50,000 บาท</option>
                                                    <option value="3">50,000 - 80,000 บาท</option>
                                                    <option value="4">80,000 - 100,000 บาท</option>
                                                    <option value="5">มากกว่า 100,000 บาท</option>
                    </select>
                  
                </div>
                <hr className='mt-2' style={{color:'white' ,borderWidth:'2px'}}></hr> 
                <br></br>

              
                <Link to="/selectplace">
                <Button className='col-12 btnmove' style={{ backgroundColor:'#F900C0', fontSize:'16px',  color:'#000000'}} size='lg'> <b>SEARCH</b> 

                </Button>
                </Link>
           
               
                <Row>
                    <br/>
                </Row>
                <br></br>

                <img
                src='showdcbig.png'
                className='img-fluid shadow-2-strong'
                alt=''
                />
                
                <h1 className='mt-3' style={{color:'#FFFFFF', fontSize:'16px', textDecoration:'underline'}}>Show DC</h1> <br></br>

                <a  style={{color:'#FFFFFF'}}> <BsGeoAltFill></BsGeoAltFill> Huai khwang , Bangkok</a>
                <br></br>
                <br></br>

                <div className='row'>
                    <div className='col-8'>
                    <a  style={{color:'#FFFFFF'}}> Floor price </a> <br></br>
                    <Link to="/selectplace">
                    <b style={{color:'#F900C0'}}> 24,000฿ </b>  
                    </Link>
                     
                      

                    </div>
                    <div className='col-4 '>
                        <Button style={{backgroundColor:'#FFFFFF', color:'#000000'}}> View </Button>
                    </div>
                </div>

                <br></br>

                <img
                src='emporiumbig.png'
                className='img-fluid shadow-2-strong'
                alt=''
                />
                
                <h1 className='mt-3' style={{color:'#FFFFFF' , fontSize:'16px',textDecoration:'underline'}}>EMPORIUM & EMQUARTIER</h1> <br></br>

                <a  style={{color:'#FFFFFF'}}> <BsGeoAltFill></BsGeoAltFill> Huai khwang , Bangkok</a>
                <br></br>
                <br></br>

                <div className='row'>
                    <div className='col-8'>

                    <a  style={{color:'#FFFFFF'}}> Floor price </a> <br></br>
                    <b style={{color:'#F900C0'}}> 24,000฿ </b>  

                    </div>
                    <div className='col-4 '>
                        <Button style={{backgroundColor:'#FFFFFF', color:'#000000'}}> View </Button>
                    </div>
                </div>

                <br></br>

                <img
                src='paragonbig.png'
                className='img-fluid shadow-2-strong'
                alt=''
                />
                
                <h1 className='mt-3' style={{color:'#FFFFFF' ,  fontSize:'16px' ,textDecoration:'underline'}}> PARC PARAGON + THE 90 DEGREE & INTERCHANGE 21 </h1> <br></br>

                <a  style={{color:'#FFFFFF'}}> <BsGeoAltFill></BsGeoAltFill> Huai khwang , Bangkok</a>
                <br></br>
                <br></br>

                <div className='row'>
                    <div className='col-8'>

                    <a  style={{color:'#FFFFFF'}}> Floor price </a> <br></br>
                    <b style={{color:'#F900C0'}}> 24,000฿ </b>  

                    </div>
                    <div className='col-4 '>
                        <Button style={{backgroundColor:'#FFFFFF', color:'#000000'}}> View </Button>
                    </div>
                </div>

                <br></br>

   



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
export default MarketPlace
