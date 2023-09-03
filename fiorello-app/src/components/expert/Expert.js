import React from 'react'
import '../../assets/scss/_expert.scss'
import expert1 from '../../assets/images/expert/h3-team-img-1.png'
import expert2 from '../../assets/images/expert/h3-team-img-2.png'
import expert3 from '../../assets/images/expert/h3-team-img-3.png'
import expert4 from '../../assets/images/expert/h3-team-img-4.png'


function Expert() {
    return (
        <div>
            <section id="experts">
                <div className="container mt-5">
                    <div className="row py-5">
                        <div className="offset-lg-3 col-lg-6">
                            <div className="section-title mt-5">
                                <h1>Flower Experts</h1>
                                <p>A perfect blend of creativity, energy, communication, happiness and
                                    love. Let us arrange
                                    a smile for you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-md-6 col-lg-3">
                            <div className="item text-center">
                                <div className="img">
                                    <img src={expert1} />
                                </div>
                                <div className="text mt-3">
                                    <h6>CRYSTAL BROOKS</h6>
                                    <p>Florist</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="item text-center">
                                <div className="img">
                                    <img src={expert2} />
                                </div>
                                <div className="text mt-3">
                                    <h6>SHIRLEY HARRIS</h6>
                                    <p>Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="item text-center">
                                <div className="img">
                                    <img src={expert3} />
                                </div>
                                <div className="text mt-3">
                                    <h6>BEVERLY CLARK</h6>
                                    <p>Florist</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="item text-center">
                                <div className="img">
                                    <img src={expert4} />
                                </div>
                                <div className="text mt-3">
                                    <h6>AMANDA WATKINS</h6>
                                    <p>Florist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Expert
