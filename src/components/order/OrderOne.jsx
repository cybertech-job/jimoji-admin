import React, { useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";
import tgimage from "../../assets/tgtechimage.jpeg";
import { Link } from "react-router-dom";

const OrderOne = () => {
  const [activePage, setActivePage] = useState(1);

  const handleClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div className="px-3 py-4">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-[24px] font-[600] text-black">Orders List</h2>
          <p className="text-[16px] font-[400] text-[#000]">
            Home &gt; Order List
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-8 pr-8">
          <h2 className="flex gap-3">
            <span className="text-[16px] font-[600]">
              <IoCalendarOutline className="text[24px] mt-1 cursor-pointer" />
            </span>
            Feb 16, 2022 - Feb 20, 2022
          </h2>
          <select
            name="status"
            className="w-[219px] h-[52px] rounded-xl outline-none ml-2.5 bg-[#F4F2F2] p-2"
          >
            <option value="">Change Status</option>
            <option value="">Delivered</option>
            <option value="">Canceled</option>
          </select>
        </div>
      </div>

      {/* table format */}
      <div className="bg-[#f8f8f8] p-6 mt-6 mr-6 rounded-xl shadow-sm">
        {/* Title and Filter */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-[24px]">Recent Purchases</h2>
          <div className="flex items-center space-x-2">
            <BiDotsVerticalRounded className="text-[24px] mr-11 cursor-pointer" />
          </div>
        </div>
        <hr />

        {/* Orders Table */}
        <table className="table-auto w-full text-left ">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="p-5">
                <input type="checkbox" />
              </th>
              <th className="p-3">Product</th>
              <th className="p-3">Order ID</th>
              <th className="p-3">Date</th>
              <th className="p-3">Customer Name</th>
              <th className="p-3">Status</th>
              <th className="p-3">Amount</th>
            </tr>
          </thead>

          <tbody>
            {[
              {
                id: "25426",
                date: "Nov 8th, 2023",
                name: "Tgtech",
                status: "Delivered",
                amount: "₹200.00",
                image: tgimage,
              },
              {
                id: "25425",
                date: "Nov 7th, 2023",
                name: "Komal",
                status: "Canceled",
                amount: "₹200.00",
                image: "https://example.com/images/komal.jpeg",
              },
              {
                id: "25424",
                date: "Nov 6th, 2023",
                name: "Nikhil",
                status: "Delivered",
                amount: "₹200.00",
                image: "https://example.com/images/nikhil.jpeg",
              },
              {
                id: "25423",
                date: "Nov 5th, 2023",
                name: "Shivam",
                status: "Canceled",
                amount: "₹200.00",
                image: "https://example.com/images/shivam.jpeg",
              },
              {
                id: "25422",
                date: "Nov 4th, 2023",
                name: "Shadab",
                status: "Delivered",
                amount: "₹200.00",
                image: "https://example.com/images/shadab.jpeg",
              },
              {
                id: "25421",
                date: "Nov 2nd, 2023",
                name: "Yogesh",
                status: "Delivered",
                amount: "₹200.00",
                image: "https://example.com/images/yogesh.jpeg",
              },
              {
                id: "25423",
                date: "Nov 1st, 2023",
                name: "Sunita",
                status: "Canceled",
                amount: "₹200.00",
                image: "https://example.com/images/sunita.jpeg",
              },
              {
                id: "25421",
                date: "Nov 1st, 2023",
                name: "Priyanka",
                status: "Delivered",
                amount: "₹200.00",
                image: "https://example.com/images/priyanka.jpeg",
              },
            ].map((order, index) => (
              <tr key={index} className="border-b">
                <td className="p-5 ">
                  <Link to={`/order/${order.id}`}>
                    {" "}
                    <input type="checkbox" />{" "}
                  </Link>
                </td>
                <td className="p-3 text-[14px]">Lorem Ipsum</td>
                <td className="p-3 text-[14px]">{order.id}</td>
                <td className="p-3 text-[14px]">{order.date}</td>
                <td className="p-3 flex items-center space-x-2 text-[14px]">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-5 h-5 rounded-full"
                  />
                  <span>{order.name}</span>
                </td>
                <td className="p-3 text-[14px]">
                  <div
                    className={`ml-[-20px] mb-[-18px] w-3 h-3 rounded-xl text-xs ${
                      order.status === "Delivered"
                        ? "bg-[#003F62]"
                        : "bg-[#FFA52F]"
                    }`}
                  ></div>
                  <span>{order.status}</span>
                </td>
                <td className="p-3 text-[14px]">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex gap-5 items-center mt-6">
        <div className="flex items-center space-x-5">
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => handleClick(page)}
              className={`px-4 py-1 border-2 border-[#232321] rounded-xl ${
                activePage === page ? "bg-black text-white" : "bg-transparent"
              }`}
            >
              {page}
            </button>
          ))}

          <button className="px-1 py-1">...</button>
          <button
            id="10"
            className="px-4 py-1 border-2 border-[#232321] rounded-xl"
          >
            10
          </button>
        </div>
        <button className="px-7 py-1.5 border-2 border-[#232321] bg-transparent  rounded-xl">
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default OrderOne;
