import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../Appbuymedia.css';
import { Button, Container, Row, Col ,input ,icon , Card } from 'react-bootstrap';
import { BsGeoAltFill , BsChevronDown, BsTelephone,BsWalletFill ,BsFillChatSquareTextFill ,BsFacebook ,BsLine,BsTwitter } from "react-icons/bs";


class RemoveMarketPlace extends Component {
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

                <div className='d-flex justify-content-center mt-2 mb-4' style={{color:'#FFFFFF',fontSize:'24px'}}>             
                        <b>Remove from marketplace</b>                           
                </div>


                <br></br>

                <div className='row '  style={{color:'#FFFFFF', fontSize:'14px'}}>
                    <div className='col-6'>
                        <a>Location</a>
                    </div>
                    <div className='col-6'>
                        <a>ShowDC</a>
                    </div>
                    <div className='col-6'>
                        <a>Date to sell</a>
                    </div>
                    <div className='col-6'>
                        <a>May 6,2022 - May 12,2022</a>
                    </div>
                    <div className='col-6'>
                        <a>Period</a>
                    </div>
                    <div className='col-6'>
                        <a>6 Day</a>
                    </div>
                    <div className='col-6'>
                        <a>Total Price</a>
                    </div>
                    <div className='col-6'>
                        <a style={{color:'#F900C0'}}>60,000 THB</a>
                    </div>
                </div>



                <div className='row mt-5 mb-5'>
                 
                </div>

        
                <Link >
                    <Button className='col-12 btnmove mb-2 ' style={{ backgroundColor:'#F900C0', fontSize:'16px',  color:'#000000'}} size='lg'> <b>CONFIRM </b> 
                    </Button>
                </Link>

                
                <Link >
                    <Button className='col-12  mb-2 ' style={{ backgroundColor:'#000000', fontSize:'16px',  color:'#FFFFFF'}} size='lg'> <b>CANCLE </b> 
                    </Button>
                </Link>
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            

                </Container>

        </Container>

    
    )
  }
}
export default RemoveMarketPlace
