import React from "react";
import Logo from "./Logo";
import Sidebar from "./SideBar";
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
  padding: "1px",
  width: "50px",
  marginLeft: "10px",
  marginTop: "10px",
  marginRight: "auto",
};

const textStyle = {
  width: "100px",
  borderRight: "1px solid rgb(221, 221, 221)",
  paddingRight: "10px",
  borderBottom: "1px solid rgb(221, 221, 221)",
};
const ViewOrder = () => {
  const { loggedUser } = useUser();
  const orderList =
    loggedUser == null
      ? []
      : JSON.parse(localStorage.getItem(`order_${loggedUser.username}`)) || [];

  console.log(orderList);

  const handelRemove = (item) => {
    const newOrderList = orderList.filter((order) => order !== item);
    localStorage.setItem(
      `order_${loggedUser.username}`,
      JSON.stringify(newOrderList)
    );
    window.location.reload();
  };
  return (
    <div>
      <Logo />
      <Sidebar />
      <h2
        style={{
          fontSize: "24px",
          color: "purple",
          textAlign: "center",
          borderBottom: "3px solid black",
        }}
      >
        Your Orders
      </h2>

      <div>
        {orderList.length === 0 ? (
          <p style={{ textAlign: "center", color: "brown", fontSize: "20px" }}>
            You have not placed any orders
          </p>
        ) : null}
        {orderList.map((item, index) => {
          return (
            <div key={index}>
              <h3
                style={{
                  color: "green",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Your Order {index + 1} arriving on {item[0].deliveryDate}
                <button onClick={() => handelRemove(item)} style={buttonStyle}>
                  cancel
                </button>
              </h3>

              <table
                style={{
                  margin: "0 auto",
                  border: "1px solid rgb(221, 221, 221)",
                  borderCollapse: "collapse",
                  padding: "10px",
                }}
              >
                <thead>
                  <tr>
                    <th style={textStyle}>Item</th>
                    <th style={textStyle}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {item.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td style={textStyle}>{item.name}</td>
                        <td>${item.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewOrder;
