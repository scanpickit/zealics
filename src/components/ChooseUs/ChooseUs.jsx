import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import customer from '../../images/customer.png'
import reliable from '../../images/reliable.png'
import trust from '../../images/trust.png'

const ChooseUs = () => {
  return (
    <Container className='chooseUs'>
      <h1>Why Choose Zealics</h1>
      <Row >
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className="chooseUs-grid-item grid-item">
              <img src={customer} alt="Image 1" />
              <h3>Customer-Centric Approach</h3>
              <p>We prioritize your satisfaction with personalized service and timely solutions.</p>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className="chooseUs-grid-item grid-item">
              <img src={reliable} alt="Image 2" />
              <h3>Reliability & Integrity</h3>
              <p>We are committed to building lasting relationships through trust, transparency, and consistent results.</p>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className="chooseUs-grid-item grid-item">
              <img src={trust} alt="Image 3" />
              <h3>Expertise You Can Trust</h3>
              <p>Our experienced team delivers top-quality, reliable solutions tailored to your needs.</p>
            </div>
          </Col>
        </Row>
    
    </Container>
  )
}

export default ChooseUs
