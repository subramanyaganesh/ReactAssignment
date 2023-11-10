import React from "react";
import Logo from "./Logo";
import Sidebar from "./SideBar";

const imageStyle = {
  width: '600px',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const Home = () => {
  return (
    <div>
      <Logo />
      <Sidebar />
      <div>
        <img
          src="images/smartHome.jpeg"
          style={imageStyle}
          alt="Smart Home"
        />
        <br />
        <h2>Connecting the your house with you</h2>
        <br />
        <h1>Best Prices Guarenteed</h1>
      </div>
    </div>
  );
};

export default Home;
