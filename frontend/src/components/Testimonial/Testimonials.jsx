import React from 'react'
import Slider from 'react-slick'

import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
  const settings ={
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive:[
      {
        breakpoint :992,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  }
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
        Smooth booking experience with this website! The user-friendly interface made selecting my tour a breeze. Real-time updates on availability were reassuring, and the responsive customer support answered my questions promptly. A reliable platform that made my travel planning stress-free and enjoyable.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className='w-25 h-25 rounder-2' alt="" />
          <div>
            <h6 className='mb-0 mt-3'>Jhonny</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        Highly impressed with the tour booking website's convenience and reliability. Navigating through options was a breeze, and the instant updates on availability saved me time. The seamless booking process and attentive customer service made my travel planning enjoyable. An excellent platform that I'll gladly recommend!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className='w-25 h-25 rounder-2' alt="" />
          <div>
            <h6 className='mb-0 mt-3'>Dani Daniels</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        Smooth booking experience with this website! The user-friendly interface made selecting my tour a breeze. Real-time updates on availability were reassuring, and the responsive customer support answered my questions promptly. A reliable platform that made my travel planning stress-free and enjoyable.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className='w-25 h-25 rounder-2' alt="" />
          <div>
            <h6 className='mb-0 mt-3'>Jhonny Sins</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        Smooth booking experience with this website! The user-friendly interface made selecting my tour a breeze. Real-time updates on availability were reassuring, and the responsive customer support answered my questions promptly. A reliable platform that made my travel planning stress-free and enjoyable.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className='w-25 h-25 rounder-2' alt="" />
          <div>
            <h6 className='mb-0 mt-3'>Jhonny Sins</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        Highly impressed with the tour booking website's convenience and reliability. Navigating through options was a breeze, and the instant updates on availability saved me time. The seamless booking process and attentive customer service made my travel planning enjoyable. An excellent platform that I'll gladly recommend!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className='w-25 h-25 rounder-2' alt="" />
          <div>
            <h6 className='mb-0 mt-3'>Dani Daniels</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        Smooth booking experience with this website! The user-friendly interface made selecting my tour a breeze. Real-time updates on availability were reassuring, and the responsive customer support answered my questions promptly. A reliable platform that made my travel planning stress-free and enjoyable.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className='w-25 h-25 rounder-2' alt="" />
          <div>
            <h6 className='mb-0 mt-3'>Jhonny</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default Testimonials
