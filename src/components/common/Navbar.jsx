import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Nav } from 'react-bootstrap';
import { ContactVaultLogo } from '../svgs/Logo';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark w-100 fixed-top shadow-sm p-3 mb-5 rounded"
      style={{ backgroundColor: '#1A202C', height: '85px' }}>
      <div className="container">
        <Link
          className="navbar-brand text-white fs-4 h2 d-flex align-items-center"
          to="/">
          <div className="logo-container">
            <ContactVaultLogo />
          </div>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-75 dropdown-menu">
            <li className="nav-item drop-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/">
                Home
              </Link>
            </li>
            <li className="nav-item drop-item">
              <Nav.Link
                as={ScrollLink}
                to="about"
                smooth={true}
                duration={1000}
                offset={-100}
                style={{ cursor: 'pointer' }}
                className="nav-link active text-white">
                About
              </Nav.Link>
            </li>
            <li className="nav-item drop-item">
              <Nav.Link
                as={ScrollLink}
                to="contact"
                smooth={true}
                duration={1000}
                offset={-100}
                style={{ cursor: 'pointer' }}
                className="nav-link active text-white">
                Contact Us
              </Nav.Link>
            </li>
            <li className="nav-item drop-item me-5 pr-5">
              <Nav.Link
                as={ScrollLink}
                to="features"
                smooth={true}
                duration={1000}
                offset={-100}
                style={{ cursor: 'pointer' }}
                className="nav-link active text-white">
                Features
              </Nav.Link>
            </li>

            <li className="d-flex">
              <Link
                to="/signup"
                className="btn text-white "
                style={{ backgroundColor: '#565b65' }}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
