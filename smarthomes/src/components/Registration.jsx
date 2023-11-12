import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '300hv',
  
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  border: '2px solid #ccc',
  borderRadius: '8px',
  gap: '5px'
};


const shopitem = {
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
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "20px",
  
};

const Registration = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [usertype, setUsertype] = useState("customer");
  const [error] = useState("");
  const [message, setMessage] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("key")) || [];
    const existingUser = existingUsers.find((user) => user === username+'@'+password+'@'+usertype);

    if (existingUser) {
      setMessage(
        "Username already exists. Please choose a different username."
      );
    } else {
      // Append the new user data to the array
      existingUsers.push(username+'@'+password+'@'+usertype);
      localStorage.setItem("key", JSON.stringify(existingUsers));
      navigate("/login", {state:{from:'User created successfully'}});
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={{color:'purple'}}>Register</h2>
      <div >
        {error && <h4 style={{ color: "red" }}>{error}</h4>}
        <form style={formStyle} onSubmit={handleRegistration}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Re-Password:</label>
          <input
            type="password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            required
          />

          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <label>Street:</label>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />

          <label>State:</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />

          <label>Pincode:</label>
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
          />

          <label>User Type:</label>
          <select
            value={usertype}
            onChange={(e) => setUsertype(e.target.value)}
          >
            <option value="customer">Customer</option>
            <option value="retailer">Store Manager</option>
            <option value="manager">Salesman</option>
          </select>

          <div>
            <button style={shopitem} type="submit">Create User</button>
            {message && <p>{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
