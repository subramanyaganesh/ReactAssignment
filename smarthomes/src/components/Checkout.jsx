import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./SideBar";
import Logo from "./Logo";

const Checkout = () => {
  const navigate = useNavigate();
  const [creditCardNo, setCreditCardNo] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [pickUp, setPickUp] = useState(false);
  const [homeDelivery, setHomeDelivery] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  let orderTotal = 0;

  const location = useLocation();
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckout = (e) => {
    e.preventDefault();

    // Perform any validation or additional logic here

    // Redirect to the payment page with checkout information
    navigate("/Payment", {
      state: {
        creditCardNo,
        userAddress,
        pickUp,
        homeDelivery,
        selectedLocation,
        orderTotal,
      },
    });
  };

  useEffect(() => {
    // Log the location state to check if data is received
    console.log("Location State:", location.state);
    const { cartItems } = location.state;
    console.log("Cart Items:", cartItems);
    setSelectedItems(cartItems || []);
  }, [location.state]);

  return (
    <div>
      <Logo />
      <Sidebar />
      <div>
        <h2>Checkout</h2>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item, index) => {
              orderTotal += item.price;
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>${orderTotal.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>

        <form style={{}} onSubmit={handleCheckout}>
          {/* Input fields for credit card, address, etc. */}
          <label>Credit/accountNo:</label>
          <input
            type="text"
            value={creditCardNo}
            onChange={(e) => setCreditCardNo(e.target.value)}
          />

          <label>Customer Address:</label>
          <input
            type="text"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
          />

          <label>In store pick up:</label>
          <input
            type="checkbox"
            checked={pickUp}
            onChange={() => setPickUp(!pickUp)}
          />
          {/* Additional fields related to in-store pick up, if needed */}

          <label>Home Delivery:</label>
          <input
            type="checkbox"
            checked={homeDelivery}
            onChange={() => setHomeDelivery(!homeDelivery)}
          />
          {/* Additional fields related to home delivery, if needed */}

          {/* Dropdown for store locations */}
          <label>Locations:</label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            {/* Options for store locations */}
            <option value="">---</option>
            {/* Additional options based on your store locations */}
          </select>
        </form>
        <button onClick={handleCheckout}>Submit Order</button>
      </div>
    </div>
  );
};

export default Checkout;
