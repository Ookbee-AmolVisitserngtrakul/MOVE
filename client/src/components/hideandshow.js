import React, { useState } from 'react'
import { Button, Collapse } from 'react-bootstrap'
import { BsGeoAltFill ,BsChevronDown , BsTelephone,BsWalletFill ,BsFacebook ,BsLine,BsTwitter } from "react-icons/bs";
function HideShow() {
  const [isVisible, initHs] = useState(false)
  const invokeCollapse = () => {
    return initHs(!isVisible)
  }
  return (
    <div >
      <div className='row' style={{backgroundColor:'#1F2432'}}> 
        
        <div className='col-12 mt-3 mb-3'>
            <b style={{color:'#FFFFFF'}}> MY WALLET </b> 
        </div>
        
            
        <div className='col-10 mt-3 mb-3'>
            <img
            src='icon5.png'
            className='img-fluid shadow-2-strong'
            alt=''
            />

            <b style={{color:'#FFFFFF'}}> MOVE Token </b> 
        </div>
        <div className='col-2 mt-3 mb-3'>
            <b style={{color:'#FFFFFF'}}  > <BsChevronDown></BsChevronDown> </b> 
        </div>


        <hr className='mt-2' style={{color:'white' ,borderWidth:'2px' }}></hr>

    
        <div className='col-10 mt-3 mb-3'>
            <img
            src='icon6.png'
            className='img-fluid shadow-2-strong'
            alt=''
            />
            <b style={{color:'#FFFFFF'}}  onClick={invokeCollapse}> My benefit </b> 
        </div>
        <div className='col-2 mt-3 mb-3'>
            <b style={{color:'#FFFFFF'}}  onClick={invokeCollapse}> <BsChevronDown></BsChevronDown> </b> 
        </div>


    </div>





      {/* <h2 className="mb-2">React Hide and Show Collapse Panel Example</h2>
      <Button variant="success" className="mb-4" onClick={invokeCollapse}>
        Show Panel
      </Button> */}
      <Collapse in={isVisible} >
        <div className='row' id="collapsePanel" style={{backgroundColor:'#1F2432', color:'#FFFFFF'}}>
          <div >
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and 
          scrambled it to make a type specimen book. It has 
          survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially 
          </div>
        </div>
      </Collapse>
      </div>
  )
}
export default HideShow