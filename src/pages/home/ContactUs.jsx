import { Container, Form, Button } from 'react-bootstrap';
import { Element } from 'react-scroll';

import { motion } from 'framer-motion';

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ContactUs = () => {
  return (
    <Element name="contact">
      <Container className="my-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}>
          <h2 className="text-center mb-4">Contact Us</h2>

          <p
            className="text-center fs-5 text-muted mx-auto"
            style={{ maxWidth: '700px' }}>
            Have questions or need support? Get in touch with our team, and
            we’ll be happy to help!
          </p>
        </motion.div>

        <Form className="mx-auto" style={{ maxWidth: '500px' }}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Your message" />
          </Form.Group>

          <Button
            className="border-0"
            style={{ backgroundColor: '#1A202C' }}
            type="submit">
            Send Message
          </Button>
        </Form>
      </Container>
    </Element>
  );
};

export default ContactUs;
