import React, { useState, useEffect } from "react";
import { useData } from "./Data";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
import { useCart } from "./CartContext";

const itemStyle = {
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

const Carousel = ({ items }) => {
  const { loggedUser } = useUser();
  const { addToCart } = useCart();
  const { navigate } = useNavigate();
  const { accessories } = useData();

  let [index, setindex] = useState(0);
  let [counter, setCounter] = useState(0);

  const allRelatedItemsArray = items?.flatMap((item) =>
    accessories?.filter((element) => item.accessories?.includes(element.id))
  );
  const [activeList, setActiveList] = useState(allRelatedItemsArray?.slice(index, index + 3));

  console.log(activeList);
  //if i have to run the setTimer only once then i have to use useEffect
  //if i put it in outside then whenever the component re-renders it will run hence it will have 
  //multiple setIntervals running at the same time
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setindex((prevIndex) => (prevIndex + 1) % 3);
    setActiveList(allRelatedItemsArray?.slice(index, index + 3));
  }, [counter]);

  const handleBuyNow = (doorBell) => {
    if (!loggedUser) {
      navigate("/Login", {
        state: { from: "Please Login to add items to cart" },
      });
      return;
    }
    addToCart(doorBell);
    navigate("/Cart");
  };

  return (
    <div>
      <h2>Accessories</h2>
      <div key={counter}
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px 60px 10px 230px",
          border: "1px solid #ddd",
        }}
      >
        <button>Previous</button>
        {
          <div
            style={{ display: "flex", flexGrow: "initial", padding: "10px" }}
          >

            {activeList?.map((item, index) => {
              return (
                <ul
                  style={{
                    marginLeft: "10px",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #ddd",
                  }}
                >
                  <h3>{item.name}</h3>
                  <strong>${item.price}</strong>
                  <li style={itemStyle}>
                    <img
                      style={img}
                      src={`images/${item.type}/${item.image}`}
                      alt=""
                    />
                  </li>
                  <button
                    style={shopitem}
                    type="button"
                    onClick={() => handleBuyNow(item)}
                  >
                    Buy Now
                  </button>
                </ul>
              );
            })}
          </div>
        }
        <button>Next</button>
      </div>
    </div>
  );
};
export default Carousel;
