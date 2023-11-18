import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
import { useCart } from "./CartContext";

const containerStyle = {
  display: "flex",
};

const lists = {
  backgroundColor: 'transparent',
  border: 'none',
  paddingLeft: "20px",
  textDecoration: "none",
  cursor: 'pointer',
};

const glyphicon = {
  WebkitTextSizeAdjust: "100%",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  listStyle: "none",
  letterSpacing: "-1px",
  textAlign: "center",
  fontSize: "18px",
  color: "#FFFFFF",
  boxSizing: "unset",
  position: "relative",
  top: "1px",
  display: "inline-block",
  fontFamily: "Glyphicons Halflings",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1",
  WebkitFontSmoothing: "antialiased",
};

const Header = () => {
  const { loggedUser } = useUser();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const handleReload = () => {
    navigate("/home");
    window.location.reload();
  };

  const check = () => {
    if (loggedUser)
      if (loggedUser.usertype === "retailer") {
        return [
          { name: "Add Product", link: "/ProductCrud" },
          { name: "Update Product", link: "/ProductCrud" },
          { name: "Delete Product", link: "/ProductCrud" },
          { name: "View Order", link: "/ViewOrder" },
          { name: `Hi,${loggedUser?.username}`, link: null },
          { name: "Logout", link: "/home" },
          { name: `Cart(${cartItems.length})`, link: "/Cart" },
        ];
      } else {
        return [
          { name: "View Order", link: "/ViewOrder" },
          { name: `Hi,${loggedUser?.username}`, link: null },
          { name: "Logout", link: "/home" },
          { name: `Cart(${cartItems.length})`, link: "/Cart" },
        ];
      }
    else
      return [
        { name: "View Order", link: "/ViewOrder" },
        { name: "Login", link: "/Login" },
        { name: "Cart(0)", link: "/Cart" },
      ];
  };
  const RightHeaderList = check();

  const LeftHeaderList = [
    { name: "Home", link: "/home" },
    { name: "DoorBells", link: "/DoorBellList" },
    { name: "DoorLocks", link: "/DoorLockList" },
    { name: "Lightings", link: "/LightingList" },
    { name: "Speakers", link: "/SpeakerList" },
    { name: "Thermostat", link: "/ThermostatList" },
    { name: "Trending", link: "/Trending" },
  ];

  const handleAddProduct = () => {
    navigate("/ProductAdd", { state: "addProduct" });
  }
  const handleUpdateProduct = () => {
    navigate("/ProductUpdate", { state: "updateProduct" });
  }
  const handleDeleteProduct = () => {
    navigate("/ProductDelete", { state: "deleteProduct" });
  }
  
  return (
    <div>
      <div style={containerStyle}>
        {LeftHeaderList.map((mm, index) => {
          return (
            <Link key={index} style={lists} to={mm.link}>
              <span style={glyphicon}>{mm.name}</span>
            </Link>
          );
        })}
      </div>

      <div style={{ float: "right", paddingRight: "20px" }}>
        <div style={containerStyle}>


          {RightHeaderList.map((mm, index) => {
            switch (mm.name) {
              case "Logout":
                return (
                  <Link
                    key={index}
                    style={lists}
                    to={mm.link}
                    onClick={handleReload}
                  >
                    <span style={glyphicon}>Logout</span>
                  </Link>
                );

              case "Add Product":
                return (
                  <button key={index}                 
                    style={lists}
                    onClick={handleAddProduct}
                  >
                    <span style={glyphicon}>{mm.name}</span>
                  </button>
                );

              case "Update Product":
                return (
                  <button key={index}
                    style={lists}
                    onClick={handleUpdateProduct}
                  >
                    <span style={glyphicon}>{mm.name}</span>
                  </button>
                );
              case "Delete Product":
                return (
                  <button key={index}
                    style={lists}
                    onClick={handleDeleteProduct}
                  >
                    <span style={glyphicon}>{mm.name}</span>
                  </button>
                );
              default:
                return (
                  <Link key={index} style={lists} to={mm.link}>
                    <span style={glyphicon}>{mm.name}</span>
                  </Link>
                );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
