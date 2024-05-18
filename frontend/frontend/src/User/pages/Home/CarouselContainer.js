import React from 'react';
import { Carousel } from 'react-bootstrap';

// import image1 from './../../../image/1.jpg';
// import image2 from './../../../image/2.jpg';
//import image3 from './../../../image/3.jpg';
//import image4 from './../../../image/4.jpg';
import image5 from './../../../image/1n.jpg';
import image6 from './../../../image/2n.jpg';
import image7 from './../../../image/3n.jpg';
import image8 from './../../../image/4n.jpg';

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image6}
          alt="First slide"
           style={{height: "700px"}}
        />
        <Carousel.Caption>
        <h2>VacationVista Resort</h2>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image5}
          alt="Third slide"
           style={{height: "700px"}}
        />
        <Carousel.Caption>
        <h2>VacationVista Resort</h2>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image7}
          alt="Third slide"
           style={{height: "700px"}}
        />
        <Carousel.Caption>
        <h2>VacationVista Resort</h2>
          {/* <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 "
          src={image8}
          alt="Fourth slide"
           style={{height: "700px"}}
        />
        <Carousel.Caption>
        <h2>VacationVista Resort</h2>
          {/* <h3>Fourth slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;