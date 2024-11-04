
// import React from 'react';
// import { useState } from "react";
// import ProductDetailsForm from "../components/Product/ProductDetailsForm"
// import { IoImageOutline } from "react-icons/io5";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useParams } from 'react-router-dom';

// const ProductDetails = ({ productData }) => {

 
//   return (
//     <div className="p-6 w-full relative overflow-y-hidden hover:overflow-y-auto h-[85vh] scrollbar-thin overflow-auto scrollbar-gutter-stable">
//             {/* Header */}
//             <div className="mb-6">
//                 <h1 className='font-bold text-3xl mb-2'>Product Details</h1>
//                 <h3 className="font-semibold text-xl">Home &gt; All Products &gt; Product Details</h3>
//             </div>

//           <h1>{product.name}</h1>
//         </div>
//   );
// };

// export default ProductDetails;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = ({ productData, handleUpdateProduct, handleDeleteProduct }) => {
    const { productId } = useParams();
    const navigate = useNavigate();

    // Fetch the product data based on the productId
    const product = productData.find(item => item.id === Number(productId));

    if (!product) {
        return <p>Product not found.</p>;
    }

    const [productDetails, setProductDetails] = useState({ ...product });
    const [images, setImages] = useState(product.images || []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductDetails(prevDetails => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file && images.length < 5) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImages([...images, reader.result]);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdate = () => {
        handleUpdateProduct({ ...productDetails, images });
        navigate('/products');
    };

    const handleDelete = () => {
        handleDeleteProduct(productId);
        navigate('/products');
    };

    return (
        <div className="product-details-container p-8">
            <h2 className="font-semibold text-2xl mb-4">Product Details</h2>
            
            <div className="flex">
                <div className="w-2/3 pr-8">
                    {/* Product Name */}
                    <div className="mb-4">
                        <label className="font-semibold">Product Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={productDetails.name} 
                            onChange={handleInputChange} 
                            className="border w-full p-2 mt-2"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <label className="font-semibold">Description</label>
                        <textarea 
                            name="description" 
                            value={productDetails.description} 
                            onChange={handleInputChange} 
                            className="border w-full p-2 mt-2 h-24"
                        />
                    </div>

                    {/* Category, Brand Name */}
                    <div className="mb-4 flex gap-4">
                        <div className="w-1/2">
                            <label className="font-semibold">Category</label>
                            <input 
                                type="text" 
                                name="category" 
                                value={productDetails.category} 
                                onChange={handleInputChange} 
                                className="border w-full p-2 mt-2"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="font-semibold">Brand Name</label>
                            <input 
                                type="text" 
                                name="brand" 
                                value={productDetails.brand} 
                                onChange={handleInputChange} 
                                className="border w-full p-2 mt-2"
                            />
                        </div>
                    </div>

                    {/* SKU, Stock Quantity */}
                    <div className="mb-4 flex gap-4">
                        <div className="w-1/2">
                            <label className="font-semibold">SKU</label>
                            <input 
                                type="text" 
                                name="sku" 
                                value={productDetails.sku} 
                                onChange={handleInputChange} 
                                className="border w-full p-2 mt-2"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="font-semibold">Stock Quantity</label>
                            <input 
                                type="number" 
                                name="stockQuantity" 
                                value={productDetails.stockQuantity} 
                                onChange={handleInputChange} 
                                className="border w-full p-2 mt-2"
                            />
                        </div>
                    </div>

                    {/* Regular Price, Sale Price */}
                    <div className="mb-4 flex gap-4">
                        <div className="w-1/2">
                            <label className="font-semibold">Regular Price</label>
                            <input 
                                type="text" 
                                name="regularPrice" 
                                value={productDetails.regularPrice} 
                                onChange={handleInputChange} 
                                className="border w-full p-2 mt-2"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="font-semibold">Sale Price</label>
                            <input 
                                type="text" 
                                name="salePrice" 
                                value={productDetails.salePrice} 
                                onChange={handleInputChange} 
                                className="border w-full p-2 mt-2"
                            />
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-4">
                        <label className="font-semibold">Tag</label>
                        <input 
                            type="text" 
                            name="tags" 
                            value={productDetails.tags} 
                            onChange={handleInputChange} 
                            className="border w-full p-2 mt-2"
                        />
                    </div>
                </div>

                {/* Product Gallery */}
                <div className="w-1/3">
                    <label className="font-semibold">Product Gallery</label>
                    <div className="border-dashed border-2 border-gray-400 p-4 mt-2 text-center">
                        <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageUpload} 
                            className="mb-3"
                        />
                        <div className="flex flex-col gap-2">
                            {images.map((image, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <img src={image} alt={`Product thumbnail ${index + 1}`} className="w-16 h-16 object-cover" />
                                    <span>Product thumbnail.png</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
                <button onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded">Update</button>
                <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">Delete</button>
                <button onClick={() => navigate('/products')} className="bg-gray-400 text-white p-2 rounded">Cancel</button>
            </div>
        </div>
    );
};

export default ProductDetails;
