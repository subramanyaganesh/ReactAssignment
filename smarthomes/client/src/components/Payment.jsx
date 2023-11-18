import React from "react";
import Logo from "./Logo";
import Sidebar from "./SideBar";
import { useCart } from "./CartContext";
import { useLocation } from "react-router-dom";


const textStyle = {
  color: "green",
  fontSize: "20px",
  fontWeight: "bold",
};

const Payment = () => {
  let { count } = useCart();
  const location = useLocation();
  const { deliveryDate } = location.state;
  
  
  return (
    <div>
      <Logo />
      <Sidebar />
      <div>
        <h2 style={{
            borderBottom: "3px solid black",
            fontSize: "24px",
            color: "purple",
            textAlign: "center",
          }}>Summary</h2>
        <h3 style={textStyle}>Your Order number is::{count}</h3>
        <h3 style={textStyle}>Your Order Will be delivered on::{deliveryDate}</h3>
      </div>
    </div>
  );
};

export default Payment;
