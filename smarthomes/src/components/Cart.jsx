import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./SideBar";
import Logo from "./Logo";
import { useCart } from "./CartContext";

const buttonStyle = {
  WebkitTextSizeAdjust: "100%",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  lineHeight: "1.42857143",
  color: "#333",
  fontFamily: 'Georgia, "Times New Roman", Times, serif',
  fontSize: "12px !important",
  borderSpacing: 0,
  borderCollapse: "collapse",
  boxSizing: "unset",
  borderRadius: "5px",
  border: "1px solid #000",
  padding: "1px",
  width: "200px",
  marginLeft: "10px",
  marginRight: "auto",
};
const Cart = () => {
  const navigate = useNavigate();

  const { cartItems } = useCart();
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    navigate("/Checkout", {
      state: {
        cartItems,
      },
    });
  };

  const textStyle = {
    width: "100px",
    borderRight: "1px solid rgb(221, 221, 221)",
    paddingRight: "10px",
    borderBottom: "1px solid rgb(221, 221, 221)",
  };
  return (
    <div>
      <Logo />
      <Sidebar />
      <div>
        <h2
          style={{
            borderBottom: "3px solid black",
            fontSize: "24px",
            color: "purple",
            textAlign: "center",
          }}
        >
          Your Cart
        </h2>
        {cartItems.length > 0 ? (
          <div style={{ marginLeft: "10px" }}>
            <table
              style={{
                border: "1px solid rgb(221, 221, 221)",
                borderCollapse: "collapse",
                padding: "10px",
                marginLeft: "220px",
              }}
            >
              <thead>
                <tr>
                  <th style={textStyle}>Item</th>
                  <th style={textStyle}>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td style={textStyle}>{item.name}</td>
                    <td style={textStyle}>${item.price}</td>
                  </tr>
                ))}
              </tbody>
              <td
                colSpan="2"
                style={{
                  textAlign: "center",
                  color: "purple",
                  fontStyle: "italic",
                }}
              >
                Total: ${calculateTotal()}
              </td>
            </table>

            <button colSpan="2" style={buttonStyle} onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        ) : (
          <p style={{ textAlign: "center", color: "brown", fontSize: "20px" }}>
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
