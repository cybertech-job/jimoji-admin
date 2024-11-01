import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Product from './pages/Product'
import Order from './pages/Order'
import SideBar from './components/common/SideBar'
import Header from './components/common/Header'
import AddProduct from './pages/AddProduct'
import { prodData } from "./components/Product/productData"

function App() {
  const [productData, setProductData] = useState([
    
  ]);

function handleAddProduct(newProduct) {
  setProductData((prev) => [...prev, newProduct]);
}


  return (
    <div className='flex bg-[#E7E7E3] w-[100vw] h-auto'>
      <Router>
      <SideBar />
      <div className='w-full'>
      <Header />
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/product' element={<Product productData={productData} />} />
          <Route path='/order' element={<Order/>} />
          <Route path='/addprod' element={<AddProduct handleAddProduct={handleAddProduct} />} />
        </Routes>

      </div>
      </Router>
    </div>
  )
}

export default App
