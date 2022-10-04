import React, { Component } from 'react'
import '../../App.css';
import { Button, Container, InputGroup, Row } from 'react-bootstrap';
import Helmet from 'react-helmet';

class Register extends Component {
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
            <>
                <Helmet>
                    <style>{'body { background-color: #152733; }'}</style>
                </Helmet>
                <Container>
                    <br/>
                    <div className="form-body">
                        <div className="row">
                            <div className="form-holder">
                                <div className="form-content">
                                    <div className="form-items">
                                        <h3>สมัครขอกู้สินเชื่อเงินสด</h3>
                                        <p>กรุณากรอกข้อมูลให้ครบถ้วน</p>
                                        
                                            <div className="col-md-12">
                                                <input className="form-control" type="text" name="name" placeholder="ชื่อ" required/>
                                                <div className="valid-feedback">Username field is valid!</div>
                                                <div className="invalid-feedback">Username field cannot be blank!</div>
                                            </div>

                                            <div className="col-md-12">
                                                <textarea className="form-control" type="text" name="address" placeholder="ที่อยู่" required></textarea>
                                                <div className="valid-feedback">Address field is valid!</div>
                                                <div className="invalid-feedback">Address field cannot be blank!</div>
                                            </div>

                                            <div className="col-md-12">
                                                <input className="form-control" type="text" name="mobile" placeholder="เบอร์โทรศัพท์" required/>
                                                <div className="valid-feedback">Mobile field is valid!</div>
                                                <div className="invalid-feedback">Mobile field cannot be blank!</div>
                                            </div>

                                            <div className="col-md-12">
                                                <select className="form-select mt-3" required defaultValue={0}>
                                                    <option disabled value="0">รายได้ต่อเดือน</option>
                                                    <option value="1">10,000 - 20,000 บาท</option>
                                                    <option value="2">20,000 - 50,000 บาท</option>
                                                    <option value="3">50,000 - 80,000 บาท</option>
                                                    <option value="4">80,000 - 100,000 บาท</option>
                                                    <option value="5">มากกว่า 100,000 บาท</option>
                                                </select>
                                                <div className="valid-feedback">Please select an income!</div>
                                                <div className="invalid-feedback">Please select an income!</div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="input-group">
                                                    <input className="form-control" style={{width:'50%'}} type="text" name="otp" placeholder="กรอกรหัส OTP" required/>
                                                    <button className="input-group-append btn btn-outline-secondary" type="button" style={{marginTop:'16px'}}>ส่งรหัส OTP</button>
                                                </div>
                                                <div className="valid-feedback">Password field is valid!</div>
                                                <div className="invalid-feedback">Password field cannot be blank!</div>
                                            </div>


                                            {/* <div className="col-md-12 mt-3">
                                                <label className="mb-3 mr-1" htmlFor="gender">Gender: </label>

                                                <input type="radio" className="btn-check" name="gender" id="male" autoComplete="off" required/>
                                                <label className="btn btn-sm btn-outline-secondary" htmlFor="male">Male</label>

                                                <input type="radio" className="btn-check" name="gender" id="female" autoComplete="off" required/>
                                                <label className="btn btn-sm btn-outline-secondary" htmlFor="female">Female</label>

                                                <input type="radio" className="btn-check" name="gender" id="secret" autoComplete="off" required/>
                                                <label className="btn btn-sm btn-outline-secondary" htmlFor="secret">Secret</label>
                                                <div className="valid-feedback mv-up">You selected a gender!</div>
                                                <div className="invalid-feedback mv-up">Please select a gender!</div>
                                            </div>

                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                            <label className="form-check-label">I confirm that all data are correct</label>
                                            <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                                            </div> */}
                                

                                            <div className="form-button mt-3 text-center">
                                                <a href="/bag" className="btn btn-lg btn-deepblue" style={{width:'100%'}}>ส่งข้อมูล</a>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </>
      )
    }
  }
  export default Register