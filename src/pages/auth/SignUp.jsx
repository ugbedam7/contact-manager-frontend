import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../../App';
import SmallContactVaultLogo from '../../components/common/Logo';

export const SignUp = () => {
  const [isLoginActive, setLoginActive] = useState(false);
  const navigate = useNavigate();

  /**
   * In the approach below, the component's state remains in sync with the
   * input fields, allowing for controlled component behavior where the
   * state drives the form's UI and vice versa.
   */

  const [data, setData] = useState({
    fullname: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setData({ ...data, [event.target.name]: value });
  };

  const register = async (e) => {
    e.preventDefault();

    const userData = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    };

    try {
      const res = await fetch(`${BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      const result = await res.json();

      if (res.ok && result.success) {
        toast.success(result.message);
        // Delay navigation to allow the toast to show
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        toast.error(result.error);
      }
    } catch (err) {
      if (err.response) {
        console.error(err.response.data);
      } else if (err.request) {
        // The request was made but no response was received
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    }
  };

  return (
    <div className="container-fluid auth-container" style={{ paddingTop: 70 }}>
      <div className="container-fluid h-custom">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div
            className={`col-md-8 col-lg-6 col-xl-4 signup sign-in auth-card ${
              isLoginActive ? 'active' : ''
            }`}
            onMouseEnter={() => setLoginActive(true)}
            onMouseLeave={() => setLoginActive(false)}>
            <form onSubmit={register}>
              <div className="d-flex flex-column align-items-center justify-content-center text-center pb-3">
                <div className="d-flex align-content-center justify-content-center">
                  <SmallContactVaultLogo />
                </div>
                <h1 className="text-3xl font-semibold">Create Account</h1>
              </div>

              <div className="form-outline mb-4">
                <label htmlFor="fullname" className="mb-1 fs-5">
                  Fullname
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="rounded-3 w-100 px-3 fs-5"
                  required
                />
              </div>

              <div className="form-outline mb-4">
                <label htmlFor="email" className="form-label mb-1 fs-5">
                  Email address
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-3 w-100 px-3 fs-5"
                  required
                />
              </div>

              <div className="form-outline mb-3">
                <label htmlFor="password" className="form-label mb-1 fs-5">
                  Password
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  id="password"
                  name="password"
                  className="rounded-3 w-100 px-3 fs-5"
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="remember"
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember Me
                  </label>
                </div>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn text-white w-100 signup-btn">
                  Sign Up
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already Have An Account?
                  <Link
                    className={`${isLoginActive ? 'text-white' : 'text-dark'}`}
                    to="/login">
                    {' '}
                    Login
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
