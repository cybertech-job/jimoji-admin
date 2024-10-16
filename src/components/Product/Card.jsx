import { BiArrowToBottom } from "react-icons/bi";
import prodImg from "../../assets/prodImage.png"
import { GoKebabHorizontal } from "react-icons/go";
import { BsArrowUp } from "react-icons/bs";
import Progress from "./Progress";

export default function Card({product}) {
    return (
        <div className="bg-[#fafafa] rounded-lg p-4 h-auto w-[360px] cursor-pointer">
                <div className="card-header flex justify-between items-start">
                    <div className="product-details">
                        <img src={prodImg} alt="" className="w-14" />
                        
                        <div>
                            <h2 className="mb-1 text-xl font-semibold">{product.title}</h2>
                            <h3 className="text-black  text-lg font-semibold opacity-55 mb-3">{product.subtitle}</h3>
                            <p className="font-bold">{product.price}</p>
                        </div>
                    </div>

                    <div className=" bg-[#E7E7E3] cursor-pointer h-auto w-auto px-3 py-1 shadow-sm rounded-lg">
                        <GoKebabHorizontal className="text-gray-600 text-2xl" />
                    </div>

                </div>

                <div className="card-summary">
                    <h1 className="text-lg font-semibold">Summary</h1>
                    <p className="mb-4 text-gray-400">
                        {product.description}
                    </p>
                </div>

                <div className="sales border-2 border-gray-400 rounded-lg p-4">
                        <div className="flex justify-between items-center py-2  border-b-[1.5px] border-gray-400">
                            <h4 className="font-semibold">{product.sales}</h4>
                            <div className="flex items-center">
                                <BsArrowUp className="text-orange-400 font-black text-xl" />
                                <p className="ml-2">{product.remainingProd}</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-2">
                            <h4 className="font-semibold">Remaining Products</h4>
                            <div className="flex items-center">
                                <Progress />
                                <p className="ml-2">1269</p>
                            </div>
                        </div>
                </div>
        </div>

    )
}