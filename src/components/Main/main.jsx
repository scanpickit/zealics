import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HiCheckCircle } from "react-icons/hi";
import '../../App.css';
import Button from 'react-bootstrap/Button';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import customer from '../../images/customer-review 1.svg';
import reputation from '../../images/reputation 1.svg';

const Content = () => {
  return (
      <Container className='content-container'>
        <Row>
          <Col xs={12} lg={8} className="text-lg-start text-center">
            <div className='left-div d-flex justify-content-lg-start justify-content-center'>
              <HiCheckCircle className='icon' />
              <p style={{ color: '#24D691', fontSize: '20px' }}>Service You Can Trust, Every Time</p>
            </div>
            <div className='left-gap1'>
              <h1 className='title'>Empowering <span style={{ color: 'red' }}>Industries</span> with<br />Innovative Solutions.</h1>
            </div>
            <div className='left-gap2'>
              <p>
                Zealics Technologies delivers innovative solutions across<br />
                Electrical, Automotive, and Aviation industries.
              </p>
            </div>
            <a href='#services'>
            <Button className='explore-btn'>Explore Services</Button>
            </a>
            <div className='feature'>
              <Row className='feature-row align-items-center justify-content-center'>
                {/* First Column */}
                <Col xs={12} md={6} className="d-flex">
                  <Row className='h-100 align-items-center w-100'>
                    {/* Image taking 20% width */}
                    <Col xs={3} className="text-end">
                      <img className='feature-images' src={customer} alt="Customer Satisfaction" />
                    </Col>
                    {/* Text taking 80% width */}
                    <Col className='feature-text' xs={9}>
                      <h1 className='feature-h1'>93%</h1>
                      <p className='feature-p'>Customer satisfaction</p>
                    </Col>
                  </Row>
                </Col>

                {/* Second Column */}
                <Col xs={12} md={6} className="d-flex mt-3 mt-md-0">
                  <Row className='h-100 align-items-center w-100'>
                    {/* Image taking 20% width */}
                    <Col xs={3} className="text-end">
                      <img className='feature-images' src={reputation} alt="Industry Experience" />
                    </Col>
                    {/* Text taking 80% width */}
                    <Col className='feature-text' xs={9}>
                      <h1 className='feature-h1'>7+ Years</h1>
                      <p className='feature-p'>Industry Experience</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={4} className='d-none d-lg-block image-container'>
            <img id='image1' src={image1} alt="Image 1" />
            <img id='image2' src={image2} alt="Image 2" />
          </Col>
        </Row>
      </Container>
  );
}

export default Content;
