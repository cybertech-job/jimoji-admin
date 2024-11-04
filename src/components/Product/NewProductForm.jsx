
export default function NewProductForm({ setProductDetails }) {
  
    return (
        <div className="">
            <div className="form-group mb-5">
                <p className="font-semibold text-xl mb-3">Product Name</p>
                <input 
                    type="text" 
                    placeholder="Type name here" 
                    className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%]"
                    onChange={(e) => setProductDetails(prev => ({ ...prev, prodName: e.target.value }))} 
                />
            </div>
            <div className="form-group mb-5">
                <p className="font-semibold text-xl mb-3">Product Alias</p>
                <input 
                    type="text" 
                    placeholder="Type product alias here" 
                    className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%]"
                    onChange={(e) => setProductDetails(prev => ({ ...prev, prodSubtitle: e.target.value }))} 
                />
            </div>

            <div className="form-group mb-5">
                <p className="font-semibold text-xl mb-3">Description</p>
                <textarea 
                    type="text" 
                    placeholder="Type description here" 
                    className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%] h-[200px]"
                    onChange={(e) => setProductDetails(prev => ({ ...prev, prodDesc: e.target.value }))}
                />
            </div>

            <div className="form-group mb-5">
                <p className="font-semibold text-xl mb-3">Category</p>
                <input 
                    type="text" 
                    placeholder="Type category here" 
                    className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%]"
                    onChange={(e) => setProductDetails(prev => ({ ...prev, prodCategory: e.target.value }))}
                />
            </div>

            <div className="form-group mb-5">
                <p className="font-semibold text-xl mb-3">Brand Name</p>
                <input 
                    type="text" 
                    placeholder="Type brand name here" 
                    className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%]"
                    onChange={(e) => setProductDetails(prev => ({ ...prev, prodBrandName: e.target.value }))}
                />
            </div>

            {/* grid */}
            <div className="grid grid-cols-2 gap-4">
                <div className="form-group">
                    <p className="font-semibold text-xl mb-3">SKU</p>
                    <input 
                        type="text" 
                        placeholder="Fox-3983" 
                        className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%]"
                        onChange={(e) => setProductDetails(prev => ({ ...prev, prodSKU: e.target.value }))}
                    />
                </div>
                <div className="form-group">
                    <p className="font-semibold text-xl mb-3">Stock Quantity</p>
                    <input 
                        type="text" 
                        placeholder="1258" 
                        className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%]"
                        onChange={(e) => setProductDetails(prev => ({ ...prev, prodStockQty: e.target.value }))}
                    />
                </div>
                <div className="form-group">
                    <p className="font-semibold text-xl mb-3">Regular Price</p>
                    <input 
                        type="text" 
                        placeholder="$1000" 
                        className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%]"
                        onChange={(e) => setProductDetails(prev => ({ ...prev, prodRegPrice: e.target.value }))}
                    />
                </div>
                <div className="form-group">
                    <p className="font-semibold text-xl mb-3">Sale Price</p>
                    <input 
                        type="text" 
                        placeholder="$450" 
                        className="border-[2px] border-black rounded-xl p-3 text-lg w-[100%]"
                        onChange={(e) => setProductDetails(prev => ({ ...prev, prodSalesPrice: e.target.value }))}
                    />
                </div>
            </div>
            
        </div>
    )
}