import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './shared/Navbar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Shop from './pages/Shop';
import Login from './pages/Login';

const RoutingComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element = {<HomePage/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/shop' element = {<Shop/>}/>
            <Route path='/login' element = {<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutingComponent
