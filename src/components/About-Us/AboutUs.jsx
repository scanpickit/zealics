import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import arrow from '../../images/arrow.png';
import groupImage from '../../images/groupimage.png';
import visionImage from '../../images/vision image.png';
import  Carousel  from 'react-bootstrap/Carousel';
import slider from '../../images/slider.png'

const AboutUs = () => {
  return (
    <div id='about'>
      {/* About Us Section */}
      <div className='AboutUs'>
        <h1 className='text-center'>About Us</h1>
        <Container>
          <Row className='aboutUs-text-Row'>
            <Col lg={6} md={6} sm={12} xs={12} className="d-flex align-items-center">
              <h3 className="about-us-heading">
                Mastering Every Task,<br />
                Delivering Beyond the<br />
                Ask with <span id='aboutus-zealics'>zealics</span>
              </h3>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <p className="about-us-description">
                At zealics, we specialize in delivering top-tier services across various industries. Our expert team is dedicated to ensuring quality, reliability, and customer satisfaction in every project we undertake, from automotive care to electrical services and beyond. With a focus on precision and excellence, we aim to exceed expectations and keep your operations running smoothly.
              </p>
            </Col>
          </Row>

          <Row className='aboutUs-image-Row text-center mt-4'>
            <Col>
              <img src={arrow} id='arrow' className="img-fluid" alt="Arrow" />

              <img src={groupImage} id='groupImage' className="img-fluid" alt="Group" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Vision Section */}
      <div className='Vision'>
        <Container>
          <Row className='Vision-Row align-items-center'>
            <Col lg={6} md={6} sm={12} xs={12}>
              <h2 id='vision-heading'>-Our Vision</h2>
              <h2 id='vision-sub'>
                Discover Our Vision and See <br />
                What Drives Us Forward
              </h2>
              <p className="vision-description">
                Our vision is to become the most trusted and customer-focused automotive service provider in the industry, consistently delivering top-notch care for every vehicle we service. We strive to ensure that every car, truck, or vehicle we touch drives safer, operates more smoothly, and stands the test of time with enhanced longevity.
              </p>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="text-center">
              <img src={visionImage} className="img-fluid vision-img" alt="Vision" />
            </Col>
          </Row>
        </Container>
      </div>

      {/*journey section */}
      <div className='journey-section'>  
      <Row>
        {/* First Column */}
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className="journey-content">
            <h2>Our Journey</h2>
            <p>
            Zealics started with a simple goal: to provide reliable, high-quality service across multiple industries. What began as a small team of dedicated professionals has grown into a trusted provider for Electrical,
            </p>
          </div>
        </Col>
        
         {/* Right Column (Carousel) */}
         <Col lg={6} md={12} sm={12} xs={12}>
          <Carousel controls={true} indicators={false} interval={null}>
            {/* Slide 1 */}
            <Carousel.Item>
                <img src={slider} width='100%'/>
              <Row>
                <Col>
                  <div className="carousel-grid-item">
                    <h3>January 2024</h3>
                    <p>Successfully completed a large-scale electrical infrastructure project, powering over 1,000 homes.</p>
                  </div>
                </Col>
                <Col>
                  <div className="carousel-grid-item">
                    <h3>Feburary 2024</h3>
                    <p>Recognized for outstanding service and innovation in the automotive repair industry.</p>
                  </div>
                </Col>
                <Col>
                  <div className="carousel-grid-item">
                    <h3>March 2024</h3>
                    <p>Introduced comprehensive aviation maintenance and safety inspections.</p>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
            <img src={slider} width='100%'/>
              <Row>
                <Col>
                  <div className="carousel-grid-item">
                    <h3>April 2024</h3>
                    <p>Some text for item 4</p>
                  </div>
                </Col>
                <Col>
                  <div className="carousel-grid-item">
                    <h3>May 2024</h3>
                    <p>Some text for item 5</p>
                  </div>
                </Col>
                <Col>
                  <div className="carousel-grid-item">
                    <h3>June 2024</h3>
                    <p>Some text for item 6</p>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutUs;
