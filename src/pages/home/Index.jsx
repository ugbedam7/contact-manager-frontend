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
        style={{
          backgroundImage:
            "url('/contact1.jpg'), linear-gradient(to right, #2f3a4a, #4a5568)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat"
        }}
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
              className="btn btn-md"
              style={{
                backgroundImage: "linear-gradient(to right, #22d3ee, #3b82f6)",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                textDecoration: "none"
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
