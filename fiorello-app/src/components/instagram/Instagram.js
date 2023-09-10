import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import instagramPhoto1 from '../../assets/images/instagram/instagram1.jpg'
import instagramPhoto2 from '../../assets/images/instagram/instagram2.jpg'
import instagramPhoto3 from '../../assets/images/instagram/instagram3.jpg'
import instagramPhoto4 from '../../assets/images/instagram/instagram4.jpg'
import instagramPhoto5 from '../../assets/images/instagram/instagram5.jpg'
import instagramPhoto6 from '../../assets/images/instagram/instagram6.jpg'
import instagramPhoto7 from '../../assets/images/instagram/instagram7.jpg'
import instagramPhoto8 from '../../assets/images/instagram/instagram8.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../assets/scss/_instagram.scss'
function Instagram() {
    return (
        <div className='instagram'>
            <section id='instagram-carousel'>
                <OwlCarousel items={4}
                    className="owl-theme"
                    loop
                    nav
                    margin={8} autoplay={true} >
                    <div className='instagram-item'>
                        <img className="img img-fluid" src={instagramPhoto1} />
                        <a><FontAwesomeIcon style={{ marginBottom: "1px" }} icon={faInstagram}></FontAwesomeIcon></a>
                    </div>
                    <div className='instagram-item'><img className="img img-fluid" src={instagramPhoto2} />
                        <a><FontAwesomeIcon style={{ marginBottom: "1px" }} icon={faInstagram}></FontAwesomeIcon></a>
                    </div>
                    <div className='instagram-item'><img className="img" src={instagramPhoto3} />
                        <a><FontAwesomeIcon style={{ marginBottom: "1px" }} icon={faInstagram}></FontAwesomeIcon></a>
                    </div>
                    <div className='instagram-item'><img className="img" src={instagramPhoto4} />
                        <a><FontAwesomeIcon style={{ marginBottom: "1px" }} icon={faInstagram}></FontAwesomeIcon></a>
                    </div>
                    <div className='instagram-item'><img className="img" src={instagramPhoto5} />
                        <a><FontAwesomeIcon style={{ marginBottom: "1px" }} icon={faInstagram}></FontAwesomeIcon></a>
                    </div>
                    <div className='instagram-item'><img className="img" src={instagramPhoto6} />
                        <a><FontAwesomeIcon style={{ marginBottom: "1px" }} icon={faInstagram}></FontAwesomeIcon></a>
                    </div>
                    <div className='instagram-item'><img className="img" src={instagramPhoto7} />
                        <a><FontAwesomeIcon style={{ marginBottom: "1px" }} icon={faInstagram}></FontAwesomeIcon></a>
                    </div>
                    <div className='instagram-item'><img className="img" src={instagramPhoto8} />
                        <a><FontAwesomeIcon style={{ marginBottom: "1px" }} icon={faInstagram}></FontAwesomeIcon></a>
                    </div>
                </OwlCarousel>
                <div className='logo px-3 py-2'>
                    #FIORELLO
                </div>
            </section>
        </div>
    )
}

export default Instagram
