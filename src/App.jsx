import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import AuthLayout from "./pages/auth/AuthLayout";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} index />
          <Route element={<ProductDetails />} path="productDetails" />
        </Route>
        <Route element={<AuthLayout />} path="/">
          <Route element={<SignUp />} path="signup" />
          <Route element={<SignIn />} path="signin" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
