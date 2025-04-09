import { React, useEffect, useState } from 'react'
import axios from "axios";
import '../../assets/scss/_aboutVideoComp.scss'
import saraLogo from '../../assets/images/slider/h2-sign-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
function AboutVideoComp() {
    const [videos, SetVideos] = useState([]);
    const [headerBackgrounds, setHeaderBackgrounds] = useState([]);
    const baseURL = "https://localhost:7292";

    useEffect(() => {
        axios.get(`${baseURL}/api/Video/GetAll`)
            .then((response) => {
                SetVideos(response.data)
            })

    }, []);
    useEffect(() => {
        axios.get(`${baseURL}/api/HeaderBackground/GetALL`)
            .then((response) => {
                setHeaderBackgrounds(response.data);
            })
    }, []);
    const video = videos.length > 0 ? videos[0] : null;
    const filteredData = headerBackgrounds.filter(item => item.key === 'About');
    return (
        <>
            <div className='container d-flex'>
                {filteredData.length > 0 &&
                    filteredData.map((item, index) => (
                        <div className="aboutUs" key={index}>
                            <h1>{item.value.split(" ").map((word, index) => (word.toLowerCase() === "flowers" ? (<span key={index} className='red-word'>{word} </span>) : (word + " ")))}</h1>
                            <p>{item.description}</p>
                            <img src={saraLogo} />
                        </div>
                    ))
                }

                <div className='video-img'>
                    {video && (
                        <img src={video.image} />
                    )}
                    <div className="player">
                        <FontAwesomeIcon className='play' icon={faPlay}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutVideoComp
