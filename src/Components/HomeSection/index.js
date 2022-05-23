import React, { useState } from 'react';
import {
  HomeContainer,
  HomeBg,
  HomeContent,
  HomeH1,
  HomeP,
  HomeBtnWrapper,
  HomeButton,
  // ArrowForward, ArrowRight
} from './HomeElements'
import { Carousel } from 'react-bootstrap';
import slide1 from '../../IMGS/slide1.jpg'
import slide2 from '../../IMGS/slide2.jpg'
import slide3 from '../../IMGS/slide3.jpg'
// import { Button } from '../ButtonElement'

const HomeSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HomeContainer>
      <HomeBg>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block image-fluid"
              src={slide3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </HomeBg>

      <HomeContent>
        <HomeH1> Lorem Ipsum Dollar </HomeH1>
        <HomeP>
          Sign p for a new account today and receive $250 in credit towards your next payment.
        </HomeP>
        <HomeBtnWrapper>

          <HomeButton>Our Menu</HomeButton>
          <HomeButton>Book A Table</HomeButton>


          {/* <Button to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >
                      Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                     */}
        </HomeBtnWrapper>
      </HomeContent>

    </HomeContainer>


  )
}

export default HomeSection;
