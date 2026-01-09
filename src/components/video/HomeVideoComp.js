import React, { useEffect, useState } from 'react';
import '../../assets/scss/_homeVideoCopm.scss';
import hearth from '../../assets/images/video/h1-custom-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function HomeVideoComp() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/db.json')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch JSON');
                return res.json();
            })
            .then(data => {
                setVideos(data.videos || []);
                setLoading(false);
            })
            .catch(() => {
                setError('Error retrieving videos');
                setLoading(false);
            });
    }, []);

    const video = videos.length > 0 ? videos[0] : null;

    return (
        <section id="homeVideo">
            <div className="container">
                {loading && <p>Loading...</p>}
                {error && <p className="error">{error}</p>}

                {video && (
                    <div className="row py-2">
                        <div className="col-lg-6">
                            <div className="img">
                                <img src={video.image} alt="Video thumbnail" />
                                <div className="player">
                                    <FontAwesomeIcon className="play" icon={faPlay} />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="video-text">
                                <h1>
                                    {video.title.split(" ").map((word, index) =>
                                        word.toLowerCase().includes("valentine")
                                            ? <span key={index} className="red-word">{word} </span>
                                            : word + " "
                                    )}
                                </h1>

                                <p className="py-2">{video.description}</p>

                                <ul className="list-unstyled">
                                    <li className="mt-3">
                                        <img className="mr-2" src={hearth} alt="" />
                                        Hand picked just for you.
                                    </li>
                                    <li className="mt-3">
                                        <img className="mr-2" src={hearth} alt="" />
                                        Unique flower arrangements
                                    </li>
                                    <li className="mt-3">
                                        <img className="mr-2" src={hearth} alt="" />
                                        Best way to say you care.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default HomeVideoComp;
