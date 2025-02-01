import { Container } from 'react-bootstrap';
import { Element } from 'react-scroll';

const AboutUs = () => {
  return (
    <Element name="about">
      <Container className="my-5">
        <h2 className="text-center">About Us</h2>
        <p className="text-center about-cta fs-5">
          Contact Manager Pro is a modern contact management solution that helps
          individuals and businesses stay organized, track interactions, and
          build better relationships. Our goal is to simplify contact management
          with powerful automation, seamless integrations, and enterprise-grade
          security.
        </p>
      </Container>
    </Element>
  );
};

export default AboutUs;
