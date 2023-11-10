import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import SideBar from "./SideBar";
import { useUser } from "./UserContext";
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

// const insidecontent = {
//   WebkitTextSizeAdjust: "100%",
//   WebkitTapHighlightColor: "rgba(0,0,0,0)",
//   lineHeight: "1.42857143",
//   color: "#333",
//   fontFamily: 'Georgia, "Times New Roman", Times, serif',
//   fontSize: "12px !important",
//   borderSpacing: 0,
//   borderCollapse: "collapse",
//   boxSizing: "unset",
//   padding: 0,
//   paddingBottom: "20px",
// };

// const tablecontent = {
//   WebkitTextSizeAdjust: "100%",
//   WebkitTapHighlightColor: "rgba(0,0,0,0)",
//   lineHeight: "1.42857143",
//   color: "#333",
//   fontFamily: 'Georgia, "Times New Roman", Times, serif',
//   fontSize: "12px !important",
//   borderSpacing: 0,
//   borderCollapse: "collapse",
//   boxSizing: "unset",
// };

// const tablebestseller = {
//   WebkitTextSizeAdjust: "100%",
//   WebkitTapHighlightColor: "rgba(0,0,0,0)",
//   lineHeight: "1.42857143",
//   color: "#333",
//   fontFamily: 'Georgia, "Times New Roman", Times, serif',
//   fontSize: "12px !important",
//   boxSizing: "unset",
//   borderSpacing: 0,
//   borderCollapse: "collapse",
//   backgroundColor: "transparent",
//   width: "100%",
// };
// const entry = {
//   WebkitTextSizeAdjust: "100%",
//   WebkitTapHighlightColor: "rgba(0,0,0,0)",
//   boxSizing: "unset",
//   margin: "0 !important",
//   fontWeight: "normal !important",
//   color: "#6666FF !important",
//   lineHeight: "1.1",
//   height: "32px",
//   padding: "4px 30px 6px 20px",
//   //background: 'url(images/1.png) repeat-x left bottom',
//   fontFamily: "Arial, Helvetica, sans-serif",
//   fontSize: "10px",
// };

// const titleMeta = {
//   WebkitTextSizeAdjust: "100%",
//   WebkitTapHighlightColor: "rgba(0,0,0,0)",
//   boxSizing: "unset",
//   margin: "0 !important",
//   fontWeight: "normal !important",
//   color: "#6666FF !important",
//   lineHeight: "1.1",
//   height: "32px",
//   padding: "4px 30px 6px 20px",
//   background: "url(images/1.png) repeat-x left bottom",
//   fontFamily: "Arial, Helvetica, sans-serif",
//   fontSize: "10px",
// };

// const post = {
//   WebkitTextSizeAdjust: "100%",
//   WebkitTapHighlightColor: "rgba(0,0,0,0)",
//   lineHeight: "1.42857143",
//   color: "#333",
//   fontFamily: 'Georgia, "Times New Roman", Times, serif',
//   fontSize: "12px",
//   boxSizing: "unset",
//   width: "750px",
//   margin: "25px",
//   marginBottom: "20px",
//   padding: "20px 0px",
//   background: "#FFFFFF",
//   borderRadius: "5px",
// };

// const pageStyles = {
//   WebkitTextSizeAdjust: "100%",
//   WebkitTapHighlightColor: "rgba(0,0,0,0)",
//   lineHeight: "1.42857143",
//   color: "#333",
//   fontFamily: 'Georgia, "Times New Roman", Times, serif',
//   fontSize: "12px",
//   boxSizing: "unset",
//   width: "1000px",
//   margin: "0 auto",
//   padding: "20px 20px 0px 20px",
// };

// const content = {
//   WebkitTextSizeAdjust: "100%",
//   WebkitTapHighlightColor: "rgba(0,0,0,0)",
//   lineHeight: "1.42857143",
//   color: "#333",
//   fontFamily: 'Georgia, "Times New Roman", Times, serif',
//   fontSize: "12px",
//   boxSizing: "unset",
//   float: "right",
//   width: "750px",
// };

const DoorBell = (e) => {
  const { loggedUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const makerFilter = new URLSearchParams(location.search).get("maker");
  const doorBellsData = [
    {
      name: "DoorBell1",
      price: 349.99,
      image: "images/doorBells/db1.jpg",
      maker: "amazon",
      type: "doorBells",
    },
    {
      name: "DoorBell2",
      price: 399.99,
      image: "images/doorBells/db2.jpg",
      maker: "amazon",
      type: "doorBells",
    },
    {
      name: "DoorBell3",
      price: 439.99,
      image: "images/doorBells/db3.jpg",
      maker: "arlo",
      type: "doorBells",
    },
    {
      name: "DoorBell4",
      price: 934.99,
      image: "images/doorBells/db4.jpg",
      maker: "arlo",
      type: "doorBells",
    },
    {
      name: "DoorBell5",
      price: 341.99,
      image: "images/doorBells/db5.jpg",
      maker: "nestHello",
      type: "doorBells",
    },
  ];

  const handleBuyNow = (doorBell) => {
    if (!loggedUser) {
      navigate("/Login",{state:{from:'Please Login to add items to cart'}});
      return;
    }
    navigate("/Cart", {
      state: {
        cartItems: [doorBell],
      },
    });
  };

  const filteredDoorBellsData =
    makerFilter == null
      ? doorBellsData
      : doorBellsData.filter((doorBell) => doorBell.maker === makerFilter);

  return (
    <div>
      <Logo />
      <SideBar />
      <div id="page">
        <h2>
          <p style={{ fontSize: "24px" }}>Door Bells</p>
        </h2>
        <table>
          <tbody>
            {filteredDoorBellsData.map((doorBell, index) => (
              <tr key={index}>
                <td>
                  <div>
                    <h3>{doorBell.name}</h3>
                    <strong>${doorBell.price}</strong>
                    <ul>
                      <li style={item}>
                        <img style={img} src={doorBell.image} alt="" />
                      </li>
                      <button
                        style={shopitem}
                        type="button"
                        onClick={() => handleBuyNow(doorBell)}
                      >
                        Buy Now
                      </button>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoorBell;
