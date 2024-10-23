
import React, { useState } from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";
import Card from '../components/Product/Card';
import Modal from '../components/Product/Modal';  

const Product = () => {
  const [productData, setProductData] = useState([
          {
            id: 1,
            title: "Lorem Ipsum1",
            subtitle: "Battery", 
            price: "₹110.40",
            description: "Lorem Ipsum is placeholder text commonly used in the graphic.",
            sales: "1269",
            remainingProd: "1269"
          },
          {
            id: 2,
            title: "Lorem Ipsum2",
            subtitle: "Battery", 
            price: "₹110.40",
            description: "Lorem Ipsum is placeholder text commonly used in the graphic.",
            sales: "1269",
            remainingProd: "1269"
          },
          {
            id: 3,
            title: "Lorem Ipsum3",
            subtitle: "Battery", 
            price: "₹110.40",
            description: "Lorem Ipsum is placeholder text commonly used in the graphic.",
            sales: "1269",
            remainingProd: "1269"
          },
          {
            id: 4,
            title: "Lorem Ipsum4",
            subtitle: "Battery", 
            price: "₹110.40",
            description: "Lorem Ipsum is placeholder text commonly used in the graphic.",
            sales: "1269",
            remainingProd: "1269"
          },
          {
            id: 5,
            title: "Lorem Ipsum5",
            subtitle: "Battery", 
            price: "₹110.40",
            description: "Lorem Ipsum is placeholder text commonly used in the graphic.",
            sales: "1269",
            remainingProd: "1269"
          },
          {
            id: 6,
            title: "Lorem Ipsum6",
            subtitle: "Battery", 
            price: "₹110.40",
            description: "Lorem Ipsum is placeholder text commonly used in the graphic.",
            sales: "1269",
            remainingProd: "1269"
          },
          {
            id: 7,
            title: "Lorem Ipsum7",
            subtitle: "Battery", 
            price: "₹110.40",
            description: "Lorem Ipsum is placeholder text commonly used in the graphic.",
            sales: "1269",
            remainingProd: "1269"
          },
          {
            id: 8,
            title: "Lorem Ipsum8",
            subtitle: "Battery", 
            price: "₹110.40",
            description: "Lorem Ipsum is placeholder text commonly used in the graphic.",
            sales: "1269",
            remainingProd: "1269"
          },
          {
            id: 9,
            title: "Lorem Ipsum9",
            subtitle: "Battery", 
            price: "₹110.40",
            description: "Lorem Ipsum is placeholder text commonly used in the graphic.",
            sales: "1269",
            remainingProd: "1269"
          }
      
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddProduct = (newProduct) => {
    const updatedProductData = [
      ...productData,
      { id: productData.length + 1, ...newProduct }
    ];
    setProductData(updatedProductData);
  };

  return (
    <div className='p-6 lg:p-8 overflow-x-hidden w-full relative'>
      {/* Product Header */}
      <div className="product-header flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div>
          <h1 className='font-bold text-3xl mb-2'>All Products</h1>
          <p className='flex items-center text-xl font-semibold'>Home &gt; All Products</p>
        </div>
        {/* Add Product Button */}
        <button 
          className='mt-4 lg:mt-0 bg-[#232321] text-white rounded-lg px-4 lg:px-6 py-2 lg:py-4 flex'
          onClick={openModal}
        >
          <AiOutlinePlusCircle className='text-2xl lg:text-2xl mr-2' />
          <p className='font-semibold'>ADD NEW PRODUCT</p>
        </button>
      </div>

      {/* Main */}
      <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 justify-items-center xl:grid-cols-3 gap-3 lg:gap-6'>
        {productData.map((item) => (
          <div key={item.id}>
            <Card product={item} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && <Modal onClose={closeModal} onAddProduct={handleAddProduct} />}
    </div>
  );
};

export default Product;
