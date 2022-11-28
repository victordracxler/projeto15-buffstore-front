import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import banner1 from '../../../assets/images/1.png'
import banner2 from '../../../assets/images/2.png'
import banner3 from '../../../assets/images/3.png'
  
export default function CarouselComponent() {
  return (
    <div style={{ display: 'block', width: 1795, marginTop: 85 }}>
      <Carousel fade>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={banner1}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={banner2}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={banner3}
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}