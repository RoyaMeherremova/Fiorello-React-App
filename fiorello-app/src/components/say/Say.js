import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../../assets/scss/_say.scss'
import say1 from '../../assets/images/say/testimonial-img-1.png'
import say2 from '../../assets/images/say/testimonial-img-2.png'
function Say() {
    return (
        <>
            <section id='say'>
                <div className='container py-5'>
                    <Carousel>
                        <Carousel.Item>
                            <div className='item text-center'>
                                <div className='img d-flex justify-content-center'>
                                    <img src={say1} />
                                </div>
                                <div className='text pt-3 pb-5'>
                                    <i>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus lingua. </i>
                                </div>
                                <div className='author'>
                                    <h6>Anna Barnes</h6>
                                    <p>Florist</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='item text-center'>
                                <div className='img d-flex justify-content-center'>
                                    <img src={say2} />
                                </div>
                                <div className='text pt-3 pb-5'>
                                    <i>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                        ligula eget. </i>
                                </div>
                                <div className='author'>
                                    <h6>Anna Barnes</h6>
                                    <p>Florist</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </section>
        </>
    )
}
export default Say