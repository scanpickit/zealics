import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import JobCard from './JobCard';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';

const JobOpenings = () => {
  return (
    <div id='career' className='jobOpening'>
        <h1>Current Job Openings</h1>
        <p>Be a part of <span className='red-text'>something great.</span><br/>Join our fast <span className='red-text'>growing team.</span></p>
    
        <Container>
            <Row>
                <h3>Design</h3>
                <Col>
                <JobCard className='jobCard'
                    title="Software Developer"
                    description="We are looking for an experienced software developer with strong knowledge of React, Node.js, and cloud technologies."
                    jobType="Full-Time"
                    workMode="Work from Home"
                />
                </Col>
                <Col>
                <JobCard
                    title="Software Developer"
                    description="We are looking for an experienced software developer with strong knowledge of React, Node.js, and cloud technologies."
                    jobType="Full-Time"
                    workMode="Work from Home"
                />
                </Col>
                <Col>
                <JobCard
                    title="Software Developer"
                    description="We are looking for an experienced software developer with strong knowledge of React, Node.js, and cloud technologies."
                    jobType="Full-Time"
                    workMode="Work from Home"
                />
                </Col>
                <Col>
                <JobCard
                    title="Software Developer"
                    description="We are looking for an experienced software developer with strong knowledge of React, Node.js, and cloud technologies."
                    jobType="Full-Time"
                    workMode="Work from Home"
                />
                </Col>
                <Col>
                <JobCard
                    title="Software Developer"
                    description="We are looking for an experienced software developer with strong knowledge of React, Node.js, and cloud technologies."
                    jobType="Full-Time"
                    workMode="Work from Home"
                />
                </Col>
                <Col>
                <JobCard
                    title="Software Developer"
                    description="We are looking for an experienced software developer with strong knowledge of React, Node.js, and cloud technologies."
                    jobType="Full-Time"
                    workMode="Work from Home"
                />
                </Col>
            </Row>
            <button class="demo-button">Contact Us</button>
        </Container>
        
    </div>
  )
}

export default JobOpenings