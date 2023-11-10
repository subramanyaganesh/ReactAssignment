import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DoorBell from "./components/DoorBell";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { UserProvider } from "./components/UserContext";
import { CartProvider } from "./components/CartContext";

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="/DoorBellList" element={<DoorBell />} />
            {/* <Route path="/DoorLockList" element={<DoorBell />} />
          <Route path="/LightingList" element={<DoorBell />} />
          <Route path="/SpeakerList" element={<DoorBell />} />
          <Route path="/ThermostatList" element={<DoorBell />} /> */}
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Registration" element={<Registration />} />
          </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
