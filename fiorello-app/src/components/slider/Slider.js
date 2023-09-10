import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../../assets/scss/_slider.scss'
import slider1 from '../../assets/images/slider/h3-slider-background.jpg'
import slider2 from '../../assets/images/slider/h3-slider-background-2.jpg'
import slider3 from '../../assets/images/slider/h3-slider-background-3.jpg'
import sliderLogo from '../../assets/images/slider/h2-sign-img.png'

function Slider() {
    return (
        <section id='slider'>
            <Carousel>
                <Carousel.Item>
                    <img className='slide' src={slider1} />
                    <Carousel.Caption>
                        <div className='slide-content'>
                            <h1>Send <span>flowers</span> like</h1>
                            <h1>you mean it</h1>
                            <p>Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will
                                make it special cursus a sit amet mauris. </p>
                            <img src={sliderLogo} />
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='slide' src={slider2} />
                    <Carousel.Caption>
                        <div className='slide-content'>
                            <h1>Send <span>flowers</span> like</h1>
                            <h1>you mean it</h1>
                            <p>Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will
                                make it special cursus a sit amet mauris. </p>
                            <img src={sliderLogo} />
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='slide' src={slider3} />
                    <Carousel.Caption>
                        <div className='slide-content'>
                            <h1>Send <span>flowers</span> like</h1>
                            <h1>you mean it</h1>
                            <p>Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will
                                make it special cursus a sit amet mauris. </p>
                            <img src={sliderLogo} />
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>

    );
}

export default Slider;


