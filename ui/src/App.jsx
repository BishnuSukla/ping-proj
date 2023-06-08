import React, { Suspense } from "react";
import "./styles/main.scss";
import store from "./redux/store";
import { Provider} from "react-redux";
import {
  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartWrapper from "./components/cart/CartWrapper";

const Shopping = React.lazy(()=>import("./components/shopping/Shopping"));
const Checkout = React.lazy(()=>import("./components/checkout/Checkout"));

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<CartWrapper/>}/>
          <Route path="/shopping" element={<Shopping/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      </Suspense>
    </Router>
    </Provider>
  );
};

export default App;
