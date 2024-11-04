
import { useState } from "react";
import NewProductForm from "../components/Product/NewProductForm";
import { IoImageOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

export default function AddProduct({ handleAddProduct }) {


    const navigate = useNavigate();


    const [images, setImages] = useState([]);
    const [productDetails, setProductDetails] = useState({});

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (images.length < 5) {
                    setImages((prevImages) => [...prevImages, reader.result]);
                } else {
                    alert('You can only upload up to 5 images.');
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        if (!images[0]) {
            alert("Please upload a main image.");
            return;
        }

        const newProduct = {
            ...productDetails,
            title: productDetails.prodName,
            subtitle: productDetails.prodSubtitle,
            description: productDetails.prodDesc,
            remainingProd: productDetails.prodStockQty,
            sales: productDetails.prodStockQty,
            price: productDetails.prodSalesPrice,
            mainImage: images[0],
            id: Date.now(), // Add a unique ID
        };

        console.log(newProduct);
        
        // Add the product to Product component if handleAddProduct exists
        if (handleAddProduct) {
            handleAddProduct(newProduct);
        }

        navigate('/product'); // Go back to the Product page
    };


    return (
        <div className="p-6 w-full relative overflow-y-hidden hover:overflow-y-auto h-[85vh] scrollbar-thin overflow-auto scrollbar-gutter-stable">
            {/* Header */}
            <div className="mb-6">
                <h1 className='font-bold text-3xl mb-2'>Product Details</h1>
                <h3 className="font-semibold text-xl">Home &gt; All Products &gt; Add New Product</h3>
            </div>

            {/* New Product Form */}
            <div className="bg-white rounded-lg p-4 h-auto grid grid-cols-1 lg:grid-cols-[55%,45%] gap-3">
                {/* Left Side */}
                <div className="bg-transparent p-4">
                    <NewProductForm setProductDetails={setProductDetails} />  
                </div>

                {/* Right Side */}
                <div className="bg-transparent p-4">
                    {/* Main Image Display */}
                    <div className="img-background border-2 border-gray-400 bg-gray-400 h-[400px] rounded-lg mb-8 flex items-center justify-center">
                        {images[0] ? (
                            <img src={images[0]} alt="Primary" className="w-full h-full object-cover rounded-lg" />
                        ) : (
                            <span className="text-gray-500">Main Image</span>
                        )}
                    </div>

                    <div className="product-gallery">
                        <h1 className="text-xl font-semibold mb-4 text-center md:text-left underline md:no-underline">Product Gallery</h1>

                        {/* Upload Button */}
                        {images.length < 5 && (
                            <div className="mb-4 border-dashed border-2 border-black rounded flex justify-center items-center p-8">
                                <label className="cursor-pointer bg-transparent px-4 py-2 rounded-lg flex flex-col justify-center items-center">
                                    <IoImageOutline className="text-5xl text-blue-950" />
                                    <input 
                                        type="file" 
                                        accept="image/*" 
                                        className="hidden" 
                                        onChange={handleImageUpload} 
                                    />
                                    <span className="text-center">Drop your images here, jpeg and png allowed <br />Browse your computer</span>
                                </label>
                            </div>
                        )}

                        {/* Additional Images Display */}
                        {/* flex flex-col gap-4 flex-wrap */}
                        <div className="grid grid-cols-2 justify-items-center gap-4 md:grid-cols-1 md:justify-items-start">
                            {images.slice(1).map((image, index) => (
                                <div key={index} className="w-24 h-24 border-2 rounded-lg border-gray-400">
                                    <img src={image} alt={`Uploaded ${index + 2}`} className="w-full h-full object-cover rounded-lg" />
                                </div>
                            ))}

                            {/* Empty placeholders for remaining slots */}
                            {Array.from({ length: Math.max(0, 4 - images.length + 1) }).map((_, i) => (
                                <div key={`placeholder-${i}`} className="w-24 h-24 bg-gray-400 rounded-lg">
                                    {/* <span>Image {i + images.length + 1}</span> */}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Save button */}
                    <div className="mt-4 flex justify-between items-center">
                        <button 
                            className="bg-[#003F62] text-white py-2 w-[50%] text-xl rounded-[8px]"
                            onClick={handleSave}
                        >
                            Save
                        </button>

                        <button className="border-2 border-black py-2 w-[50%] text-xl rounded-[8px] ml-4"onClick={() => navigate("/product")}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

