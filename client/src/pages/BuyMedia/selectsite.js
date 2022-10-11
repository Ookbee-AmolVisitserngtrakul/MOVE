import React, { Component } from 'react';
import '../../Appbuymedia.css';
import { Button, Container, Row, Col ,input ,icon , Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsGeoAltFill , BsTelephone,BsWalletFill ,BsFacebook ,BsLine,BsTwitter } from "react-icons/bs";


class SelectSite extends Component {
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
                <b style={{color:'#FFFFFF'}}> PARC PARAGON + THE 90 DEGREE & INTERCHANGE 21</b> 
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

                <a style={{color:'#FFFFFF',fontSize:'10px'}}>Price ?</a> <br></br> 
                <a style={{color:'#FFFFFF',fontSize:'10px'}}>12/06/2022 - 14/06/2022 : 12,000฿</a> <br></br>
                <a style={{color:'#FFFFFF',fontSize:'10px'}}>15/06/2022 - 17/06/2022 : 12,000฿</a> <br></br>



                <div className='row mt-3'>
                    <div className='col-8'>

                        <b style={{color:'#F900C0'}}> 24,000฿ </b>   <br></br>
                     

                    </div>
                    <div className='col-4 '>
                        <Link to="/selecttime">
                        <Button style={{backgroundColor:'#FFFFFF', color:'#000000'}}> BOOKING </Button>
                        </Link>
                    </div>
                </div>

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

                <a style={{color:'#FFFFFF',fontSize:'10px'}}>Price ?</a> <br></br> 
                <a style={{color:'#FFFFFF',fontSize:'10px'}}>12/06/2022 - 14/06/2022 : 12,000฿</a> <br></br>
                <a style={{color:'#FFFFFF',fontSize:'10px'}}>15/06/2022 - 17/06/2022 : 12,000฿</a> <br></br>

                <div className='row mt-3'>
                    <div className='col-8'>

                        <b style={{color:'#F900C0'}}> 24,000฿ </b>   <br></br>
                      

                    </div>
                    <div className='col-4 '>
                        <Link to="/selecttime">
                        <Button style={{backgroundColor:'#FFFFFF', color:'#000000'}}> BOOKING </Button>
                        </Link>
                    </div>
                </div>

                <br></br>

                <img
                src='paragon-type3.png'
                className='img-fluid shadow-2-strong'
                alt=''
                />
                
                <h1 className='mt-3' style={{color:'#FFFFFF' ,  fontSize:'16px'}}> TYPE 3 INTERCHANGE 21 </h1> <br></br>

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

                <a style={{color:'#FFFFFF',fontSize:'10px'}}>Price ?</a> <br></br> 
                <a style={{color:'#FFFFFF',fontSize:'10px'}}>12/06/2022 - 14/06/2022 : 12,000฿</a> <br></br>
                <a style={{color:'#FFFFFF',fontSize:'10px'}}>15/06/2022 - 17/06/2022 : 12,000฿</a> <br></br>

                <div className='row mt-3'>
                    <div className='col-8'>

                        <b style={{color:'#F900C0'}}> 24,000฿ </b>   <br></br>
                       

                    </div>
                    <div className='col-4 '>
                        <Link to="/selecttime">
                        <Button style={{backgroundColor:'#FFFFFF', color:'#000000'}}> BOOKING </Button>
                        </Link>
                        
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
export default SelectSite
