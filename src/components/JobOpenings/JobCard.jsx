import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jobTypeImg from '../../images/jobType.png';
import jobMode from '../../images/jobMode.png';


const JobCard = ({ title, description, jobType, workMode }) => {
  return (
    <div className='job-card-container'>
      <Card className="mb-4" style={{ width: '350px', borderRadius:'30px' ,padding:'0 3%'}}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          
          {/* Row with two columns: Job Type and Work Mode */}
          <Row className="job-details">
            <Col xs={6} className="job-type">
              <p><img className='jobDetImg' src={jobTypeImg}/>{jobType}</p>
            </Col>
            <Col xs={6} className="work-mode text-end">
              <p><img className='jobDetImg' src={jobMode}/>{workMode}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JobCard;
