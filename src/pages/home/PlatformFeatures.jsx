import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaUsers,
  FaSync,
  FaClock,
  FaLock,
  FaMobileAlt,
  FaSearch
} from 'react-icons/fa';
import { Element } from 'react-scroll';

const PlatformFeatures = () => {
  return (
    <Element name="features">
      <Container className="my-5">
        <h2 className="text-center mb-4">Platform Features</h2>

        <p
          className="text-center text-muted mx-auto"
          style={{ maxWidth: '700px' }}>
          Our platform is built with advanced features to help you stay
          organized, automate workflows, and access your contacts securely from
          anywhere.
        </p>

        <Row className="gy-4">
          {[
            {
              icon: <FaSync />,
              title: 'Smart Contact Importing',
              desc: 'Sync from multiple sources easily.'
            },
            {
              icon: <FaSearch />,
              title: 'Advanced Search',
              desc: 'Find contacts with powerful filters.'
            },
            {
              icon: <FaClock />,
              title: 'Automated Follow-Ups',
              desc: 'Never miss a conversation.'
            },
            {
              icon: <FaUsers />,
              title: 'Activity Timeline',
              desc: 'Track past interactions at a glance.'
            },
            {
              icon: <FaLock />,
              title: 'Enterprise-Grade Security',
              desc: 'End-to-end encrypted data.'
            },
            {
              icon: <FaMobileAlt />,
              title: 'Multi-Device Access',
              desc: 'Use across desktop, tablet, and mobile.'
            }
          ].map((item, idx) => (
            <Col md={6} lg={4} key={idx}>
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
    </Element>
  );
};

export default PlatformFeatures;
