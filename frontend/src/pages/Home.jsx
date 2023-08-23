import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import '../styles/home.css'

import heroImg1 from '../assets/images/hero-img01.jpg'
import heroImg2 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImage from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'
const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know before you go'}/>
                  <img src={worldImage} alt="" />
                </div>
                <h1>Travelling opens the door to create <span className="highlight">memories</span></h1>
                <p>Embark on unforgettable journeys with our travel booking services. Discover breathtaking destinations, create cherished memories, and experience the world like never before. Let us be your guide on the path to extraordinary adventures.</p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg1} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls autoplay/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>

            <SearchBar/>
          </Row>
        </Container>
      </section>

      {/********************hero section start********/}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'>What we serve</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/********featured tour section start */}
      

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'}/>
              <h2 className='featured__tour-title'>Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>

      </section>
      {/********featured tour section end *******/}

      {/********experience section end *******/}
      <section>
        <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'}/>
              <h2>Will our all experience <br />we will serve you</h2>
              <p>Allowing travelers to effortlessly explore 
              <br />
              And secure their dream destinations with a click.
              </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5" >
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years of Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
            <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
        </Container>
      </section>
      {/********experience  section end *******/}
      {/********gallery section end *******/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
                <Subtitle subtitle={'Gallery'}/>
                <h2 className='gallery__title'>Visit our customers</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      {/********gallery  section end *******/}

      {/********testimonial section end *******/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className='testimonial__title'>Customer views</h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>
      {/********testimonial section end *******/}

      <Newsletter/>
    </>
  )
}

export default Home
