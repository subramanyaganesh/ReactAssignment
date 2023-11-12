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
const Speaker = (e) => {
  const { loggedUser } = useUser();
  const { addToCart } = useCart();
  const { speakers } = useData();
  const navigate = useNavigate();
  const location = useLocation();

  let speakersData = speakers;

  // the request from the sidebar is sent as a query parameter and is accessed using the URLSearchParams API. The to parameter of the link can hold the query parameter.
  const makerFilter = new URLSearchParams(location.search).get("maker");

  const handleBuyNow = (speaker) => {
    if (!loggedUser) {
      navigate("/Login", {
        state: { from: "Please Login to add items to cart" },
      });
      return;
    }
    addToCart(speaker);
    navigate("/Cart");
  };

  const filteredSpeakersData =
    makerFilter == null
      ? speakersData
      : speakersData.filter(
          (speaker) => speaker.manufacturer.toLowerCase() === makerFilter.toLowerCase()
        );

  const batchSize = 3;
  const rows = [];
  for (let i = 0; i < filteredSpeakersData.length; i += batchSize) {
    const batch = filteredSpeakersData.slice(i, i + batchSize);
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
          Speakers
        </h2>
        {rows.map((batch, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {batch.map((speaker, index) => (
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
                <h3>{speaker.name}</h3>
                <strong style={{color:'greenyellow'}}>${loggedUser?.usertype==='retailer'? speaker.price*0.6:speaker.price}</strong>
                <ul>
                  <li style={item}>
                  <p style={{fontStyle:'italic',color:'ThreeDFace'}}>{speaker.description}</p>
                    <img
                      style={img}
                      src={`images/${speaker.type}/${speaker.image}`}
                      alt=""
                    />
                  </li>
                  <button
                    style={shopitem}
                    type="button"
                    onClick={() => handleBuyNow(speaker)}
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

export default Speaker;
