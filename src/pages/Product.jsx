
import React, { useState } from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";
import Card from '../components/Product/Card';
import { useNavigate, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { myAtom } from '../state/atoms/Show';


  

const Product = ({ productData }) => {
  const navigate = useNavigate();
  const [anything, setAnything] = useRecoilState(myAtom)

  setAnything("Hi there")
  console.log(anything);
  

  function gotoProductPage() {
      navigate('/add-product')
    }


  return (
    <div className='p-6 lg:p-8  w-full relative  overflow-y-hidden hover:overflow-y-auto h-[85vh]  scrollbar-thin overflow-auto scrollbar-gutter-stable'>
      {/* Product Header */}
      <div className="product-header flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div>
          <h1 className='font-bold text-3xl mb-2'>All Products</h1>
          <p className='flex items-center text-xl font-semibold'>Home &gt; All Products</p>
        </div>
        {/* Add Product Button */}
        <button 
          className='mt-4 lg:mt-0 bg-[#232321] text-white rounded-lg px-4 lg:px-6 py-2 lg:py-4 flex'
          onClick={gotoProductPage}
        >
          <AiOutlinePlusCircle className='text-[1.667vw] mr-2' />
          <p className='font-semibold text-[1.11vw]'>ADD NEW PRODUCT</p>
        </button>
      </div>

      {/* Main */}
      <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 justify-items-center xl:grid-cols-3 gap-3 lg:gap-6'>
        {productData.map((item) => (
          <div key={item.id}>
            <Link to={`/product/${item.id}`}>
              <Card product={item} />
            </Link>
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default Product;
