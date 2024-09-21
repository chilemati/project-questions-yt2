import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Prouduct from './components/product/Prouduct'
import Cart from './components/cart/Cart'
import SingleProduct from './components/single/SingleProduct'

function App() {
  

  return (
    <div className="text-3xl font-bold underline">
     {/* router step 3 */}
     <Nav />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/cart' element={<Cart />} />
       <Route path='/product' element={<Prouduct />} />
       <Route path='/single/:id' element={<SingleProduct />} />
     </Routes>
     <Footer />
       </div>
  )
}

export default App
