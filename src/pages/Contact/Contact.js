import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Contact.css';


const Contact = () => {
  return (
    <Container className="vh-100 bg-dark text-white">
      <Row className="h-100 p-4">
        {/* Left Section */}
        <Col md={6} className="d-flex flex-column justify-content-center align-items-start">
          <div className=" contactus-text">
            <p>We'd Love </p>
            <p>to Connect</p>
            <p>with You.</p></div>
          <div className="lead-contact">
            <p>Share your vision, and let's create</p>
            <p>something amazing together.</p></div>
        </Col>

        {/* Right Section */}
        <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
          <Form className="w-100">
            <Row>
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Control type="text" placeholder="Name" className="bg-contact form-text border-0 mb-3" />
                </Form.Group>
              </Col>
              <Col md={6}>

                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="Email" className="bg-contact form-text border-0 mb-3" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formMessage">
              <Form.Control as="textarea" rows={4} placeholder="Message" className="bg-contact form-text border-0 mb-3" />
            </Form.Group>
            <button type="submit" class="hover-button" style={{ padding: '10px', paddingLeft: '100px', paddingRight: '100px', }}><span>Send</span></button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
