import React, { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { useUser } from "./UserContext";

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
  console.log(othermessage);

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
    <div>
      <h2>Login</h2>
      {othermessage && <p style={{ color: 'red' }}>{othermessage}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
        {message && <p>{message}</p>}
      </form>
      <p>
        New User? <a href="/registration">Register here!</a>
      </p>
    </div>
  );
};

export default Login;
