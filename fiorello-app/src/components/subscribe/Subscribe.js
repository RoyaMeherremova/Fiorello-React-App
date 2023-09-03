import React from 'react'
import '../../assets/scss/_subscribe.scss'
import subscribePhoto from '../../assets/images/subscribe/h3-background-img.jpg'

function Subscribe() {
    return (
        <div>
            <section id="subscribe" style={{ background: `url(${subscribePhoto})` }}>
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-12">
                            <div className="content text-center py-5">
                                <h3>Join The Colorful Bunch!</h3>
                                <div className="form-group d-flex justify-content-center flex-wrap mt-5">
                                    <input type="email" placeholder="Email Address" />
                                    <a className="btn btn-danger btn-lg rounded-0 px-5 mt-3 mt-sm-0">Subscribe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Subscribe