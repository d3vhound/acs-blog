import React, { Component } from 'react'
import Slider from 'react-slick'

class PhotoSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 400,
      centerMode:  false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            centerPadding: "50px",
            centerMode: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            centerPadding: "50px",
            centerMode: true
          }
        }
      ],
      customPaging: i => (
        <span></span>
      )
    }
    return (
      <section className="section slider-section">
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