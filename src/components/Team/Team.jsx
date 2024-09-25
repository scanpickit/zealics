import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import member1 from '../../images/yagna.png';
import { CiLinkedin } from "react-icons/ci";
import '../../App.css'; // Import custom CSS

const Team = () => {
  return (
    <div id='team' className='Team'>
      <h1>Meet With Our Team</h1>
      <p>
        Get to know our team of visionaries, engineers, and <br />
        Solution Specialists.
      </p>

      <Row>
        <Col lg={4} md={6} sm={12} className='mb-4'>
          <img src={member1} alt='team member' className='team-member-image' />
          <h3 className='team-member-name'>
            Yagna Bhai <span className='linkedin-icon'><CiLinkedin /></span>
          </h3>
          <p className='position'>Co-Founder</p>
        </Col>

        <Col lg={4} md={6} sm={12} className='mb-4'>
          <img src={member1} alt='team member' className='team-member-image' />
          <h3 className='team-member-name'>
            Yagna Bhai <span className='linkedin-icon'><CiLinkedin /></span>
          </h3>
          <p className='position'>Co-Founder</p>
        </Col>

        <Col lg={4} md={6} sm={12} className='mb-4'>
          <img src={member1} alt='team member' className='team-member-image' />
          <h3 className='team-member-name'>
            Yagna Bhai <span className='linkedin-icon'><CiLinkedin /></span>
          </h3>
          <p className='position'> Co-Founder</p>
        </Col>

        <Col lg={4} md={6} sm={12} className='mb-4'>
          <img src={member1} alt='team member' className='team-member-image' />
          <h3 className='team-member-name'>
            Yagna Bhai <span className='linkedin-icon'><CiLinkedin /></span>
          </h3>
          <p className='position'>Co-Founder</p>
        </Col>

        <Col lg={4} md={6} sm={12} className='mb-4'>
          <img src={member1} alt='team member' className='team-member-image' />
          <h3 className='team-member-name'>
            Yagna Bhai <span className='linkedin-icon'><CiLinkedin /></span>
          </h3>
          <p className='position'>Co-Founder</p>
        </Col>

        <Col lg={4} md={6} sm={12} className='mb-4'>
          <img src={member1} alt='team member' className='team-member-image' />
          <h3 className='team-member-name'>
            Yagna Bhai <span className='linkedin-icon'><CiLinkedin /></span>
          </h3>
          <p className='position'>Co-Founder</p>
        </Col>
      </Row>
    </div>
  );
};

export default Team;
