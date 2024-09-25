import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Slider from './Carousel'; // Import the slider

const Testimonials = () => {
  return (
    <div className="testimonials">
      <Row className="justify-content-center">
        <h1>Testimonials</h1>
      </Row>
      <Row className="justify-content-center">
        <h3>Here is what our Clients are saying About us</h3>
      </Row>
      <Row>
        {/* Background div */}
        <div className="testimonial-background"></div>

        {/* Slider will be positioned on top of the background */}
        <div className="slider-container">
          <Slider />
        </div>
      </Row>
    </div>
  );
};

export default Testimonials;
