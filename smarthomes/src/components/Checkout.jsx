import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./SideBar";
import Logo from "./Logo";
import { useUser } from "./UserContext";
import { useCart } from "./CartContext";

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
  width: "200px",
  marginLeft: "10px",
  marginTop: "10px",
  marginRight: "auto",
};
const Checkout = () => {
  let { count, setCount, clearCart } = useCart();
  const navigate = useNavigate();
  const { loggedUser } = useUser();
  const [creditCardNo, setCreditCardNo] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [pickUp, setPickUp] = useState(false);
  const [homeDelivery, setHomeDelivery] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const orderList =
    JSON.parse(localStorage.getItem(`order_${loggedUser.username}`)) || [];
  let orderTotal = 0;

  const location = useLocation();
  const [selectedItems, setSelectedItems] = useState([]);

  const getdeliveryDate = () => {
    const futureDate = new Date();
    const randomNumber = Math.floor(Math.random() * (18 - 7 + 1)) + 7;
    futureDate.setDate(new Date().getDate() + randomNumber);

    // Format the date if needed
    const formattedDate = `${futureDate.getFullYear()}-${(
      futureDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${futureDate.getDate().toString().padStart(2, "0")}`;

    return formattedDate; // Output: YYYY-MM-DD
  };

  const textStyle = {
    width: "100px",
    borderRight: "1px solid rgb(221, 221, 221)",
    paddingRight: "10px",
    borderBottom: "1px solid rgb(221, 221, 221)",
  };

  const deliveryDate = getdeliveryDate();
  const handleCheckout = (e) => {
    e.preventDefault();
    count = count + 1;
    setCount(count);
    clearCart();

    selectedItems.map((item) => (item.deliveryDate = deliveryDate));
    orderList.push(selectedItems);
    localStorage.setItem(
      `order_${loggedUser.username}`,
      JSON.stringify(orderList)
    );

    navigate("/Payment", {
      state: {
        deliveryDate,
      },
    });
  };

  useEffect(() => {
    const { cartItems } = location.state;
    setSelectedItems(cartItems || []);
  }, [location.state]);

  return (
    <div>
      <Logo />
      <Sidebar />
      <div>
        <h2
          style={{
            borderBottom: "3px solid black",
            fontSize: "24px",
            color: "purple",
            textAlign: "center",
          }}
        >
          Checkout
        </h2>

        <table
          style={{
            border: "1px solid rgb(221, 221, 221)",
            borderCollapse: "collapse",
            marginLeft: "230px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{ borderBottom: "1px solid rgb(221, 221, 221)" }}
                colSpan={2}
              >
                User:{loggedUser.username}
              </th>
            </tr>
            <tr>
              <th style={textStyle}>Product</th>
              <th style={textStyle}>Price</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item, index) => {
              orderTotal += item.price;
              return (
                <tr key={index}>
                  <td style={textStyle}>{item.name}</td>
                  <td style={textStyle}>${item.price}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan="2"
                style={{
                  textAlign: "center",
                  color: "purple",
                  fontStyle: "italic",
                }}
              >
                Total: ${orderTotal.toFixed(2)}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px 20px 15px 236px",
          }}
          onSubmit={handleCheckout}
        >
          {/* Input fields for credit card, address, etc. */}
          <label>Credit/accountNo:</label>
          <input
            required
            style={{ width: "200px" }}
            type="text"
            value={creditCardNo}
            onChange={(e) => setCreditCardNo(e.target.value)}
          />

          <label>Customer Address:</label>
          <input
            required
            style={{ width: "200px" }}
            type="text"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
          />

          <div style={{ display: "flex" }}>
            <label>Home Delivery:</label>
            <input
              type="checkbox"
              checked={homeDelivery}
              onChange={() => setHomeDelivery(!homeDelivery)}
            />
          </div>

          <div style={{ display: "flex",marginTop:"5px" }}>
            <label>In store pick up:</label>
            <input
              type="checkbox"
              checked={pickUp}
              onChange={() => setPickUp(!pickUp)}
            />
          </div>
          <label>Locations:</label>
          <select
            style={{ width: "200px" }}
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            {/* Options for store locations */}
            <option value="">---</option>
            <option value="756">756 Austin (60609)</option>
            <option value="324">324 Evanston (69908)</option>
            <option value="484">484 New York (60622)</option>
            <option value="789">789 Seattle (60623)</option>
            <option value="998">998 Cleveland (60617)</option>
            <option value="856">856 Santa Clara (60621)</option>
            <option value="457">457 Detroit (60618)</option>
            <option value="123">123 San Jose (60620)</option>
            <option value="876">876 Erie (60619)</option>
            <option value="493">493 Chicago (60616)</option>
          </select>
        </form>
        <button colSpan="2" style={buttonStyle} onClick={handleCheckout}>
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
