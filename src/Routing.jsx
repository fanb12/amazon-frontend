import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./page/Landing/Landing";
import Auth from "./page/Auth/Auth";
import Order from "./page/Orders/Order";
import Cart from "./page/Cart/Cart";
import Results from "./page/Results/Results";
import ProductDetail from "./page/ProductDetails/ProductDetail";
import Payment from "./page/Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./component/protectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51Oj0NLD32AtwlKCZCp2qfDK8uKMD2rLm4gMFkl56dOtW4TnWlmq7Ant0Wu0WJtulKy3K3XmyWcTD2lW9IiwYfBug00iYF893jq"
);
function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Auth" element={<Auth />} />

          <Route
            path="/Orders"
            element={
              <ProtectedRoute
                msg={"you must log to access your orders"}
                redirect={"/orders"}
              >
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route
            path="/payments"
            element={
              <ProtectedRoute
                msg={"you must log to pay"}
                redirect={"/payments"}
              >
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
