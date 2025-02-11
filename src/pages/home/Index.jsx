import React from "react";
import { Link } from "react-router-dom";
import HowItWorks from "./HowItWorks";
import PlatformFeatures from "./PlatformFeatures";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "../../components/common/Footer";
import { Stack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Stack>
      <header
        className="hero-section text-center text-white py-5"
        style={{ backgroundColor: "#2d333e" }}
      >
        <div className="container hero">
          <h1 className="display-4 fw-bold">
            Contact <span class="gradient-text">Manager Pro</span>{" "}
          </h1>
          <p className="lead fs-5">
            Effortless Contact Management for Teams & Individuals
          </p>
          <p className="lead">
            <b className="fs-4">"Stay Connected. Stay Organized."</b>
          </p>
          <p className="lead fs-5 hero-cta">
            A modern, intuitive contact management solution designed to keep
            your relationships in sync. Manage contacts, track interactions, and
            collaborate with your team—all in one place.
          </p>
          <div className="mt-4">
            <Link
              to="/signup"
              className="btn btn-lg"
              style={{
                backgroundColor: "#1A202C",
                color: "#fff",
                marginRight: "10px"
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <HowItWorks />
      <PlatformFeatures />
      <AboutUs />
      <ContactUs />
      <Footer />
    </Stack>
  );
};

export default Home;
