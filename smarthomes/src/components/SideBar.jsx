import React from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const sidebarhref = {
    WebkitTextSizeAdjust: "100%",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
    fontSize: "12px",
    listStyle: "none",
    lineHeight: "normal",
    boxSizing: "unset",
    textAlign: "left",
    textDecoration: "none",
    color: "#000000",
    padding: "0px 0px 0px 30px",
    fontWeight: "normal",
    border: "none",
    background: "url(images/2.png) no-repeat 15px 4px",
  };

  const sidebarFinalLi = {
    WebkitTextSizeAdjust: "100%",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    color: "#333",
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
    fontSize: "12px",
    listStyle: "none",
    lineHeight: "normal",
    boxSizing: "unset",
    borderRadius: "5px",
    margin: "0px 0px",
    padding: "10px 0px",
    border: "none",
    background: "url(images/img06.jpg) repeat-x left top",
  };

  const sidebarLi = {
    WebkitTextSizeAdjust: "100%",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    color: "#333",
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
    fontSize: "12px",
    listStyle: "none",
    lineHeight: "normal",
    boxSizing: "unset",
    marginBottom: "20px",
    padding: "10px ",
    borderRadius: "5px",
    background: "#D7DF01",
  };

  const sidebarUl = {
    WebkitTextSizeAdjust: "100%",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    color: "#333",
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
    fontSize: "12px",
    boxSizing: "unset",
    textAlign: "justify",
    margin: 0,
    padding: 0,
    listStyle: "none",
    lineHeight: "normal",
    border: "none",
  };

  const sidebar = {
    WebkitTextSizeAdjust: "100%",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    lineHeight: 1.42857143,
    color: "#333",
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
    boxSizing: "unset",
    float: "left",
    width: "225px",
    fontSize: "12px",
  };

  const sidebarH2 = {
    WebkitTextSizeAdjust: "100%",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    listStyle: "none",
    boxSizing: "unset",
    margin: "0 !important",
    fontWeight: "normal !important",
    color: "#6666FF !important",
    fontFamily: "inherit",
    lineHeight: "1.1",
    height: "32px",
    padding: "8px 0 10px 20px",
    background: "url(images/1.png) repeat-x left bottom",
    fontSize: "24px",
  };

  const sidebarliul = {
    WebkitTextSizeAdjust: "100%",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    color: "#333",
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
    fontSize: "12px",
    boxSizing: "unset",
    textAlign: "justify",
    padding: "0",
    listStyle: "none",
    lineHeight: "normal",
    margin: "0px 0px",
    border: "none",
  };


  return (
    <div style={sidebar}>
      <div style={sidebarUl}>
        <li style={sidebarLi}>
          <h2 style={sidebarH2}>Door Bells</h2>
          <ul style={sidebarliul}>
            <li style={sidebarFinalLi}>
              <Link
                style={sidebarhref}
                to="/DoorBellList?maker=amazon"
              >
                Amazon
              </Link>
            </li>
            <li style={sidebarFinalLi}>
              <Link
                style={sidebarhref}
                to="/DoorBellList?maker=arlo"
              >
                Arlo
              </Link>
            </li>
            <li style={sidebarFinalLi}>
              <Link
                style={sidebarhref}
                to="/DoorBellList?maker=nestHello"
              >
                Nest Hello
              </Link>
            </li>
            {/* Other list items */}
          </ul>
        </li>


        <li style={sidebarLi}>
          <h2 style={sidebarH2}>Door Locks</h2>
          <ul style={sidebarliul}>
            <li style={sidebarFinalLi}>
              <Link
                style={sidebarhref}
                to="/DoorLockList?maker=amazon"
              >
                Amazon
              </Link>
            </li>
            <li style={sidebarFinalLi}>
              <Link
                style={sidebarhref}
                to="/DoorLockList?maker=lockly"
              >
                Lockly
              </Link>
            </li>
            <li style={sidebarFinalLi}>
              <Link
                style={sidebarhref}
                to="/DoorLockList?maker=hornbill"
              >
                HornBill
              </Link>
            </li>
            {/* Other list items */}
          </ul>
        </li>


        <li style={sidebarLi}>
          <h2 style={sidebarH2}>Lightings</h2>
          <ul style={sidebarliul}>
            <li style={sidebarFinalLi}>
              <Link
                style={sidebarhref}
                to="/LightingList?maker=honeyWell"
              >
                HoneyWell
              </Link>
            </li>
            <li style={sidebarFinalLi}>
              <Link
                style={sidebarhref}
                to="/LightingList?maker=toshiba"
              >
                Toshiba
              </Link>
            </li>
            <li style={sidebarFinalLi}>
              <Link
                style={sidebarhref}
                to="/LightingList?maker=ge"
              >
                GE
              </Link>
            </li>
            {/* Other list items */}
          </ul>
        </li>


        <li style={sidebarLi}>
          <h2 style={sidebarH2}>Speaker</h2>
          <ul style={sidebarliul}>
            <li style={sidebarFinalLi}>
              <Link
                style={sidebarhref}
                to="/SpeakerList?maker=apple"
              >
                Apple
              </Link>
            </li>
            <li style={sidebarFinalLi}>
              <Link
                style={sidebarhref}
                to="/SpeakerList?maker=amazon"
              >
                Amazon
              </Link>
            </li>
            <li style={sidebarFinalLi}>
              <Link
                style={sidebarhref}
                to="/SpeakerList?maker=google"
              >
                Google
              </Link>
            </li>
            {/* Other list items */}
          </ul>
        </li>

        <li style={sidebarLi}>
          <h2 style={sidebarH2}>Thermostats</h2>
          <ul style={sidebarliul}>
            <li style={sidebarFinalLi}>
              <Link
                style={sidebarhref}
                to="/ThermostatList?maker=googlenest"
              >
                GoogleNest
              </Link>
            </li>
            <li style={sidebarFinalLi}>
              <Link
                style={sidebarhref}
                to="/ThermostatList?maker=honeywell"
              >
                Honeywell
              </Link>
            </li>
            <li style={sidebarFinalLi}>
              <Link
                style={sidebarhref}
                to="/ThermostatList?maker=siemens"
              >
                Siemens
              </Link>
            </li>
          </ul>
        </li>


        {/* Other sections */}
      </div>
    </div>
  );
};

export default Sidebar;
