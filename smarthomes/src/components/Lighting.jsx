import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import SideBar from "./SideBar";
import { useUser } from "./UserContext";
import { useCart } from "./CartContext";
import { useData } from "./Data";

const img = {
  WebkitTextSizeAdjust: "100%",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  color: "#333",
  fontFamily: 'Georgia, "Times New Roman", Times, serif',
  fontSize: "12px !important",
  borderSpacing: 0,
  borderCollapse: "collapse",
  lineHeight: "240%",
  listStyle: "none",
  boxSizing: "unset",
  border: 0,
  verticalAlign: "middle",
  display: "block",
  width: "180px",
  height: "160px",
  marginLeft: "auto",
  marginRight: "auto",
};

const item = {
  WebkitTextSizeAdjust: "100%",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  color: "#333",
  fontFamily: 'Georgia, "Times New Roman", Times, serif',
  fontSize: "12px !important",
  borderSpacing: 0,
  borderCollapse: "collapse",
  lineHeight: "240%",
  listStyle: "none",
  boxSizing: "unset",
  marginBottom: "5px",
  marginTop: "6px",
  border: "1px solid #000",
};

const shopitem = {
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
  padding: "4px",
  width: "200px",
  marginLeft: "auto",
  marginRight: "auto",
};
const Lighting = (e) => {
  const { loggedUser } = useUser();
  const { addToCart } = useCart();
  const { lightings } = useData();
  const navigate = useNavigate();
  const location = useLocation();

  let lightingsData = lightings;

  // the request from the sidebar is sent as a query parameter and is accessed using the URLSearchParams API. The to parameter of the link can hold the query parameter.
  const makerFilter = new URLSearchParams(location.search).get("maker");

  const handleBuyNow = (lighting) => {
    if (!loggedUser) {
      navigate("/Login", {
        state: { from: "Please Login to add items to cart" },
      });
      return;
    }
    addToCart(lighting);
    navigate("/Cart");
  };

  const filteredLightingsData =
    makerFilter == null
      ? lightingsData
      : lightingsData.filter(
          (lighting) => lighting.manufacturer.toLowerCase() === makerFilter.toLowerCase()
        );

  const batchSize = 3;
  const rows = [];
  for (let i = 0; i < filteredLightingsData.length; i += batchSize) {
    const batch = filteredLightingsData.slice(i, i + batchSize);
    rows.push(batch);
  }

  return (
    <div>
      
      <Logo />
      <SideBar />
      <div id="page">
        <h2
          style={{
            borderBottom: "3px solid black",
            fontSize: "24px",
            color: "purple",
            textAlign: "center",
          }}
        >
          Lightings
        </h2>
        
        {rows.map((batch, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {batch.map((lighting, index) => (
              <div
                key={index}
                style={{
                  marginRight: "10px",
                  border: "1px solid #ddd",
                  padding: "10px",
                  borderRadius: "8px",
                  marginBottom: "10px",
                  marginLeft: "40px",
                }}
              >
                <h3>{lighting.name}</h3>
                <strong>${lighting.price}</strong>
                <ul>
                  <li style={item}>
                    <img
                      style={img}
                      src={`images/${lighting.type}/${lighting.image}`}
                      alt=""
                    />
                  </li>
                  <button
                    style={shopitem}
                    type="button"
                    onClick={() => handleBuyNow(lighting)}
                  >
                    Buy Now
                  </button>
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lighting;
