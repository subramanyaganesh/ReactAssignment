import React from "react";
import Logo from "./Logo";
import Sidebar from "./SideBar";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useUser } from "./UserContext";
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
  padding: "4px",
  width: "200px",
  marginLeft: "20px",
  marginRight: "auto",
  cursor: "pointer",
};
const WriteReview = () => {
  const { loggedUser } = useUser();
  const location = useLocation();
  const prod = location.state.product;
  const [productName] = useState(prod.productName);
  const [productType] = useState(prod.ProductType);
  const [productPrice] = useState(prod.productPrice);
  const [productMaker] = useState(prod.productManufacturer);
  const [manufacturerRebate] = useState(prod.productDiscount);
  const [storeID, setStoreID] = useState("");
  const [retailerPin, setRetailerPin] = useState("");
  const [retailerCity, setRetailerCity] = useState("");
  const [retailerState, setRetailerState] = useState("");
  const [productOnSale, setProductOnSale] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userOccupation, setUserOccupation] = useState("");
  const [reviewRating, setReviewRating] = useState("");
  const [reviewDate, setReviewDate] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [username] = useState(loggedUser.username);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    margin: "5px 0",
    boxSizing: "border-box",
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const productData = {
      productName,
      productType,
      productPrice,
      productMaker,
      manufacturerRebate,
      storeID,
      retailerPin,
      retailerCity,
      retailerState,
      productOnSale,
      userAge,
      userGender,
      userOccupation,
      reviewRating,
      reviewDate,
      reviewText,
      username,
    };

    try {
      await axios.post("http://localhost:9000/api/writeReview", productData);
    } catch (error) {
      console.error("Error:", error);
      setSubmitSuccess(false);
    }
    setSubmitSuccess(true);
  };

  return (
    <div>
      <Logo />
      <Sidebar />
      <div className="entry">
        <h2
          style={{
            borderBottom: "3px solid black",
            fontSize: "24px",
            color: "purple",
            textAlign: "center",
          }}
        >
          Add Product
        </h2>
        <form onSubmit={handleForm} style={formStyle}>
          <table
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          >
            <tbody>
              <tr>
                <td>
                  <h3>Product Name</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="productName"
                    value={productName}
                    className="input"
                    style={inputStyle}
                    readOnly
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Product Type</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="productType"
                    value={productType}
                    className="input"
                    style={inputStyle}
                    readOnly
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Product Price</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="productPrice"
                    value={productPrice}
                    className="input"
                    style={inputStyle}
                    readOnly
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Product Maker</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="productMaker"
                    value={productMaker}
                    className="input"
                    style={inputStyle}
                    readOnly
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Manufacturer Rebate</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="manufacturerRebate"
                    value={manufacturerRebate}
                    className="input"
                    style={inputStyle}
                    readOnly
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Store ID</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="storeID"
                    value={storeID}
                    className="input"
                    style={inputStyle}
                    onChange={(e) => setStoreID(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Retailer Pin</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="retailerPin"
                    value={retailerPin}
                    className="input"
                    style={inputStyle}
                    onChange={(e) => setRetailerPin(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Retailer City</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="retailerCity"
                    value={retailerCity}
                    className="input"
                    style={inputStyle}
                    onChange={(e) => setRetailerCity(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Retailer State</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="retailerState"
                    value={retailerState}
                    className="input"
                    style={inputStyle}
                    onChange={(e) => setRetailerState(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Product On Sale</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="productOnSale"
                    value={productOnSale}
                    className="input"
                    style={inputStyle}
                    onChange={(e) => setProductOnSale(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h3>User Age</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="userAge"
                    value={userAge}
                    className="input"
                    style={inputStyle}
                    onChange={(e) => setUserAge(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h3>User Gender</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="userGender"
                    value={userGender}
                    className="input"
                    style={inputStyle}
                    onChange={(e) => setUserGender(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h3>User Occupation</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="userOccupation"
                    value={userOccupation}
                    className="input"
                    style={inputStyle}
                    onChange={(e) => setUserOccupation(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Review Rating</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="reviewRating"
                    value={reviewRating}
                    className="input"
                    style={inputStyle}
                    onChange={(e) => setReviewRating(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Review Date</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="reviewDate"
                    value={reviewDate}
                    className="input"
                    style={inputStyle}
                    onChange={(e) => setReviewDate(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Review Text</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="reviewText"
                    value={reviewText}
                    className="input"
                    style={inputStyle}
                    onChange={(e) => setReviewText(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Username</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    className="input"
                    style={inputStyle}
                    readOnly
                  />
                </td>
              </tr>

              <tr>
                <button colSpan="2" style={buttonStyle}>
                  Submit Review
                </button>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </form>
        {submitSuccess && (
          <p style={{ color: "green", textAlign: "center" }}>
            Review Submitted
          </p>
        )}
        {!submitSuccess && (
          <p style={{ color: "red", textAlign: "center" }}>Insertion Review Failed</p>
        )}
      </div>
    </div>
  );
};

export default WriteReview;
