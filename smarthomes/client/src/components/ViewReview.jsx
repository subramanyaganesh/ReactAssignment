import axios from "axios";

import Logo from "./Logo";
import { useLocation } from "react-router-dom";
import { React, useState, useEffect } from "react";

const textStyle = {
  width: "100px",
  borderRight: "1px solid rgb(221, 221, 221)",
  paddingRight: "10px",
  borderBottom: "1px solid rgb(221, 221, 221)",
};

const ViewReview = (e) => {
  const [views, setViews] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios;
        axios
          .post("http://localhost:9000/api/ViewReview", location.state.doorBell)
          .then((res) => setViews(res.data))
          .catch((err) => console.log(err))
          .finally(() => console.log("done"));
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Logo />
      {/* <Sidebar /> */}
      <div>
        {console.log(views)}
        <h2
          style={{
            borderBottom: "3px solid black",
            fontSize: "24px",
            color: "purple",
            textAlign: "center",
          }}
        >
          Reviews
        </h2>
        {views.length > 0 ? (
          <div style={{ marginLeft: "10px" }}>
            {console.log(location.state.doorBell)}
            <p style={{ textAlign: "center", color: "brown", fontSize: "20px" }}>
              All Reviews for {location.state.doorBell.productName} ({location.state.doorBell.ProductType})
            </p>
            <table
              style={{
                border: "1px solid rgb(221, 221, 221)",
                borderCollapse: "collapse",
                padding: "10px",
              }}
            >
              <thead>
                <tr>
                  <th style={textStyle}>Product Price</th>
                  <th style={textStyle}>Product On Sale</th>
                  <th style={textStyle}>Manufacturer Name</th>
                  <th style={textStyle}>Manufacturer Rebate</th>
                  <th style={textStyle}>Rating</th>
                  <th style={textStyle}>Review date</th>
                  <th style={textStyle}>Review Text</th>
                  <th style={textStyle}>UserName</th>
                  <th style={textStyle}>UserAge</th>
                  <th style={textStyle}>UserGender</th>
                  <th style={textStyle}>StoreId</th>
                  <th style={textStyle}>StoreCity</th>
                  <th style={textStyle}>StoreState</th>
                  <th style={textStyle}>StorePin</th>
                </tr>
              </thead>


              <tbody>
                {views.map((item, index) => (
                  <tr key={index}>
                    <td style={textStyle}>${item.productprice}</td>
                    <td style={textStyle}>{item.productOnSale}</td>
                    <td style={textStyle}>{item.productmaker}</td>
                    <td style={textStyle}>{item.manufacturerRebate}</td>
                    <td style={textStyle}>{item.reviewRating}</td>
                    <td style={textStyle}>{item.reviewDate}</td>
                    <td style={textStyle}>{item.reviewText}</td>
                    <td style={textStyle}>{item.username}</td>
                    <td style={textStyle}>{item.userAge}</td>
                    <td style={textStyle}>{item.userGender}</td>
                    <td style={textStyle}>{item.storeID}</td>
                    <td style={textStyle}>{item.retailercity}</td>
                    <td style={textStyle}>{item.retailerstate}</td>
                    <td style={textStyle}>{item.retailerpin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p style={{ textAlign: "center", color: "brown", fontSize: "20px" }}>
            There are No Reviews for this Product.
          </p>
        )}
      </div>

      {/* {cartItems.length > 0 && <Carousel items={carouselItems} />} */}
    </div>
  );
};

export default ViewReview;
