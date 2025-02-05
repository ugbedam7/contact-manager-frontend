import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaSync, FaTag, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } }
};

const HowItWorks = () => {
  return (
    <Container className="my-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}>
        <h2 className="text-center mb-4">How It Works</h2>
        <p
          className="text-center fs-5 text-muted mx-auto"
          style={{ maxWidth: '700px' }}>
          Easily manage your contacts with seamless integration, smart
          categorization, and automated tracking. Whether you're an individual
          or a business, our platform ensures smooth contact management.
        </p>
      </motion.div>
      <Row className="gy-4">
        {[
          {
            icon: <FaSync />,
            title: 'Import & Sync',
            desc: 'Sync contacts from email, CRM, or phone.'
          },
          {
            icon: <FaTag />,
            title: 'Organize & Categorize',
            desc: 'Tag, group, and customize contact details.'
          },
          {
            icon: <FaClock />,
            title: 'Track Interactions',
            desc: 'Log calls, emails, and meetings easily.'
          },
          {
            icon: <FaUsers />,
            title: 'Collaborate',
            desc: 'Share contacts and notes with your team.'
          }
        ].map((item, idx) => (
          <Col md={6} lg={3} key={idx}>
            <Card className="shadow-sm text-center border-0 p-3 bg-light">
              <div className="fs-3" style={{ color: '#1A202C' }}>
                {item.icon}
              </div>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HowItWorks;
