import React from 'react'
import '../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import service1 from '../../images/service1.png'
import service2 from '../../images/service2.png'
import service3 from '../../images/service3.png'

const Service = () => {
  return (
    <div id='services' className='services-section'>
        <h1>Committed to Delivering Outstanding<br/>Solution for Automotive</h1>
        <p>Zealics Technologies delivers innovative solutions across<br/>Electrical, Automotive, and Aviation industries.</p>
        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className="grid-item">
              <img src={service1} alt="Image 1" />
              <h3>Electrical</h3>
              <p>Comprehensive services for electrical systems including installations, repairs, and maintenance.</p>
              <a href="#electrical" className="learn-more">Learn More &rarr;</a>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className="grid-item">
              <img src={service2} alt="Image 2" />
              <h3>Automotive</h3>
              <p>Full range of automotive services such as repairs, maintenance, and diagnostics for all vehicle types.</p>
              <a href="#automotive" className="learn-more">Learn More &rarr;</a>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className="grid-item">
              <img src={service3} alt="Image 3" />
              <h3>Aviation</h3>
              <p>Specialized services for aircraft maintenance, repairs, and safety inspections.</p>
              <a href="#aviation" className="learn-more">Learn More &rarr;</a>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default Service;
