import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  // const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const login = (e) => {
    e.preventDefault();

    const userData = {
      email: data.email,
      password: data.password
    };

    const baseURL =
      process.env.REACT_APP_API_BASE_URL ||
      'https://shipping-app-backend-28vc.onrender.com';

    axios
      .post(`${baseURL}/api/v1/login`, userData, {
        withCredentials: true
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.success && res.data.role === 'sender') {
          setTimeout(() => navigate('/dashboard/sender'), 500);
        } else if (res.data.success && res.data.role === 'traveler') {
          setTimeout(() => navigate('/dashboard/traveler'), 500);
        } else if (res.data.success && res.data.role === 'admin') {
          setTimeout(() => navigate('/dashboard/admin'), 500);
        } else {
          setError(`An error occurred during login: ${res.data.Error}`);
        }
      })
      .catch((error) => {
        console.log(error);
        setError('Login failed. Please try again.');
      });
  };

  return (
    <div
      className="container-fluid"
      style={{ paddingTop: 60, background: '#f5f5f5' }}>
      <div className="container h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4 login log-in">
            <form onSubmit={login}>
              <div className="d-flex flex-row align-content-center justify-content-center">
                <h1 className="text-3xl font-semibold ">Login</h1>
              </div>
              <p
                style={{
                  color: 'red',
                  fontSize: '20px',
                  textAlign: 'center',
                  marginTop: '20px'
                }}>
                {error && error}
              </p>
              <div className="form-outline mb-3">
                <label className="form-label mb-1 fs-5" htmlFor="email">
                  Email Address
                </label>
                <input
                  onChange={handleChange}
                  className="rounded-3 w-100 px-3 fs-5"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="form-outline mb-3">
                <label className="form-label mb-1 fs-5" htmlFor="password">
                  Password
                </label>
                <input
                  onChange={handleChange}
                  className="rounded-3 w-100 px-3 fs-5"
                  type="password"
                  name="password"
                  required
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    name="remember"
                    id="remember"
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember Me
                  </label>
                </div>
                <Link className=" text-dark forgot" to="/forget-password">
                  Forgot Password
                </Link>
              </div>
              <div className="text-center text-lg-start mt-4 pt2">
                <button
                  className="btn text-white w-100 text-white"
                  style={{ backgroundColor: '#FF6934' }}
                  type="submit">
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1">
                  Don't Have an Account yet?{' '}
                  <Link className="link-secondary" to="/signup">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
