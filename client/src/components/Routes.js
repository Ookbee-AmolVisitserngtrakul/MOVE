import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Bag from '../pages/Bag'
import BuyMedia from '../pages/BuyMedia'
import BuyNow from '../pages/BuyMedia/buynow'
import SelectSite from '../pages/BuyMedia/selectsite'
import SelectTime from '../pages/BuyMedia/selecttime'
import AddToCart from '../pages/BuyMedia/addtocart'
import PayMent from '../pages/BuyMedia/payment'
import OptConFirm from '../pages/BuyMedia/optconfirm'
import OptSuccess from '../pages/BuyMedia/optsuscess'
import SentGift from '../pages/BuyMedia/sentgift'
import Login from '../pages/Login'
import RegisterMember from '../pages/RegisterMember'
import MarketPlace from '../pages/MarketPlace'
import SelectPlace from '../pages/MarketPlace/selectplace'
import SelectPlaceTime from '../pages/MarketPlace/selectplacetime'
//import NotFoundPage from './pages/NotFoundPage'

const NotFoundPage = () => { return <h1>Not Found Page</h1> }

export default () => (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/registermember" element={<RegisterMember/>} />
        <Route exact path="/bag" element={<Bag/>} />
        <Route exact path="/buymedia" element={<BuyMedia/>} />
        <Route exact path="/buynow" element={<BuyNow/>} />
        <Route exact path="/selectsite" element={<SelectSite/>} />
        <Route exact path="/selecttime" element={<SelectTime/>} />
        <Route exact path="/addtocart" element={<AddToCart/>} />
        <Route exact path="/payment" element={<PayMent/>} />
        <Route exact path="/optconfirm" element={<OptConFirm/>} />
        <Route exact path="/optsuscess" element={<OptSuccess/>} />
        <Route exact path="/sentgift" element={<SentGift/>} />
        <Route exact path="/marketplace" element={<MarketPlace/>} />
        <Route exact path="/selectplace" element={<SelectPlace/>} />
        <Route exact path="/selectplacetime" element={<SelectPlaceTime/>} />
        <Route path="*" element={<NotFoundPage/>} />
    </Routes>
)