import React, { Component } from 'react'
import Slider from 'react-slick'

class PhotoSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      centerMode: true,
      slidesToScroll: 1,
      initialSlide: 2,
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