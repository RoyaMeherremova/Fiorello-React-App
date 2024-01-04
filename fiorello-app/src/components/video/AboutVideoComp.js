import React from 'react'
import '../../assets/scss/_aboutVideoComp.scss'
import photoVideo from '../../assets/images/video/h3-video-img.jpg'
import saraLogo from '../../assets/images/slider/h2-sign-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
function AboutVideoComp() {
    return (
        <>
            <div className='container d-flex'>
                <div className="aboutUs">
                    <h1>We take <span>flowers</span> personally<br></br>
                        & we bring you happiness</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec. </p>
                    <img src={saraLogo} />

                </div>
                <div className='video-img'>
                    <img src={photoVideo} />
                    <div className="player">
                        <FontAwesomeIcon className='play' icon={faPlay}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutVideoComp
