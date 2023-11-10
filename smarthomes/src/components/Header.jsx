import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";

const containerStyle = {
  display: "flex",
};

const lists = {
  paddingLeft: "20px",
  textDecoration: "none",
};

const glyphicon = {
  WebkitTextSizeAdjust: "100%",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  listStyle: "none",
  letterSpacing: "-1px",
  textAlign: "center",
  fontSize: "18px",
  color: "#FFFFFF",
  boxSizing: "unset",
  position: "relative",
  top: "1px",
  display: "inline-block",
  fontFamily: "Glyphicons Halflings",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1",
  WebkitFontSmoothing: "antialiased",
};

const Header = () => {
  const { loggedUser } = useUser();

  const handleReload = () => {
    console.log("reloading");
     window.location.reload();
  };

  const RightHeaderList = loggedUser
    ? [
        { name: "View Order", link: "/ViewOrder" },
        { name: `Hi,${loggedUser?.username}`, link: null },
        { name: "Logout", link: "/Home" },
        { name: "Cart(0)", link: "/Cart" },
      ]
    : [
        { name: "View Order", link: "/ViewOrder" },
        { name: "Login", link: "/Login" },
        { name: "Cart(0)", link: "/Cart" },
      ];

  const LeftHeaderList = [
    { name: "Home", link: "/Home" },
    { name: "DoorBells", link: "/DoorBellList" },
    { name: "DoorLocks", link: "/DoorLockList" },
    { name: "Lightings", link: "/LightingList" },
    { name: "Speakers", link: "/SpeakerList" },
    { name: "Thermostat", link: "/ThermostatList" },
    { name: "Trending", link: "/Trending" },
  ];

  return (
    <div>
      <div style={containerStyle}>
        {LeftHeaderList.map((mm, index) => {
          return (
            <Link key={index} style={lists} to={mm.link}>
              <span style={glyphicon}>{mm.name}</span>
            </Link>
          );
        })}
      </div>

      <div style={{ float: "right", paddingRight: "20px" }}>
        <div style={containerStyle}>
          {RightHeaderList.map((mm, index) => {
            
            return mm.name !== "Logout" ? (
              <Link key={index} style={lists} to={mm.link}>
                <span style={glyphicon}>{mm.name}</span>
              </Link>
            ) : (
              <Link
                onClick={handleReload}
                key={index}
                style={lists}
                to={mm.link}
              >
                <span style={glyphicon}>{mm.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
