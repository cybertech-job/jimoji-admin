
import React, { useState } from 'react';

const Modal = ({ onClose, onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    subtitle: "",
    price: "",
    description: "",
    sales: "",
    remainingProd: ""
  });

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(newProduct);  
    onClose(); 
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className=' bg-white rounded-lg shadow-lg p-6 w-80 md:w-96'>
        <h2 className='text-xl font-bold mb-4'>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold'>Title</label>
            <input
              type='text'
              name='title'
              value={newProduct.title}
              onChange={handleChange}
              className='w-full px-3 py-2 border-[1px] border-black rounded-lg'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold'>Subtitle</label>
            <input
              type='text'
              name='subtitle'
              value={newProduct.subtitle}
              onChange={handleChange}
              className='w-full px-3 py-2 rounded-lg border-[1px] border-black'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold'>Price</label>
            <input
              type='text'
              name='price'
              value={newProduct.price}
              onChange={handleChange}
              className='w-full px-3 py-2 rounded-lg border-[1px] border-black'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold'>Description</label>
            <textarea
              name='description'
              value={newProduct.description}
              onChange={handleChange}
              className='w-full px-3 py-2 rounded-lg border-[1px] border-black'
              required
            ></textarea>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold'>Sales</label>
            <input
              type='text'
              name='sales'
              value={newProduct.sales}
              onChange={handleChange}
              className='w-full px-3 py-2 rounded-lg border-[1px] border-black'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold'>Remaining Products</label>
            <input
              type='text'
              name='remainingProd'
              value={newProduct.remainingProd}
              onChange={handleChange}
              className='w-full px-3 py-2 border-[1px] border-black rounded-lg '
              required
            />
          </div>
          <div className='flex justify-end'>
            <button
              type='button'
              className='bg-gray-400 text-white px-4 py-2 rounded mr-2'
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-2 rounded'
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
