import React, { Component } from 'react';
import '../../Appbuymedia.css';
import { Button, Container, Row, Col ,input ,icon , Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsGeoAltFill , BsChevronDown, BsTelephone,BsWalletFill ,BsFillChatSquareTextFill ,BsFacebook ,BsLine,BsTwitter } from "react-icons/bs";


class SelectTime extends Component {
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

                <b style={{color:'#FFFFFF'}}>FORMAT</b> <b  style={{color:'#F900C0'}}> CUSTOMIZED </b> <br></br>
                <br></br>
        
                <img
                src='customized.png'
                className='img-fluid shadow-2-strong'
                alt=''
                />
                
                <div className='row'>
                    <div className='col mt-3'>
                        <div className="vl">
                            <b  style={{color:'#FFFFFF'}}> DETAIL</b> <b  style={{color:'#F900C0'}}> FORMAT </b> <br></br>
                        </div>
                    </div>  
                </div>
            
               
                <h1 className='mt-3' style={{color:'#FFFFFF', fontSize:'10px'}}>Quantity : 4 Screen (Your art work will be displayed on 4 screens.)</h1> <br></br>

                <div style={{color:'#FFFFFF',fontSize:'12px'}} className='row'>
                    <div className='col-3'>
                        <a>Period</a>
                    </div>
                    <div className='col-9'>                   
                        <b style={{color:'#F900C0'}}>3 </b><b> DAy </b> <br></br>
                    </div>
                    <div className='col-3'>
                        <a>Spot</a>
                    </div>
                    <div className='col-9'>
                        <b style={{color:'#F900C0'}}>5 </b> <b> Second (2 minutes per 1 pack) </b> <br></br>
                       
                    </div>
                    <div className='col-3'>
                        <a>Frequency</a>
                    </div>
                    <div className='col-9'>
                        <b style={{color:'#F900C0'}}>4 </b> <b> 4 Spot per loop  !</b> <br></br>
                        
                    </div>
                   
                </div>
                <br></br>




            </Container>


            
            <Container fluid style={{padding:0,margin:0 }}>   

                <div className='mt-2 mb-3' style={{  marginLeft:'0.5em',  marginRight:'1em',  backgroundImage:"url('" + process.env.PUBLIC_URL + "/bg.png')",backgroundRepeat: 'no-repeat',fontSize:'24px',}}>
                        
                        <bs style={{fontSize:'16px'}}><BsFillChatSquareTextFill></BsFillChatSquareTextFill> REMARK</bs> <br></br>
                        <label style={{ fontSize:'10px'}}>Lorem Ipsum is simply dummy text of the printing and 
                        industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a galley 
                        of type and scrambled it to make a type specimen book. It has 
                        survived not only five centuries, but also the leap into electronic 
                        typesetting, remaining essentially unchanged. It was 
                        in</label>


                

                        <div  style={{ alignItems:'center' , color:'#F900C0' }}><BsChevronDown></BsChevronDown></div>
                    
                </div>     



            </Container>




         

            <Container fluid style={{padding:0 }}>   

              
                <div style={{paddingTop:'0em', backgroundColor:'#FFFFFF'}}>
                
                        <div  style={{  color:'#FFFFFF', backgroundColor:'#1F2432'}}>

                            <div style={{  marginLeft:'1em',  marginRight:'1em',  fontSize:'24px',}}>

                                       
                                            <br></br>
                                            <b style={{fontSize:'16px'}}> MEDIA PACK </b> <br></br>
                                        
                                            <select className="form-select mt-3" required defaultValue={0}>
                                                                        <option disabled value="0">Please select media pack</option>
                                                                        <option value="1">10,000 - 20,000 บาท</option>
                                                                        <option value="2">20,000 - 50,000 บาท</option>
                                                                        <option value="3">50,000 - 80,000 บาท</option>
                                                                        <option value="4">80,000 - 100,000 บาท</option>
                                                                        <option value="5">มากกว่า 100,000 บาท</option>
                                            </select>                                   
                                          



                                        <div className='banner1 mt-2 mb-3' style={{color:'#000000', backgroundImage:"url('" + process.env.PUBLIC_URL + "/banner1.png')",backgroundRepeat: 'no-repeat',fontSize:'24px',}}>
                                                    <b style={{ marginLeft:'0.5em',fontSize:'16px' }} ><BsFillChatSquareTextFill></BsFillChatSquareTextFill> REMARK </b>
                                                    <label style={{ marginLeft:'1em',  fontSize:'10px'}}>คุณสามารถเลือกจำนวน Media pack ได้สูงสุด 9 pack   
                                                    โดยใน 1 แพค 
                                                    art work ของคุณจะเล่นวนลูป 2 นาที การเพิ่มจำนวน Media pack 
                                                    จะทำให้ art work ของคุณเล่นวนลูปได้นานขึ้น</label>
                                                              
                                        </div>

                                        <b style={{fontSize:'16px'}}>SAMARY</b>

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


                                        <div style={{color:'#FFFFFF',fontSize:'12px'}} className='row mt-2'>
                                            <div className='col-3'>
                                                <a>Period</a>
                                            </div>
                                            <div className='col-9'>                   
                                                <b style={{color:'#F900C0'}}>3 </b><b> DAy </b> <br></br>
                                            </div>
                                            <div className='col-3'>
                                                <a>Spot</a>
                                            </div>
                                            <div className='col-9'>
                                                <b style={{color:'#F900C0'}}>5 </b> <b> Second  </b> <br></br>
                                            
                                            </div>
                                            <div className='col-3'>
                                                <a>Frequency</a>
                                            </div>
                                            <div className='col-9'>
                                                <b style={{color:'#F900C0'}}>4 </b> <b> loop  </b> <br></br>
                                                
                                            </div>
                                            <br></br>
                                            <br></br>
                                            <div className='col-3'>
                                                <a>Total price</a>
                                            </div>
                                            <div className='col-9'>
                                                <b style={{color:'#F900C0'}}>88,000฿ </b> <b>  </b> <br></br>
                                                
                                            </div>
                                            
                                        </div>
                                    






                            </div>
                            <hr></hr>

                            <div style={{  marginLeft:'1em',  marginRight:'1em',  fontSize:'24px',}}>
                            <b>SLOT</b>

                            <div class="form-check mb-3 mt-2" style={{fontSize:'16px'}}>
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label class="form-check-label" for="defaultCheck1">
                                    12/06/2022 -15/06/2022
                                </label>
                                <br></br>
                                <label>FROM : Phasika <a style={{color:'#F900C0'}}>Sent massage</a> </label>
                                <br></br>
                                <label>Price : 44,000฿</label>
                            </div>
                            

                            <div class="form-check mb-3" style={{fontSize:'16px'}}>
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label class="form-check-label" for="defaultCheck1">
                                10/06/2022 - 17/06/2022
                                </label>
                                <br></br>
                                <label>FROM : NUnaaa <a style={{color:'#F900C0'}}>Sent massage</a> </label>
                                <br></br>
                                <label>Price : 44,000฿</label>
                            </div>

                            <div class="form-check mb-3" style={{fontSize:'16px'}}>
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label class="form-check-label" for="defaultCheck1">
                                9/06/2022 - 15/06/2022
                                </label>
                                <br></br>
                                <label>FROM : MT BVN Company <a style={{color:'#F900C0'}}>Sent massage</a> </label>
                                <br></br>
                                <label>Price : 44,000฿</label>
                            </div>


                            </div>
                            



                            <br></br>
                            <br></br>
                          

                   
                    

          
                        </div>



                        

                </div>  
                    
            </Container> 



            <Container fluid style={{padding:0 }}>   

              
                <div style={{paddingTop:'0em', backgroundColor:'#FFFFFF'}}>
                
                        <div  style={{  color:'#FFFFFF', backgroundColor:'#000000'}}>

                            <div style={{  marginLeft:'1em',  marginRight:'1em',  fontSize:'24px',}}>
                            <br></br>
                            <Link to="/addtocart">
                            <Button className='col-12 btnmove mb-2 ' style={{ backgroundColor:'#F900C0', fontSize:'16px',  color:'#000000'}} size='lg'> <b>ADD TO CART</b> 
                            </Button>
                            </Link>
                            <Button className='col-12 btncancel' style={{  fontSize:'16px',  color:'#FFFFFF'}} size='lg'> <b>CANCEL</b> 

                            </Button>
          


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
export default SelectTime
