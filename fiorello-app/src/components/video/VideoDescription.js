import React from 'react'
import '../../assets/scss/_videoCopm.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import photoVideo from '../../assets/images/video/h3-video-img.jpg'
function VideoDescription() {
    return (
        <div>
            <div className="col-lg-6">
                <div className="video-img">
                    <img src={photoVideo} />
                    <div className="player">
                        <FontAwesomeIcon className='play' icon={faPlay}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoDescription
