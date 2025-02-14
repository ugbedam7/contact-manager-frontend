import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { BASE_URL } from "../../App";
import SmallContactVaultLogo from "../../components/svgs/Logo";

export const SignUp = () => {
  const [isLoginActive, setLoginActive] = useState(false);
  const navigate = useNavigate();
  const [bgLoaded, setBgLoaded] = useState(false);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    const img = new Image();
    img.src = "/auth-bg.jpg";
    img.onload = () => setBgLoaded(true);
  }, []);

  /**
   * In the approach below, the component's state remains in sync with the
   * input fields, allowing for controlled component behavior where the
   * state drives the form's UI and vice versa.
   */

  const handleChange = (event) => {
    const value = event.target.value;
    setData({ ...data, [event.target.name]: value });
  };

  const register = async (e) => {
    e.preventDefault();
    if (data.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    const userData = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password
    };

    try {
      const res = await fetch(`${BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      const result = await res.json();

      if (res.ok && result.success) {
        toast.success(result.message);
        // Delay navigation to allow the toast to show
        setTimeout(() => {
          navigate("/login");
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
              isLoginActive ? "active" : ""
            }`}
            onMouseEnter={() => setLoginActive(true)}
            onMouseLeave={() => setLoginActive(false)}
          >
            <form onSubmit={register}>
              <div className="d-flex flex-column align-items-center justify-content-center text-center pb-3">
                <div className="d-flex align-content-center justify-content-center">
                  <SmallContactVaultLogo />
                </div>
                <h1 className="text-3xl font-semibold">Create Account</h1>
              </div>

              <div className="d-flex gap-3 mb-2">
                <div className="form-outline flex-fill">
                  <label htmlFor="firstname" className="mb-1 fs-5">
                    Firstname
                  </label>
                  <input
                    autoFocus
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      document.getElementById("firstname").focus()
                    }
                    onChange={handleChange}
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="rounded-3 w-100 px-3 fs-5"
                    required
                  />
                </div>

                <div className="form-outline flex-fill">
                  <label htmlFor="lastname" className="mb-1 fs-5">
                    Lastname
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="rounded-3 w-100 px-3 fs-5"
                    required
                  />
                </div>
              </div>

              <div className="form-outline mb-2 flex-fill">
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

              <div className="form-outline mb-5 flex-fill">
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

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn text-white w-100 signup-btn"
                >
                  Sign Up
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already Have An Account?
                  <Link
                    className={`${isLoginActive ? "text-white" : "text-dark"}`}
                    to="/login"
                  >
                    {" "}
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
