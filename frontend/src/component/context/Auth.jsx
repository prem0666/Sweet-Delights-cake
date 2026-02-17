import React, { createContext, useContext, useEffect, useState } from "react";
import Api from "../api/Api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      // try to load user if absent (optional)
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const login = (userObj, jwt) => {
    setUser(userObj || null);
    setToken(jwt || null);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
