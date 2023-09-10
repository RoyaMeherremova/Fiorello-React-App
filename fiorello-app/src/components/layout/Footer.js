import React from 'react'
import '../../assets/scss/_footer.scss'

function Footer() {
    return (
        <div>
            <section id='footer-up'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-6 col-lg-3">
                            <div className="item">
                                <h6>CUSTOMER SERVICE</h6>
                                <ul className="list-unstyled mt-4">
                                    <li><a className="text-black-50" href="">Help &amp; Contact Us</a></li>
                                    <li><a className="text-black-50" href="">Returns &amp; Refunds</a></li>
                                    <li><a className="text-black-50" href="">Online Stores</a></li>
                                    <li><a className="text-black-50" href="">Terms &amp; Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="item">
                                <h6>COMPANY</h6>
                                <ul className="list-unstyled mt-4">
                                    <li><a className="text-black-50" href="">About Us</a></li>
                                    <li><a className="text-black-50" href="">Blog</a></li>
                                    <li><a className="text-black-50" href="">Order Tracking</a></li>
                                    <li><a className="text-black-50" href="">FAQ Page</a></li>
                                    <li><a className="text-black-50" href="">Contact Us</a></li>
                                    <li><a className="text-black-50" href="">Login</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="item">
                                <h6>SOCIAL MEDIA</h6>
                                <ul className="list-unstyled mt-4">
                                    <li><a className="text-black-50" href="">Twitter</a></li>
                                    <li><a className="text-black-50" href="">Instagram</a></li>
                                    <li><a className="text-black-50" href="">Tumblr</a></li>
                                    <li><a className="text-black-50" href="">Pinterest</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="item">
                                <h6>ARCHIVE</h6>
                                <ul className="list-unstyled mt-4">
                                    <li><a className="text-black-50" href="">Designer Shoes</a></li>
                                    <li><a className="text-black-50" href="">Gallery</a></li>
                                    <li><a className="text-black-50" href="">Pricing</a></li>
                                    <li><a className="text-black-50" href="">Feature Index</a></li>
                                    <li><a className="text-black-50" href="">Login</a></li>
                                    <li><a className="text-black-50" href="">Help &amp; Support</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
