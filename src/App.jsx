import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/Navbar';
import Home from './pages/home/Index';
import { SignUp } from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import Dashboard from './components/common/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthContext';
import { ToastContainer } from 'react-toastify';

// export const BASE_URL = 'http://localhost:5000';
export const BASE_URL = 'https://contact-app-be-t5jz.onrender.com';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </AuthProvider>
  );
}

function MainLayout() {
  const location = useLocation();

  // Hide Navbar when on the dashboard route
  const hideNavbarRoutes = ['/dashboard'];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {showNavbar && <Navbar />}
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
