import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "./UserContext";

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  border: '2px solid #ccc',
  borderRadius: '8px',
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
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("customer");
  const [error] = useState("");
  const [message, setMessage] = useState("");
  const othermessage = location.state?.from;

  const handleLogin = async (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("key")) || [];
    const existingUser = existingUsers.find(
      (user) => user === username + "@" + password + "@" + usertype
    );
    if (!existingUser) {
      setMessage(
        "Incorrect UserName or Password. Please choose a different username."
      );
    } else {
      login(username, password, usertype);
      navigate("/home");
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={{color:'purple'}}>Login</h2>
      {othermessage && <p style={{ color: "red" }}>{othermessage}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        style={formStyle}
        onSubmit={handleLogin}
      >
        <label>
          Username:
          <input
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          User Type:
          <select
            type="usertype"
            value={usertype}
            onChange={(e) => setUsertype(e.target.value)}
          >
            <option value="customer">Customer</option>
            <option value="retailer">Store Manager</option>
            <option value="manager">Salesman</option>
          </select>
        </label>
        <br />
        <button style={shopitem} type="submit">
          Login
        </button>
        {message && <p style={{ color: "red" }}>{message}</p>}
      </form>
      <p>
        New User? <a href="/registration">Register here!</a>
      </p>
    </div>
  );
};

export default Login;
