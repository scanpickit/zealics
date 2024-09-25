import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css';

const slidesData = [
  { heading: 'Vishnu', subheading: 'Scanpick Pvt Ltd', content: 'Here is what our Clients are saying About us.Here is what our Clients are saying About us.Here is what our Clients are saying About us.' },
  { heading: 'Shivam', subheading: 'Scanpick Pvt Ltd', content: 'Here is what our Clients are saying About us.Here is what our Clients are saying About us.Here is what our Clients are saying About us.' },
  { heading: 'Naresh', subheading: 'Scanpick Pvt Ltd', content: 'Here is what our Clients are saying About us.Here is what our Clients are saying About us.Here is what our Clients are saying About us.' },
  { heading: 'Shivam', subheading: 'Scanpick Pvt Ltd', content: 'Here is what our Clients are saying About us.Here is what our Clients are saying About us.Here is what our Clients are saying About us.' },
  { heading: 'Vishnu', subheading: 'Scanpick Pvt Ltd', content: 'Here is what our Clients are saying About us.Here is what our Clients are saying About us.Here is what our Clients are saying About us.' },
];

const SliderComponent = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    centerPadding: "0", // Remove extra padding around the center slide
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Time in milliseconds (5000ms = 5 seconds)
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="slide">
            <div className="card-testimonial">
              <h2 className='heading'>{slide.heading}</h2>
              <h4 className='subheading'>{slide.subheading}</h4>
              <p className='content'>{slide.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
