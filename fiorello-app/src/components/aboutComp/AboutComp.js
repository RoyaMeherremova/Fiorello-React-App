import React from 'react'
import '../../assets/scss/_aboutCopm.scss'
import photoVideo from '../../assets/images/about/h3-video-img.jpg'
import hearth from '../../assets/images/about/h1-custom-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function AboutComp() {
    return (
        <div>
            <section id="about">
                <div className="container">
                    <div className="row py-2">
                        <div className="col-lg-6">
                            <div className="img">
                                <img src={photoVideo} />
                                <div className="player">
                                    <FontAwesomeIcon className='play' icon={faPlay}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-text">
                                <h1>Suprise Your <span>Valentine!</span> Let us arrange a smile.</h1>
                                <p className="py-2">Where flowers are our inspiration to create lasting memories. Whatever the
                                    occasion...</p>
                                <ul className="list-unstyled">
                                    <li className="mt-3">
                                        <img className='mr-2' src={hearth} />
                                        Hand picked just
                                        for you.</li>
                                    <li className="mt-3">
                                        <img className='mr-2' src={hearth} />
                                        Unique flower
                                        arrangements</li>
                                    <li className="mt-3">
                                        <img className='mr-2' src={hearth} />
                                        Best way to say
                                        you care.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutComp
