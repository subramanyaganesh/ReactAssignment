import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

const itemStyle = {
  WebkitTextSizeAdjust: "100%",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  lineHeight: "1.42857143",
  borderSpacing: 0,
  fontFamily: "verdana, arial, sans-serif",
  fontSize: "11px",
  borderCollapse: "collapse",
  boxSizing: "unset",
  backgroundColor: "transparent",
  textDecoration: "none",
  color: "#6A5ACD",
};
const popUpCell = {
  WebkitTextSizeAdjust: "100%",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  lineHeight: "1.42857143",
  borderSpacing: 0,
  fontFamily: "verdana, arial, sans-serif",
  fontSize: "11px",
  color: "#333333",
  borderCollapse: "collapse",
  boxSizing: "unset",
  borderWidth: "1px",
  padding: "8px",
  borderStyle: "solid",
  borderColor: "#666666",
  backgroundColor: "#ffffff",
};

const Logo = () => {
  const [value, setValue] = useState("");
  const [product, setProduct] = useState([]);
  const [showForm, setShowForm] = useState(false);


  const handleClickOutsideForm = (e) => {
    if (e.target.closest('#auto-row') === null) {
      // Clicked outside the form, hide it
      setShowForm(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener('click', handleClickOutsideForm);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutsideForm);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/getProducts/",
          {
            params: { search: value },
          }
        );
        console.log("I am from axios", response.data);
        setProduct(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (value) {
      fetchData();
    }
  }, [value]);

  const logoStyle = {
    margin: "30px",
  };

  const smallTextSizeStyle = {
    color: "blue",
    fontSize: "12px",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={logoStyle}>
        <table style={{ float: "left" }}>
          <tbody>
            <tr>
              <td style={{ verticalAlign: "top" }}>
                <img
                  src="images/smartHomeLogo.png"
                  alt=""
                  style={{ height: "80px" }}
                />
              </td>
              <td>
                <h1>Smart Homes</h1>
              </td>
            </tr>
            <td></td>
            <em style={smallTextSizeStyle}>
              Elevate your living, one smart choice at a time.
            </em>
          </tbody>
        </table>
        <div
          style={{
            float: "right",
            width: "30%",
            marginTop: "35px",
            border: "1px solid white",
            padding: "5px",
            paddingRight: "15px",
          }}
        >
          <em style={{ color: "white" }}>Search Product:</em>
          <div name="autofillform">
          <input
          type="text"
          name="searchId"
          value={value}
          className="input"
          id="searchId"
          placeholder="search here.."
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setShowForm(true)}
          style={{ padding: '5px', fontSize: '16px' }}
        />
            <div id="auto-row">
              <table
                id="complete-table"
                className="gridtable"
                style={{ position: "absolute", width: "315px" }}
              >
                <tbody>
                  {product.map((p) => (
                    <tr key={p.Id}>
                      <td style={popUpCell}>
                        <Link
                          to={`/product?id=${p.Id}`}
                          style={{
                            textDecoration: "none",
                            itemStyle: "none",
                            color: "inherit",
                          }}
                        >
                          {p.productName}
                        </Link>
                      </td>
                      {/* Add more cells for other product attributes */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Logo;
