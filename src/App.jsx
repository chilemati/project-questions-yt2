import { lazy, Suspense, useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
const Home =  lazy(()=> import('./components/home/Home')) ;
const Prouduct =  lazy(()=> import('./components/product/Prouduct')) ;
const Cart =  lazy(()=> import('./components/cart/Cart')) ;
const SingleProduct =  lazy(()=> import('./components/single/SingleProduct')) ;

function App() {
  

  return (
    <div className="text-3xl font-bold underline">
     {/* router step 3 */}
     <Nav />
      <Suspense fallback={<div>Loading...</div>} >
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/cart' element={<Cart />} />
       <Route path='/product' element={<Prouduct />} />
       <Route path='/single/:id' element={<SingleProduct />} />
     </Routes>
      </Suspense>
     <Footer />
       </div>
  )
}

export default App
