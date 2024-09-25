import React from 'react';
import '../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import detailImage1 from '../../images/details1.png';
import detailImage2 from '../../images/details2.png';
import detailImage3 from '../../images/deatils3.png';

const DetailSection = () => {
  return (
    <div className='detail-section'>
      <Row className="detail-row">
        {/* First Row: Text on Left, Image on Right */}
        <Col lg={6} md={6} sm={12} xs={12}>
          <div id='electrical' className="detail-text">
            <h2>Electrical</h2>
            <p>Our mission is to provide top-quality automotive services with integrity, precision, and efficiency. We aim to exceed customer expectations through expert diagnostics, timely repairs, and exceptional customer care, building lasting relationships based on trust and reliability. Whether it’s routine maintenance or complex repairs, we are dedicated to keeping you on the road safely.</p>
            <button className="demo-button">Request a Demo</button>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <img src={detailImage1} alt="Detail 1" className="detail-image" />
        </Col>
      </Row>
      
      <Row className="detail-row">
        {/* Second Row: Image on Left, Text on Right */}
        <Col lg={6} md={6} sm={12} xs={12} style={{textAlign:'left'}}>
          <img src={detailImage2} alt="Detail 2" className="detail-image"  />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <div id='automotive' className="detail-text">
            <h2>Automotive</h2>
            <p>Our automotive services encompass a range of specialized solutions designed to ensure peak vehicle performance. We offer expert diagnostics to accurately identify and address issues, providing a clear path to effective repairs. Our engineering support includes advanced troubleshooting and technical assistance for complex automotive problems. Additionally, we conduct thorough vehicle testing to ensure all systems are functioning correctly and meet safety and performance standards. Whether you need routine maintenance or in-depth service, our team is dedicated to keeping your vehicle running smoothly and reliably.</p>
            <button className="demo-button">Request a Demo</button>
          </div>
        </Col>
      </Row>

      <Row className="detail-row">
        {/* Third Row: Text on Left, Image on Right */}
        <Col lg={6} md={6} sm={12} xs={12}>
          <div id='aviation' className="detail-text">
            <h2>Aviation</h2>
            <p>Our aviation services include comprehensive avionics support to ensure the accurate and reliable functioning of aircraft electronic systems. We provide expert aircraft maintenance to keep your aircraft in top condition, adhering to the highest safety and performance standards. Additionally, our engineering design support offers tailored solutions for optimizing aircraft systems and addressing complex design challenges. Whether you need routine upkeep or specialized technical assistance, our team is committed to enhancing the safety, efficiency, and performance of your aircraft.</p>
            <button className="demo-button">Request a Demo</button>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <img src={detailImage3} alt="Detail 3" className="detail-image" />
        </Col>
      </Row>
    </div>
  );
}

export default DetailSection;
