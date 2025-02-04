import { Container } from 'react-bootstrap';
import { Element } from 'react-scroll';

import { motion } from 'framer-motion';

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AboutUs = () => {
  return (
    <Element name="about">
      <Container className="my-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}>
          <h2 className="text-center">About Us</h2>
          <p
            className="text-center about-cta fs-5 text-muted mx-auto"
            style={{ maxWidth: '700px' }}>
            Contact Manager Pro is a modern contact management solution that
            helps individuals and businesses stay organized, track interactions,
            and build better relationships. Our goal is to simplify contact
            management with powerful automation, seamless integrations, and
            enterprise-grade security. Contact Manager Pro helps businesses and
            individuals effortlessly organize their contacts, track
            communications, and build better relationships.
          </p>
        </motion.div>
      </Container>
    </Element>
  );
};

export default AboutUs;
