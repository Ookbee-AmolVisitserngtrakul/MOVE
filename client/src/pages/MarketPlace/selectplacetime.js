import React, { Component } from 'react';
import '../../Appbuymedia.css';
import { Button, Container, Row, Col ,input ,icon , Card } from 'react-bootstrap';

import { BsGeoAltFill , BsChevronDown, BsTelephone,BsWalletFill ,BsFillChatSquareTextFill ,BsFacebook ,BsLine,BsTwitter } from "react-icons/bs";


class SelectPlaceTime extends Component {
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
                <b style={{color:'#FFFFFF'}}> TYPE A MEDIA</b> 
                </div>

                <b style={{color:'#FFFFFF'}}>FORMAT</b> <b  style={{color:'#F900C0'}}> CUSTOMIZED </b> <br></br>
                <br></br>
        
                <img
                src='picplace1.png'
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
                    <div className='col-5'>
                        <a>Available pack :  9</a>
                    </div>
                    <div className='col-7'>                   
                        <b style={{color:'#FFFFFF'}}> </b><b> </b> <br></br>
                    </div>
                    <div className='col-5'>
                        <a>Min./Loop : 2</a>
                    </div>
                    <div className='col-7'>
                        <b style={{color:'#FFFFFF'}}> </b> <b> (2 minutes per 1 Available pack)</b> <br></br>
                       
                    </div>
                 
                   
                </div>
                <br></br>




            </Container>


            
            <Container fluid style={{padding:0,margin:0 }}>   

                <div className='mt-2 mb-3' style={{  marginLeft:'0.5em',  marginRight:'1em',  backgroundImage:"url('" + process.env.PUBLIC_URL + "/bg.png')",backgroundRepeat: 'no-repeat',fontSize:'24px',}}>
                        
                        <bs><BsFillChatSquareTextFill></BsFillChatSquareTextFill> REMARK</bs> <br></br>
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
                                            <b> MEDIA PACK </b> <br></br>
                                        
                                            <select className="form-select mt-3" required defaultValue={0}>
                                                                        <option disabled value="0">Please select media pack</option>
                                                                        <option value="1">10,000 - 20,000 บาท</option>
                                                                        <option value="2">20,000 - 50,000 บาท</option>
                                                                        <option value="3">50,000 - 80,000 บาท</option>
                                                                        <option value="4">80,000 - 100,000 บาท</option>
                                                                        <option value="5">มากกว่า 100,000 บาท</option>
                                            </select>                                   
                                          



                                        <div className='banner1 mt-2' style={{color:'#000000', backgroundImage:"url('" + process.env.PUBLIC_URL + "/banner1.png')",backgroundRepeat: 'no-repeat',fontSize:'24px',}}>
                                                    <b style={{ marginLeft:'0.5em', }} ><BsFillChatSquareTextFill></BsFillChatSquareTextFill> REMARK </b>
                                                    <label style={{ marginLeft:'1em',  fontSize:'10px'}}>คุณสามารถเลือกจำนวน Media pack ได้สูงสุด 9 pack   
                                                    โดยใน 1 แพค 
                                                    art work ของคุณจะเล่นวนลูป 2 นาที การเพิ่มจำนวน Media pack 
                                                    จะทำให้ art work ของคุณเล่นวนลูปได้นานขึ้น</label>
                                                              
                                        </div>
                                      

                            </div>
                         

                            <div style={{  marginLeft:'1em',  marginRight:'1em',  fontSize:'18px',}}>
                            <br></br>
                            <b>SLOT</b>

                            <div class="form-check mb-3 mt-2" style={{fontSize:'16px'}}>
                                 <label class="form-check-label" for="defaultCheck1">
                                    12/06/2022 -15/06/2022
                                </label>
                                <br></br>
                                <label>FROM : Phasika <a style={{color:'#F900C0'}}>Sent massage</a> </label>
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


                            <div style={{  marginLeft:'1em',  marginRight:'1em',  fontSize:'16px',}}>

                            <b>SAMARY</b>

                            <div className=' row' style={{backgroundColor:'#FFFFFF'}}> 
                                <div className='col-6 ' >
                                <label style={{fontSize:'12px' ,  color:'#000000'}}>START</label>
                                <input className='form-control'  style={{backgroundColor:'#FFFFFF'  ,  borderLeft:'none', borderRight:'none', borderTop:'none',  borderBottom:'none',fontSize:'12px', color:'#000000'}} type="datetime" value="12-06-2022" id="starttime" name="starttime"></input>
                                </div>

                                <div className='col-6 mt-1 mb-2' style={{borderLeft:'solid', borderWidth:'2px',  borderColor:'#000000' }}>
                                <label style={{fontSize:'12px' ,  color:'#000000'}}>END</label>
                                <input className='form-control'   style={{backgroundColor:'#FFFFFF', borderLeft:'none', borderRight:'none', borderTop:'none',  borderBottom:'none',  fontSize:'12px',   color:'#000000'}} type="datetime" value="17-07-2022" id="endtime" name="endtime"></input>
                                </div>        
                            

                            </div>   
                            <div className='mt-2' style={{fontSize:'14px'}}>
                                <a> Period : </a> <a style={{color:'#F900C0'}}> 3  </a> day <br></br>
                                <a> Pack : </a>  <a style={{color:'#F900C0'}}> 5 </a> <br></br>
                                <a> Min./Loop : </a> <a style={{color:'#F900C0'}}> 6  </a>  Minutes<br></br>
                                <a> Total price </a> <a style={{color:'#F900C0'}}> 44,000฿</a> <br></br>
                            </div>
                         



                            <br></br>
                            <Button className='col-12 btnmove mb-2 ' style={{ backgroundColor:'#F900C0', fontSize:'16px',  color:'#000000'}} size='lg'> <b>CONFIRM BOOKING</b> 

                            </Button>
                            
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
export default SelectPlaceTime
