import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./SideBar";
import Logo from "./Logo";
import { useCart } from "./CartContext";
// import Carousel from "./Carousel";
import { useState, useEffect } from "react";

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
  cursor: "pointer",
};

const textStyle = {
  width: "100px",
  borderRight: "1px solid rgb(221, 221, 221)",
  paddingRight: "10px",
  borderBottom: "1px solid rgb(221, 221, 221)",
};
const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useCart();
  const [carouselItems, setCarouselItems] = useState([]); // State for items to be displayed in Carousel

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.productPrice, 0).toFixed(2);

  useEffect(() => {
    // Update carouselItems whenever cartItems changes
    setCarouselItems(cartItems);
  }, [cartItems]);

  const handleCheckout = () => {
    navigate("/Checkout", {
      state: {
        cartItems,
      },
    });
  };

  const handelRemove = (item) => {
    removeFromCart(item);
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
                    <td style={textStyle}>{item.productName}</td>
                    <td style={textStyle}>${item.productPrice}</td>
                    <button
                      onClick={() => handelRemove(item)}
                      style={{ ...buttonStyle, width: "80px" }}
                    >
                      {" "}
                      Remove
                    </button>
                  </tr>
                ))}
              </tbody>
              <td
                colSpan="3"
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

      {/* {cartItems.length > 0 && <Carousel items={carouselItems} />} */}
    </div>
  );
};

export default Cart;
