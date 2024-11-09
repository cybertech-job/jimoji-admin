
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
        <div className="p-6 w-full relative overflow-y-hidden hover:overflow-y-auto h-[85vh] scrollbar-thin overflow-auto scrollbar-gutter-stable">
            <h2 className="font-bold text-3xl mb-2">Product Details</h2>
            <h3 className='font-semibold text-xl'>Home &gt; All Products &gt; Product Details</h3>
            
            <div className="mt-8 bg-white rounded-lg p-4 h-auto grid grid-cols-1 lg:grid-cols-[55%,45%] gap-3">
                <div className="">
                    {/* Product Name */}
                    <div className="mb-5">
                        <label className="font-semibold text-xl mb-3">Product Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={productDetails.title} 
                            onChange={handleInputChange} 
                            className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%]"
                        />
                    </div>

                    {/* Product Alias */}
                    <div className="mb-5">
                        <label className="font-semibold text-xl mb-3">Product Alias</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={productDetails.subtitle} 
                            onChange={handleInputChange} 
                            className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%]"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-5">
                        <label className="font-semibold text-xl mb-3">Description</label>
                        <textarea 
                            name="description" 
                            value={productDetails.description} 
                            onChange={handleInputChange} 
                            className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%] h-[200px]"
                        />
                    </div>

                    {/* Product Category */}
                    <div className="mb-5">
                            <label className="font-semibold text-xl mb-3">Category</label>
                            <input 
                                type="text" 
                                name="category" 
                                value={productDetails.category} 
                                onChange={handleInputChange} 
                                className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%]"
                            />
                        </div>

                    {/* Product Brand Name */}
                    <div className="mb-5">
                            <label className="font-semibold text-xl mb-3">Brand Name</label>
                            <input 
                                type="text" 
                                name="brand" 
                                value={productDetails.brand} 
                                onChange={handleInputChange} 
                                className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%]"
                            />
                    </div>

                    
                    {/* SKU, Stock Quantity */}
                    <div className="mb-5 flex gap-4">
                        <div className="w-1/2">
                            <label className="font-semibold text-xl mb-3">SKU</label>
                            <input 
                                type="text" 
                                name="sku" 
                                value={productDetails.sku} 
                                onChange={handleInputChange} 
                                className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%]"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="font-semibold text-xl mb-3">Stock Quantity</label>
                            <input 
                                type="number" 
                                name="stockQuantity" 
                                value={productDetails.stockQuantity} 
                                onChange={handleInputChange} 
                                className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%]"
                            />
                        </div>
                    </div>

                    {/* Regular Price, Sale Price */}
                    <div className="mb-5 flex gap-4">
                        <div className="w-1/2">
                            <label className="font-semibold text-xl mb-3">Regular Price</label>
                            <input 
                                type="text" 
                                name="regularPrice" 
                                value={productDetails.regularPrice} 
                                onChange={handleInputChange} 
                                className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%]"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="font-semibold text-xl mb-3">Sale Price</label>
                            <input 
                                type="text" 
                                name="salePrice" 
                                value={productDetails.salePrice} 
                                onChange={handleInputChange} 
                                className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%]"
                            />
                        </div>
                    </div>
                </div>

                {/* Product Gallery
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
                </div> */}

                {/* Main Image Display */}
                <div className="img-background border-2 border-gray-400 bg-gray-400 h-[400px] rounded-lg mb-8 flex items-center justify-center">
                        {images[0] ? (
                            <img src={images[0]} alt="Primary" className="w-full h-full object-cover rounded-lg" />
                        ) : (
                            <span className="text-gray-500">Main Image</span>
                        )}
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
