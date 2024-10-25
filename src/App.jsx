import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Product from './pages/Product'
import Order from './pages/Order'
import SideBar from './components/common/SideBar'
import Header from './components/common/Header'
import ProductDetails from './pages/ProductDetails'
import AddProduct from './pages/AddProduct'
import OrderDetail from './pages/OrderDetail'

function App() {



  return (
    <div className='flex bg-[#E7E7E3] w-[100vw] h-[100vh]'>
      <Router>
      <SideBar />
      <div className='w-full '>
      <Header />
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/order/:orderId' element={<OrderDetail />} />

        </Routes>

      </div>
      </Router>
    </div>
  )
}

export default App
