import React from "react";
import { useLocation } from "react-router-dom";
import OrderOne from "../components/order/OrderOne";

const Order = () => {
  return (
    <div className="overflow-y-hidden hover:overflow-y-auto h-[85vh]  scrollbar-thin overflow-auto scrollbar-gutter-stable">
      <OrderOne />
    </div>
  );
};

export default Order;
