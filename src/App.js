import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component"
import Authentication from "./routes/authentication/authentication.component";
import Shop from "../src/routes/shop/shop.component";
import CheckOutPage from "./routes/checkout/checkout.component";


import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<CheckOutPage />} />
       
      </Route>
    </Routes>
  )
};

export default App;
