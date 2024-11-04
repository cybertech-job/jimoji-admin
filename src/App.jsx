import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Dashboard from './pages/Dashboard'
import Product from './pages/Product'
import Order from './pages/Order'
import SideBar from './components/common/SideBar'
import Header from './components/common/Header'
import ProductDetails from './pages/ProductDetails'
import AddProduct from './pages/AddProduct'
import OrderDetail from './pages/OrderDetail'
import initialProductData from "./components/Product/productData"


function App() {
  const [productData, setProductData] = useState(initialProductData);

  const handleAddProduct = (newProduct) => {
    setProductData((prevProducts) => [...prevProducts, newProduct]);
  }

  return (
      <div className='flex bg-[#E7E7E3] w-[100vw] h-[100vh]'>
          <Router>
          <SideBar />
          <div className='w-full '>
          <Header />
            <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path='/product' element={<Product productData={productData} />} />
              <Route path='/order' element={<Order/>} />
              <Route path='/product/:productId' element={<ProductDetails productData={productData} />} />
              <Route path='/add-product' element={<AddProduct handleAddProduct={handleAddProduct} />}  />
              <Route path='/order/:orderId' element={<OrderDetail />} />
            </Routes>
          </div>
          </Router>
        </div>
    
  )
}

export default App


