import React from "react";
import Logo from "./Logo";
import Sidebar from "./SideBar";
import { useState } from "react";
import axios from "axios";
//import { useData } from "./Data"; // instead of importing each of the products like this import { doorBells, doorLocks, lightings, speakers, thermostats } from "./Data"; we can import all of them in one go like this import { useData } from "./Data";

const ProductUpdate = () => {
  const [productId, setProductId] = useState("");
  const [type, setType] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productManufacturer, setProductManufacturer] = useState("");
  const [productCondition, setProductCondition] = useState("");
  const [productDiscount, setProductDiscount] = useState("");
  const [product, setProduct] = useState("");
  const [productDescription, setProductDescription] = useState("");

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

  //const { updateProduct } = useData(); //here we can access all the products from the useData hook

  const handleForm = async(e) => {
    e.preventDefault();
    const productData = {

      Id: productId,
      productName: productName,
      productPrice: productPrice,
      productImage: productImage,
      productManufacturer: productManufacturer,
      productCondition: productCondition,
      productDiscount: productDiscount,
      description: productDescription,
      ProductType: type,

      // Id: 'productId',
      // productName: 'productName',
      // productPrice: 22,
      // productImage: 'productImage',
      // productManufacturer: 'productManufacturer',
      // productCondition: 'productCondition',
      // productDiscount: 22,
      // description: 'productDescription',
      // ProductType: 'type',
    };
    try {
      console.log("out of the ProductUpdate try block",productData);
      await axios.put("http://localhost:9000/api/updateProduct", productData);
 
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
        <h2 style={{borderBottom: "3px solid black", fontSize: "24px", color: "purple", textAlign: "center" }}>
          Update Product
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
                  <h3>Product Type</h3>
                </td>
                <td>
                  <select
                    onChange={(e) => setType(e.target.value)}
                    name="producttype"
                  >
                    <option value="default" selected>
                      ---
                    </option>
                    <option value="doorBells">Door Bells</option>
                    <option value="doorLocks">Door Locks</option>
                    <option value="lightings">Lightings</option>
                    <option value="speakers">Speakers</option>
                    <option value="Thermostas">Thermostats</option>
                    <option value="accessories">Accessory</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Product</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="product"
                    placeholder="Please mention product if adding accessories"
                    value={product}
                    className="input"
                    style={inputStyle}
                    onChange={(e) => setProduct(e.target.value)}
                  />
                </td>
              </tr>
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
                    //required
                    style={inputStyle}
                    onChange={(e) => setProductId(e.target.value)}
                  />
                </td>
              </tr>
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
                    //required
                    style={inputStyle}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Product Price</h3>
                </td>
                <td>
                  <input
                    type="number"
                    step="any"
                    placeholder="please enter numeric data"
                    name="productPrice"
                    value={productPrice}
                    className="input"
                    //required
                    style={inputStyle}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Product Image</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="productImage"
                    value={productImage}
                    className="input"
                    style={inputStyle}
                    onChange={(e) => setProductImage(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Product Description</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="productDescription"
                    value={productDescription}
                    className="input"
                    //required
                    style={inputStyle}
                    onChange={(e) => setProductDescription(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Product Manufacturer</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="productManufacturer"
                    value={productManufacturer}
                    className="input"
                    //required
                    style={inputStyle}
                    onChange={(e) => setProductManufacturer(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Product Condition</h3>
                </td>
                <td>
                  <input
                    type="text"
                    name="productCondition"
                    value={productCondition}
                    className="input"
                    //required
                    style={inputStyle}
                    onChange={(e) => setProductCondition(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Product Discount</h3>
                </td>
                <td>
                  <input
                    type="number"
                    step="any"
                    placeholder="please enter numeric data"
                    name="productDiscount"
                    value={productDiscount}
                    className="input"
                    //required
                    style={inputStyle}
                    onChange={(e) => setProductDiscount(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="submit"
                    className="btnbuy"
                    name="button"
                    value="Update Product"
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
            Product Updated Successfully
          </p>
        )}
        {!submitSuccess && (
          <p style={{ color: "red", textAlign: "center" }}>
           updation Failed
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductUpdate;
