import React from "react";
import Logo from "./Logo";
import Sidebar from "./SideBar";
import { useState } from "react";
import axios from "axios";
// instead of importing each of the products like this import { doorBells, doorLocks, lightings, speakers, thermostats } from "./Data"; we can import all of them in one go like this import { useData } from "./Data";

const ProductDelete = () => {
  const [productId, setProductId] = useState("");
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

  //const { deleteProduct } = useData(); //here we can access all the products from the useData hook

  const handleForm = async (e) => {
    e.preventDefault();
    console.log("have come here and productId is ", productId);
    try {
      await axios.delete(
        `http://localhost:9000/api/deleteProduct?id=${productId}`
      );
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error:", error);
      setSubmitSuccess(false);
    }
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
          Delete Product
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
                  <h3>Product Id</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="productId"
                    value={productId}
                    className="input"
                    required
                    style={inputStyle}
                    onChange={(e) => setProductId(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="submit"
                    className="btnbuy"
                    name="button"
                    value="Delete Product"
                    style={buttonStyle}
                  />
                </td>
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
            Product Deleted Successfully
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDelete;
