import React from "react";
import Logo from "./Logo";
import Sidebar from "./SideBar";
import { useUser } from "./UserContext";

const textStyle = {
  width: "100px",
  borderRight: "1px solid rgb(221, 221, 221)",
  paddingRight: "10px",
  borderBottom: "1px solid rgb(221, 221, 221)" 
};
const ViewOrder = () => {
  const { loggedUser } = useUser();
  const orderList =
    loggedUser == null
      ? []
      : JSON.parse(localStorage.getItem(`order_${loggedUser.username}`)) || [];

  return (
    <div>
      <Logo />
      <Sidebar />
      <h2 style={{ fontSize: "24px", color: "purple", 
      textAlign: "center",
      borderBottom: "3px solid black"
       }}>
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
