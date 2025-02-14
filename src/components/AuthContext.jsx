import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize isAuthenticated based on session storage
  const storedToken = sessionStorage.getItem("authToken");
  const [isAuthenticated, setIsAuthenticated] = useState(!!storedToken);

  useEffect(() => {
    // Check authentication from session storage or API
    const token = sessionStorage.getItem("authToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsAuthenticated(true);
    }
  }, [storedToken]);

  const login = (token, user) => {
    sessionStorage.setItem("authToken", token);
    sessionStorage.setItem("user", user.firstname);
    sessionStorage.setItem("userId", user._id);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
