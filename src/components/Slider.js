import React, { Component } from 'react'
import Slider from 'react-slick'

class PhotoSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        }
      ],
      customPaging: i => (
        <span></span>
      )
    }
    return (
      <section className="section">
      <div className="container">
        <div className="slider-container">
          <Slider {...settings}>
            {this.props.children}
          </Slider>
        </div>
      </div>
      </section>
    )
  }
}

export default PhotoSlider