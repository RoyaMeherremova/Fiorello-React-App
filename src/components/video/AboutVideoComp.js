import { React, useEffect, useState } from 'react';
import '../../assets/scss/_aboutVideoComp.scss';
import saraLogo from '../../assets/images/slider/h2-sign-img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function AboutVideoComp() {
    const [videos, setVideos] = useState([]);
    const [headerBackgrounds, setHeaderBackgrounds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data/db.json'); // Local JSON fayl
                if (!res.ok) throw new Error('Failed to fetch local JSON');
                const data = await res.json();

                setVideos(data.videos || []);
                setHeaderBackgrounds(data.headerBackgrounds || []);
            } catch (err) {
                console.error(err);
                setError('Error fetching local data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p className="text-center">Loading About section...</p>;
    if (error) return <p className="text-center error">{error}</p>;

    const video = videos.length > 0 ? videos[0] : null;
    const filteredData = headerBackgrounds.filter(item => item.key === 'About');

    return (
        <div className='container d-flex'>
            {filteredData.length > 0 &&
                filteredData.map((item, index) => (
                    <div className="aboutUs" key={index}>
                        <h1>
                            {item.value.split(" ").map((word, i) =>
                                word.toLowerCase() === "flowers" ? (
                                    <span key={i} className='red-word'>{word} </span>
                                ) : (
                                    word + " "
                                )
                            )}
                        </h1>
                        <p>{item.description}</p>
                        <img src={saraLogo} alt="Logo" />
                    </div>
                ))
            }

            <div className='video-img'>
                {video && <img src={video.image} alt="Video" />}
                <div className="player">
                    <FontAwesomeIcon className='play' icon={faPlay} />
                </div>
            </div>
        </div>
    )
}

export default AboutVideoComp;
