import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../Appbuymedia.css';
import { Button, Container, Row, Col ,input ,icon , Card } from 'react-bootstrap';
import { BsGeoAltFill , BsTelephone,BsWalletFill ,BsFacebook ,BsLine,BsTwitter } from "react-icons/bs";


class MyMarketPlace extends Component {
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

                <div className='textsize mt-2 mb-5' >
                <b style={{color:'#FFFFFF'}}> MY   <b style={{color:'#F900C0'}}> MARKETPLACE </b> </b> 
                </div>
        
                <img
                src='paragon-type1.png'
                className='img-fluid shadow-2-strong'
                alt=''
                />
                
                <h1 className='mt-3' style={{color:'#FFFFFF', fontSize:'16px'}}>TYPE 1 PARC PARAGON+90 DEGREE + ROOFTOP & INTERCHANGE 21</h1> <br></br>

                <a  style={{color:'#FFFFFF'}}> <BsGeoAltFill></BsGeoAltFill> Huai khwang , Bangkok</a>
                <br></br>
                <br></br>
                <div style={{color:'#FFFFFF',fontSize:'10px'}} className='row'>
                    <div className='col-4'>
                        <a>Quantity : 4 screen</a>
                    </div>
                    <div className='col-4'>
                        <a>Available pack : 0 </a>
                    </div>
                    <div className='col-4'>
                    <a>Min./Loop  : 2 </a>
                    </div>
                </div>

           
                <h1 className='textsize-sm mt-2 mb-2' style={{color:'#FFFFFF'}}>Booking date</h1>

                <div className=' row' style={{fontSize:'16px', backgroundColor:'#FFFFFF' ,marginLeft:'0.1em',  marginRight:'0.1em', }}> 
                                           
                        <div className='col-6 ' >
                                <label style={{fontSize:'12px' ,  color:'#000000'}}>START</label>
                                <input className='form-control'  style={{backgroundColor:'#FFFFFF'  ,  borderLeft:'none', borderRight:'none', borderTop:'none',  borderBottom:'none',fontSize:'12px', color:'#000000'}} type="datetime" value="12-06-2022" id="starttime" name="starttime"></input>
                                </div>
                                        
                                <div className='col-6 mt-1 mb-2' style={{borderLeft:'solid', borderWidth:'2px',  borderColor:'#000000' }}>
                                <label style={{fontSize:'12px' ,  color:'#000000'}}>END</label>
                                <input className='form-control'   style={{backgroundColor:'#FFFFFF', borderLeft:'none', borderRight:'none', borderTop:'none',  borderBottom:'none',  fontSize:'12px',   color:'#000000'}} type="datetime" value="17-07-2022" id="endtime" name="endtime"></input>
                        </div>        
                                           
                                        
                </div>
              
                <Link to="/removemaketplece">
                <Button className='col-12 btnmove mb-4 mt-4 ' style={{ backgroundColor:'#F900C0', fontSize:'16px',  color:'#000000'}} size='lg'> <b> REMOVE FROM MARKETPLACE</b> 
                </Button>
                </Link>
                <br></br>

                <img
                src='paragon-type2.png'
                className='img-fluid shadow-2-strong'
                alt=''
                />
                
                <h1 className='mt-3' style={{color:'#FFFFFF' , fontSize:'16px'}}>TYPE 2 PARC PARAGON + 90 DEGREE + 
                ROOFTOP</h1> <br></br>

                <a  style={{color:'#FFFFFF'}}> <BsGeoAltFill></BsGeoAltFill> Huai khwang , Bangkok</a>
                <br></br>
                <br></br>
                <div style={{color:'#FFFFFF',fontSize:'10px'}} className='row'>
                    <div className='col-4'>
                        <a>Quantity : 4 screen</a>
                    </div>
                    <div className='col-4'>
                        <a>Available pack : 0 </a>
                    </div>
                    <div className='col-4'>
                    <a>Min./Loop  : 2 </a>
                    </div>
                </div>

                <h1 className='textsize-sm mt-2 mb-2' style={{color:'#FFFFFF'}}>Booking date</h1>

                <div className=' row' style={{fontSize:'16px', backgroundColor:'#FFFFFF' ,marginLeft:'0.1em',  marginRight:'0.1em', }}> 
                                        
                        <div className='col-6 ' >
                                <label style={{fontSize:'12px' ,  color:'#000000'}}>START</label>
                                <input className='form-control'  style={{backgroundColor:'#FFFFFF'  ,  borderLeft:'none', borderRight:'none', borderTop:'none',  borderBottom:'none',fontSize:'12px', color:'#000000'}} type="datetime" value="12-06-2022" id="starttime" name="starttime"></input>
                                </div>
                                        
                                <div className='col-6 mt-1 mb-2' style={{borderLeft:'solid', borderWidth:'2px',  borderColor:'#000000' }}>
                                <label style={{fontSize:'12px' ,  color:'#000000'}}>END</label>
                                <input className='form-control'   style={{backgroundColor:'#FFFFFF', borderLeft:'none', borderRight:'none', borderTop:'none',  borderBottom:'none',  fontSize:'12px',   color:'#000000'}} type="datetime" value="17-07-2022" id="endtime" name="endtime"></input>
                        </div>        
                                        
                                        
                </div>


                <Link to="/removemaketplece">
                <Button className='col-12 btnmove mb-4 mt-4 ' style={{ backgroundColor:'#F900C0', fontSize:'16px',  color:'#000000'}} size='lg'> <b> REMOVE FROM MARKETPLACE</b> 
                </Button>
                </Link>
                

                <br></br>

        

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
export default MyMarketPlace
