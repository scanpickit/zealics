// Footer.js
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import location from '../../images/location.png'
import calls from '../../images/phone.png'
import message from '../../images/message.png'

const Footer = () => {
  return (
    <MDBFooter  className='text-center text-lg-start text-muted footer'>
      <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4'>
                <MDBIcon icon="gem" className='Footer-company-name' />
                Zealics
              </h6>
              <p>
              We built an elegant solution. Our team believe that the success of our company is a result of our clients growth.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={location} alt="Location Icon" style={{ width: '20px', height: '20px' }}/> 
                    Presidency University, Rajankunte
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={calls} alt="Phone Icon" style={{ width: '20px', height: '20px' }} /> 
                    +91 9876543212
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={message} alt="Message Icon" style={{ width: '20px', height: '20px' }} /> 
                    swaropp@gmail.com
                </p>
            </MDBCol>


            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Features
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Services
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Why choose us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Career
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <p>
                <a href='#!' className='text-reset'>
                  Newsletter
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  How it works
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Past Projects
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                    Team of Service
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' >
        © 2021.All rights reserved.
      </div>
    </MDBFooter>
  );
};

export default Footer;
