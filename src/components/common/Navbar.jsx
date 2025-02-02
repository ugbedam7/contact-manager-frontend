import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark position-fixed w-100"
      style={{ backgroundColor: '#1A202C' }}>
      <div className="container">
        <Link className="navbar-brand text-white fs-4 h2" to="/">
          Contact
          <span style={{ color: '#FF6934' }} className="fs-2 fw-semibold">
            Vault
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-75">
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Nav.Link
                as={ScrollLink}
                to="about"
                smooth={true}
                duration={1000}
                offset={-70}
                style={{ cursor: 'pointer' }}
                className="nav-link active text-white ">
                About
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link
                as={ScrollLink}
                to="contact"
                smooth={true}
                duration={1000}
                offset={-70}
                style={{ cursor: 'pointer' }}
                className="nav-link active text-white">
                Contact Us
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link
                as={ScrollLink}
                to="features"
                smooth={true}
                duration={1000}
                offset={-70}
                style={{ cursor: 'pointer' }}
                className="nav-link text-white">
                Features
              </Nav.Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link
              to="/signup"
              className="btn text-white"
              style={{ backgroundColor: '#FF6934' }}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
