import React from "react";
import Header from "./Header";

const Logo = () => {
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
          {/* <div name="autofillform">
          <input
            type="text"
            name="searchId"
            value=""
            className="input"
            id="searchId"
            onKeyUp={() => doCompletion()} // Make sure to handle the event appropriately
            placeholder="search here.."
            style={{ padding: '5px', fontSize: '16px' }}
          />
          <div id="auto-row">
            <table id="complete-table" className="gridtable" style={{ position: 'absolute', width: '315px' }}></table>
          </div>
        </div> */}
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Logo;
