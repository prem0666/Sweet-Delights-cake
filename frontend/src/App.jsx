import React from "react";
import Contact from "./component/Contact";
import ProductPages from "./component/ProductPages";
// import Login from "./component/login";
import CartSection from "./component/CartSection";
import Home from "./component/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import Admin from "./component/Admin";
import Layout from "./component/Layout";
import Login from "./component/Login";
import { AuthProvider, useAuth } from "./component/context/Auth";
import { Toaster } from "sonner";

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductPages />} />
          <Route path="/cart" element={<CartSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
