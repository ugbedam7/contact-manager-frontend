import { Container, Form, Button } from 'react-bootstrap';
import { Element } from 'react-scroll';

const ContactUs = () => {
  return (
    <Element name="contact">
      <Container className="my-5">
        <h2 className="text-center mb-4">Contact Us</h2>

        <p
          className="text-center fs-5 text-muted mx-auto"
          style={{ maxWidth: '700px' }}>
          Have questions or need support? Get in touch with our team, and we’ll
          be happy to help!
        </p>

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
