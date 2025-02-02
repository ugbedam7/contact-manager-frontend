import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from '../../components/AuthContext';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const baseURL = 'http://localhost:5000';

    // Axios automatically converts JavaScript objects into JSON when
    // sending POST requests. You do not need to manually stringify userData.
    // It sets the Content-Type header to application/json by default
    try {
      const res = await axios.post(`${baseURL}/api/auth/login`, data);

      const { success, accessToken, message } = res.data;
      console.log(res.data);

      if (success) {
        login(accessToken);
        toast.success(message);
        setTimeout(() => navigate('/dashboard'), 2000);
      }
    } catch (err) {
      // Check if the error response exists and extract the error message
      if (err.response && err.response.data) {
        toast.error(err.response.data.error || 'An error occurred');
      } else {
        toast.error(err.message);
      }
    }
  };

  return (
    <div
      className="container-fluid"
      style={{ paddingTop: 60, background: '#f5f5f5' }}>
      <div className="container h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4 login log-in">
            <form onSubmit={handleLogin}>
              <div className="d-flex flex-row align-content-center justify-content-center">
                <h1 className="text-3xl font-semibold ">Login</h1>
              </div>

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
      <ToastContainer />
    </div>
  );
};

export default Login;
