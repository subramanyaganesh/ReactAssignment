import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DoorBell from "./components/DoorBell";
import DoorLock from "./components/DoorLock";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { UserProvider } from "./components/UserContext";
import { CartProvider } from "./components/CartContext";
import Payment from "./components/Payment";
import ViewOrder from "./components/ViewOrder";
import ViewReview from "./components/ViewReview";
import ProductAdd from "./components/ProductAdd";
import ProductUpdate from "./components/ProductUpdate";
import ProductDelete from "./components/ProductDelete";
import Lighting from "./components/Lighting";
import Speaker from "./components/Speaker";
import Thermostat from "./components/Thermostat";
import WriteReview from "./components/WriteReview";
import Product from "./components/Products";

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/DoorBellList" element={<DoorBell />} />
            <Route path="/DoorLockList" element={<DoorLock />} />
            <Route path="/LightingList" element={<Lighting />} />
            <Route path="/SpeakerList" element={<Speaker />} />
            <Route path="/ThermostatList" element={<Thermostat />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/ViewOrder" element={<ViewOrder />} />
            <Route path="/ViewReview" element={<ViewReview />} />
            <Route path="/WriteReview" element={<WriteReview />} />
            <Route path="/ProductAdd" element={<ProductAdd />} />
            <Route path="/ProductUpdate" element={<ProductUpdate />} />
            <Route path="/ProductDelete" element={<ProductDelete />} />
          </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
