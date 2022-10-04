import React, { Component, useEffect } from 'react'
import '../../App.css';
import { Button, Container, InputGroup, Row } from 'react-bootstrap';
import Helmet from 'react-helmet';
import Swal from 'sweetalert2';

class Bag extends Component {
    constructor(props) {
        super(props)
    }

    AlertRegister = (event) => {
        Swal.fire("ทำการสมัครสำเร็จ<br/>ทางเราจะติดต่อท่านโดยเร็วที่สุด")
        .then(() => {
            window.location.href = '/'
            //alert('adsf')
        })
    }

    render () {
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
                                        <h3>ข้อมูลกระเป๋า</h3>
                                        <p>กรุณากรอกตามความเป็นจริง</p>
                                        {/* <form className="requires-validation" noValidate> */}
                                            <div className="col-md-12">
                                                <select className="form-select mt-3" required defaultValue={0}>
                                                    <option disabled value="0">ยี่ห้อกระเป๋า</option>
                                                    <option value="1">Hermes</option>
                                                    <option value="2">CHANEL</option>
                                                    <option value="3">Louis Vuitton</option>
                                                    <option value="4">Gucci</option>
                                                    <option value="5">Balenciaga</option>
                                                    <option value="6">Bottega Veneta</option>
                                                    <option value="7">อื่นๆ</option>
                                                </select>
                                                <div className="valid-feedback">Please select an brand!</div>
                                                <div className="invalid-feedback">Please select an brand!</div>
                                            </div>

                                            <div className="col-md-12">
                                                <select className="form-select mt-3" required defaultValue={0}>
                                                    <option disabled value="0">รุ่นกระเป๋า</option>
                                                    <option value="1">Birkin</option>
                                                    <option value="2">Kelly</option>
                                                    <option value="3">Constance</option>
                                                    <option value="4">อื่นๆ</option>
                                                </select>
                                                <div className="valid-feedback">Please select an model!</div>
                                                <div className="invalid-feedback">Please select an model!</div>
                                            </div>

                                            <div className="col-md-12">
                                                <select className="form-select mt-3" required defaultValue={0}>
                                                    <option disabled value="0">ขนาด</option>
                                                    <option value="1">25 นิ้ว</option>
                                                    <option value="2">30 นิ้ว</option>
                                                    <option value="3">35 นิ้ว</option>
                                                    <option value="4">40 นิ้ว</option>
                                                    <option value="5">อื่นๆ</option>
                                                </select>
                                                <div className="valid-feedback">Please select an model!</div>
                                                <div className="invalid-feedback">Please select an model!</div>
                                            </div>

                                            <div className="col-md-12">
                                                <select className="form-select mt-3" required defaultValue={0}>
                                                    <option disabled value="0">สี</option>
                                                    <option value="1">Black</option>
                                                    <option value="2">ETOUPE</option>
                                                    <option value="3">Grey</option>
                                                    <option value="4">Orange</option>
                                                    <option value="5">อื่นๆ</option>
                                                </select>
                                                <div className="valid-feedback">Please select an model!</div>
                                                <div className="invalid-feedback">Please select an model!</div>
                                            </div>

                                            <div className="col-md-12">
                                                <input className="form-control" type="text" name="stamp" placeholder="แสตมป์ (ปีกระเป๋า)" required/>
                                                <div className="valid-feedback">Mobile field is valid!</div>
                                                <div className="invalid-feedback">Mobile field cannot be blank!</div>
                                            </div>

                                            <div className="col-md-12">
                                                <select className="form-select mt-3" required defaultValue={0}>
                                                    <option disabled value="0">หนัง</option>
                                                    <option value="1">Box calf</option>
                                                    <option value="2">Chevre</option>
                                                    <option value="3">Clemence</option>
                                                    <option value="4">Epsom</option>
                                                    <option value="5">Evercolor</option>
                                                    <option value="6">Swift</option>
                                                    <option value="7">Togo</option>
                                                    <option value="8">Aligator</option>
                                                    <option value="9">Niloticus</option>
                                                    <option value="10">Porosus</option>
                                                    <option value="11">Himalaya</option>
                                                    <option value="12">Lizard</option>
                                                    <option value="13">Ostrich</option>
                                                    <option value="14">อื่นๆ</option>
                                                </select>
                                                <div className="valid-feedback">Please select an model!</div>
                                                <div className="invalid-feedback">Please select an model!</div>
                                            </div>

                                            <div className="col-md-12">
                                                <select className="form-select mt-3" required defaultValue={0}>
                                                    <option disabled value="0">สภาพกระเป๋า</option>
                                                    <option value="1">100% [ของใหม่ไม่ผ่านการใช้งาน]</option>
                                                    <option value="2">99% - 95% [สภาพเหมือนใหม่ อาจมีร่องรอยการใช้งานทั่วไป]</option>
                                                    <option value="3">94% - 90% [มีร่องรอยการใช้งานทั่วไป หรือ มีตำหนิเล็กน้อย]</option>
                                                    <option value="4">89% - 80% [มีตำหนิจากการใช้งาน หรือ ทรงเริ่มเปลี่ยน ]</option>
                                                    <option value="5">ต่ำกว่า 80% [มีรอยตำหนิอย่างเห็นได้ชัด]</option>
                                                    <option value="6">เคยผ่านการทำสี หรือ สปาสี</option>
                                                </select>
                                                <div className="valid-feedback">Please select an income!</div>
                                                <div className="invalid-feedback">Please select an income!</div>
                                            </div>

                                            <div className="col-md-12 mt-3">
                                                <label className="mb-3 mr-1" htmlFor="gender">อุปกรณ์</label>
                                                <br/>

                                                <input type="checkbox" className="btn-check" name="gender" id="a0" autoComplete="off" required/>
                                                <label className="btn btn-sm btn-outline-secondary" htmlFor="a0" style={{padding:'15px', margin:'5px 5px'}}>ชุดกุญแจ</label>

                                                <input type="checkbox" className="btn-check" name="gender" id="a1" autoComplete="off" required/>
                                                <label className="btn btn-sm btn-outline-secondary" htmlFor="a1" style={{padding:'15px', margin:'5px 5px'}}>กล่อง</label>

                                                <input type="checkbox" className="btn-check" name="gender" id="a2" autoComplete="off" required/>
                                                <label className="btn btn-sm btn-outline-secondary" htmlFor="a2" style={{padding:'15px', margin:'5px 5px'}}>ถุงผ้า</label>

                                                <input type="checkbox" className="btn-check" name="gender" id="a3" autoComplete="off" required/>
                                                <label className="btn btn-sm btn-outline-secondary" htmlFor="a3" style={{padding:'15px', margin:'5px 5px'}}>ใบเสร็จ</label>

                                                <input type="checkbox" className="btn-check" name="gender" id="a4" autoComplete="off" required/>
                                                <label className="btn btn-sm btn-outline-secondary" htmlFor="a4" style={{padding:'15px', margin:'5px 5px'}}>ผ้าคาดหน้า</label>

                                                <input type="checkbox" className="btn-check" name="gender" id="a5" autoComplete="off" required/>
                                                <label className="btn btn-sm btn-outline-secondary" htmlFor="a5" style={{padding:'15px', margin:'5px 5px'}}>ชุดกันฝน</label>

                                                <input type="checkbox" className="btn-check" name="gender" id="a6" autoComplete="off" required/>
                                                <label className="btn btn-sm btn-outline-secondary" htmlFor="a6" style={{padding:'15px', margin:'5px 5px'}}>ริบบิ้น</label>
                                            </div>

                                            <div className="col-md-12">
                                                <input className="form-control" type="text" name="stamp" placeholder="อุปกรณ​์อื่นๆ"/>
                                                <div className="valid-feedback">Mobile field is valid!</div>
                                                <div className="invalid-feedback">Mobile field cannot be blank!</div>
                                            </div>
                                            <br/>

                                            <div className="col-md-12 mt-3">
                                                <h4 style={{color:'white'}}>กรุณาแนบไฟล์รูปภาพกระเป๋าของท่าน</h4>
                                                <p>แนบรูปภาพด้านหน้า ด้านหลัง และข้างในกระเป๋า หากมีรอยตำหนิ กรุณาแนบรูปภาพรอยตำหนิด้วย</p>
                                                <div className="text-center">
                                                    <button type="button" class="btn btn-md btn-outline-secondary" style={{width:'50%'}}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16" style={{marginRight:'10px'}}>
                                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
                                                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"></path>
                                                        </svg>
                                                        อัพโหลดรูปภาพ
                                                    </button>
                                                </div>
                                            </div>

                                            <br/>

                                            <div className="col-md-12">
                                                <input className="form-control" type="text" name="stamp" placeholder="วงเงินสินเชื่อที่ต้องการกู้ (บาท)" required/>
                                                <div className="valid-feedback">Mobile field is valid!</div>
                                                <div className="invalid-feedback">Mobile field cannot be blank!</div>
                                            </div>

                                            <br/>

                                            <div className="form-button mt-3 text-center">
                                                <button onClick={() => { this.AlertRegister() }} className="btn btn-lg btn-deepblue" style={{width:'100%'}}>ส่งข้อมูล</button>
                                            </div>
                                        {/* </form> */}
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
  export default Bag