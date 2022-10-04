import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Bag from '../pages/Bag'
//import NotFoundPage from './pages/NotFoundPage'

const NotFoundPage = () => { return <h1>Not Found Page</h1> }

export default () => (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/bag" element={<Bag/>} />
        <Route path="*" element={<NotFoundPage/>} />
    </Routes>
)