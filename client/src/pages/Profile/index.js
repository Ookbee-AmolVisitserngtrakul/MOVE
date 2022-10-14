import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../Appbuymedia.css';
import HideShow from '../../components/hideandshow';
import { Button, Container, Row, Col ,input ,icon , Card } from 'react-bootstrap';
import { BsGeoAltFill , BsTelephone,BsWalletFill ,BsFacebook ,BsLine,BsTwitter } from "react-icons/bs";




class ProFile extends Component {

 

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
                <b style={{color:'#FFFFFF'}}> MY <b style={{color:'#F900C0'}}> MEDIA</b> </b> 
                </div>
                
                <div className='row'>
                    <div className='col-3 mt-3 mb-3'>
                        <img
                        src='icon1.png'
                        className='img-fluid shadow-2-strong'
                        alt=''
                        />

                    </div>
                    <div className='col-3 mt-3 mb-3'>
                        <img
                        src='icon2.png'
                        className='img-fluid shadow-2-strong'
                        alt=''
                        />

                    </div>
                    <div className='col-3 mt-3 mb-3'>
                        <img
                        src='icon3.png'
                        className='img-fluid shadow-2-strong'
                        alt=''
                        />

                    </div>
                    <div className='col-3 mt-3 mb-3'>
                        <img
                        src='icon4.png'
                        className='img-fluid shadow-2-strong'
                        alt=''
                        />

                    </div>

                </div>

                

                

                <div className=' row'> 
                    <hr className='mt-2 mb-2' style={{color:'white' ,borderWidth:'2px'}}></hr>   
                
                        <div className='col-12 mt-3 mb-3 '>
                            <b style={{color:'#FFFFFF'}}> MY MARKETPLACE </b> 
                        </div>
                            
                    <hr className='mt-2 mb-2' style={{color:'white' ,borderWidth:'2px' }}></hr>

                 
                        <div className='col-12  mt-3 mb-3'>
                            <img
                            src='icon7.png'
                            className='img-fluid shadow-2-strong'
                            alt=''
                            />

                            <b style={{color:'#FFFFFF'}}> CHAT </b> 
                        </div>

                
                </div>



                <div className="mt-3">
                <HideShow />
                </div>






                {/* <div className='row' style={{backgroundColor:'#1F2432'}}> 
        
                        <div className='col-12 mt-3 mb-3'>
                            <b style={{color:'#FFFFFF'}}> MY WALLET </b> 
                        </div>
                            
                        <div className='col-12 mt-3 mb-3'>
                            <img
                            src='icon5.png'
                            className='img-fluid shadow-2-strong'
                            alt=''
                            />

                            <b style={{color:'#FFFFFF'}}> MOVE Token </b> 
                        </div>

                    <hr className='mt-2' style={{color:'white' ,borderWidth:'2px' }}></hr>
          
                 
                    <div className='col-12 mt-3 mb-3'>
                        <img
                        src='icon6.png'
                        className='img-fluid shadow-2-strong'
                        alt=''
                        />
                        <b style={{color:'#FFFFFF'}}> My benefit </b> 
                    </div>

                </div> */}
       

                
                <br></br>
                <br></br>
                <br></br>


        
            </Container>
         

          

        </Container>

    
    )
  }
}
export default ProFile
