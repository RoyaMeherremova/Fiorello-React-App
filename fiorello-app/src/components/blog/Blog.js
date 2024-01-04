import React from 'react'
import '../../assets/scss/_blog.scss'
import blog1 from '../../assets/images/blog/blog-feature-img-1.jpg'
import blog2 from '../../assets/images/blog/blog-feature-img-3.jpg'
import blog3 from '../../assets/images/blog/blog-feature-img-4.jpg'

function Blog() {
    return (
        <div>
            <section id='blog'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='offset-lg-3 col-lg-6'>
                            <div className='blog-section-title'>
                                <h1>From our Blog</h1>
                                <p>A perfect blend of creativity, energy, communication, happiness and
                                    love. Let us arrange
                                    a smile for you.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-lg-4'>
                            <div className='item'>
                                <div className='img'>
                                    <img src={blog1} />
                                    <div>
                                        <span>29.12.2019</span>
                                    </div>
                                </div>
                                <div className='text text-center'>
                                    <h5>Flower Power</h5>
                                    <p>Class aptent taciti sociosqu ad litora torquent per conubia
                                        nostra, per</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4'>
                            <div className='item'>
                                <div className='img'>
                                    <img src={blog2} />
                                    <div>
                                        <span>29.12.2019</span>
                                    </div>
                                </div>
                                <div className='text text-center'>
                                    <h5>Local Florists</h5>
                                    <p>Class aptent taciti sociosqu ad litora torquent per conubia
                                        nostra, per</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4'>
                            <div className='item'>
                                <div className='img'>
                                    <img src={blog3} />
                                    <div>
                                        <span>29.12.2019</span>
                                    </div>
                                </div>
                                <div className='text text-center'>
                                    <h5>Flower Beauty</h5>
                                    <p>Class aptent taciti sociosqu ad litora torquent per conubia
                                        nostra, per</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog