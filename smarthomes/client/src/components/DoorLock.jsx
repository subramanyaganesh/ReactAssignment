import { React, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import SideBar from "./SideBar";
import { useUser } from "./UserContext";
import { useCart } from "./CartContext";

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
const DoorLock = (e) => {
  const { loggedUser } = useUser();
  const { addToCart } = useCart();
  let [doorLocks, setDoorLocks] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/api/getDoorLocks");
        const data = await response.json();
        setDoorLocks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // the request from the sidebar is sent as a query parameter and is accessed using the URLSearchParams API. The to parameter of the link can hold the query parameter.
  const makerFilter = new URLSearchParams(location.search).get("maker");
  let doorLocksData = doorLocks;
  const handleBuyNow = (doorLock) => {
    if (!loggedUser) {
      navigate("/Login", {
        state: { from: "Please Login to add items to cart" },
      });
      return;
    }
    addToCart(doorLock);
    navigate("/Cart");
  };
  const handleViewReview = (doorLock) => {
    if (!loggedUser) {
      navigate("/Login", {
        state: { from: "Please Login to add items to cart" },
      });
      return;
    }
    navigate("/ViewReview", {
      state: {
        doorLock,
      },
    });
  };


  const handleWriteReview = (doorLock) => {
    if (!loggedUser) {
      navigate("/Login", {
        state: { from: "Please Login to add items to cart" },
      });
      return;
    }
    navigate("/WriteReview", {
      state: {
        product:doorLock,
      },
    });
  };
  

  const filteredDoorLocksData =
    makerFilter == null
      ? doorLocksData
      : doorLocksData.filter(
          (doorLock) =>
            doorLock.productManufacturer.toLowerCase() === makerFilter.toLowerCase()
        );

  const batchSize = 3;
  const rows = [];
  for (let i = 0; i < filteredDoorLocksData.length; i += batchSize) {
    const batch = filteredDoorLocksData.slice(i, i + batchSize);
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
          Door Locks
        </h2>
        {rows.map((batch, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {batch.map((doorLock, index) => (
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
                <h3>{doorLock.productName}</h3>
                <strong style={{ color: "greenyellow" }}>
                  $
                  {loggedUser?.usertype === "retailer"
                    ?(doorLock.productPrice * 0.6).toFixed(3)
                    : doorLock.productPrice.toFixed(3)}
                </strong>
                <ul>
                  <li style={item}>
                    <p style={{ fontStyle: "italic", color: "ThreeDFace" }}>
                    {`This is ${doorLock.productName}`}
                    </p>
                    <img
                      style={img}
                      src={`images/${doorLock.ProductType}/${doorLock.productImage}`}
                      alt=""
                    />
                  </li>
                  <button
                    style={shopitem}
                    type="button"
                    onClick={() => handleBuyNow(doorLock)}
                  >
                    Buy Now
                  </button>
                  <button
                    style={shopitem}
                    type="button"
                    onClick={() => handleWriteReview(doorLock)}
                  >
                    Write Review
                  </button>
                  <button
                    style={shopitem}
                    type="button"
                    onClick={() => handleViewReview(doorLock)}
                  >
                    View Review
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

export default DoorLock;
