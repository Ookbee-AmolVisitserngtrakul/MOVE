import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../Appbuymedia.css';
import { Button, Container, Row, Col ,input ,icon , Card } from 'react-bootstrap';
import { BsGeoAltFill , BsTelephone,BsWalletFill ,BsFacebook ,BsLine,BsTwitter } from "react-icons/bs";


class SelectPlace extends Component {
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
                <b style={{color:'#FFFFFF'}}> EMPORIUM & EMQUARTIER<b style={{color:'#F900C0'}}> </b> </b> 
                </div>
                

                <div className='textsize-sm mt-2 mb-0' style={{paddingRight:'1em' }}>
                    <div className='row'>
                        <div className='col-6 mt-4'>

                             <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src="/picplace.png" />
                            <Card.Body>
                                <Card.Title style={{color:'black', fontSize:'11px'}}>TYPE A MEDIA (mockup)</Card.Title>
                                <Card.Text style={{color:'black' , fontSize:'9px'}}>
                                <BsGeoAltFill></BsGeoAltFill>
                                EMPORIUM & EMQUARTIER. <br></br>
                                12/06/2022 - 15/06/2022
                                </Card.Text>
                                <Link to="/selectplacetime">
                                        <b style={{color:'#F900C0' , fontSize:'18px'}}>24,000฿</b> <br></br>
                                    </Link>
                                
                            </Card.Body>
                            </Card>


                        </div>
                        <div className='col-6 mt-4'>

                            <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src="/picplace.png" />
                            <Card.Body>
                                <Card.Title style={{color:'black', fontSize:'11px'}}>TYPE A MEDIA (mockup)</Card.Title>
                                <Card.Text style={{color:'black' , fontSize:'9px'}}>
                                <BsGeoAltFill></BsGeoAltFill>
                                EMPORIUM & EMQUARTIER. <br></br>
                                12/06/2022 - 15/06/2022
                                </Card.Text>
                                <Link to="/selectplacetime">
                                        <b style={{color:'#F900C0' , fontSize:'18px'}}>24,000฿</b> <br></br>
                                    </Link>
                                
                            </Card.Body>
                            </Card>




                        </div>
                        <div className='col-6 mt-2 mb-2'>
                   
                        
                            <Card style={{ width: '10rem' }}>
                                <Card.Img variant="top" src="/picplace.png" />
                                <Card.Body>
                                    <Card.Title style={{color:'black', fontSize:'11px'}}>TYPE A MEDIA (mockup)</Card.Title>
                                    <Card.Text style={{color:'black' , fontSize:'9px'}}>
                                    <BsGeoAltFill></BsGeoAltFill>
                                    EMPORIUM & EMQUARTIER. <br></br>
                                    12/06/2022 - 15/06/2022
                                    </Card.Text>
                                    <Link to="/selectplacetime">
                                        <b style={{color:'#F900C0' , fontSize:'18px'}}>24,000฿</b> <br></br>
                                    </Link>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className='col-6 mt-2 mb-2'>

                            <Card style={{ width: '10rem' }}>
                                <Card.Img variant="top" src="/picplace.png" />
                                <Card.Body>
                                    <Card.Title style={{color:'black', fontSize:'11px'}}>TYPE A MEDIA (mockup)</Card.Title>
                                    <Card.Text style={{color:'black' , fontSize:'9px'}}>
                                    <BsGeoAltFill></BsGeoAltFill>
                                    EMPORIUM & EMQUARTIER. <br></br>
                                    12/06/2022 - 15/06/2022
                                    </Card.Text>
                                    <Link to="/selectplacetime">
                                        <b style={{color:'#F900C0' , fontSize:'18px'}}>24,000฿</b> <br></br>
                                    </Link>
                                    
                                </Card.Body>
                            </Card>



                        </div>
                        <div className='col-6 mt-2 mb-2'>

                            <Card style={{ width: '10rem' }}>
                                <Card.Img variant="top" src="/picplace.png" />
                                <Card.Body>
                                    <Card.Title style={{color:'black', fontSize:'11px'}}>TYPE A MEDIA (mockup)</Card.Title>
                                    <Card.Text style={{color:'black' , fontSize:'9px'}}>
                                    <BsGeoAltFill></BsGeoAltFill>
                                    EMPORIUM & EMQUARTIER. <br></br>
                                    12/06/2022 - 15/06/2022
                                    </Card.Text>
                                    <Link to="/selectplacetime">
                                        <b style={{color:'#F900C0' , fontSize:'18px'}}>24,000฿</b> <br></br>
                                    </Link>
                                    
                                </Card.Body>
                            </Card>

                        </div>
                        <div className='col-6 mt-2 mb-2'>

                            <Card style={{ width: '10rem' }}>
                                <Card.Img variant="top" src="/picplace.png" />
                                <Card.Body>
                                    <Card.Title style={{color:'black', fontSize:'11px'}}>TYPE A MEDIA (mockup)</Card.Title>
                                    <Card.Text style={{color:'black' , fontSize:'9px'}}>
                                    <BsGeoAltFill></BsGeoAltFill>
                                    EMPORIUM & EMQUARTIER. <br></br>
                                    12/06/2022 - 15/06/2022
                                    </Card.Text>
                                    <Link to="/selectplacetime">
                                        <b style={{color:'#F900C0' , fontSize:'18px'}}>24,000฿</b> <br></br>
                                    </Link>
                                    
                                </Card.Body>
                            </Card>



                        </div>
                        <div className='col-6 mt-2 mb-2'>

                            <Card style={{ width: '10rem' }}>
                                <Card.Img variant="top" src="/picplace.png" />
                                <Card.Body>
                                    <Card.Title style={{color:'black', fontSize:'11px'}}>TYPE A MEDIA (mockup)</Card.Title>
                                    <Card.Text style={{color:'black' , fontSize:'9px'}}>
                                    <BsGeoAltFill></BsGeoAltFill>
                                    EMPORIUM & EMQUARTIER. <br></br>
                                    12/06/2022 - 15/06/2022
                                    </Card.Text>
                                    <Link to="/selectplacetime">
                                        <b style={{color:'#F900C0' , fontSize:'18px'}}>24,000฿</b> <br></br>
                                    </Link>
                                    
                                </Card.Body>
                            </Card>

                        </div>
                        <div className='col-6 mt-2 mb-2'>

                            <Card style={{ width: '10rem' }}>
                                <Card.Img variant="top" src="/picplace.png" />
                                <Card.Body>
                                    <Card.Title style={{color:'black', fontSize:'11px'}}>TYPE A MEDIA (mockup)</Card.Title>
                                    <Card.Text style={{color:'black' , fontSize:'9px'}}>
                                    <BsGeoAltFill></BsGeoAltFill>
                                    EMPORIUM & EMQUARTIER. <br></br>
                                    12/06/2022 - 15/06/2022
                                    </Card.Text>
                                    <Link to="/selectplacetime">
                                        <b style={{color:'#F900C0' , fontSize:'18px'}}>24,000฿</b> <br></br>
                                    </Link>
                                    
                                </Card.Body>
                            </Card>

                        </div>

                        
                    </div>
                    <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>


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
export default SelectPlace
