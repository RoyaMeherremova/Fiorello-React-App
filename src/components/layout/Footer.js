import React, { useState, useEffect } from 'react';
import '../../assets/scss/_footer.scss';

function Footer() {
    const [settings, setSettings] = useState([]);

    useEffect(() => {
        fetch('/data/settings.json')
            .then(res => res.json())
            .then(json => setSettings(json.settings || []))
            .catch(err => console.error(err));
    }, []);

    const filteredData1 = settings.filter(item => item.key === 'Owner');
    const filteredData2 = settings.filter(item => item.key === 'Pay');

    return (
        <>
            <section id='footer-up'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-3'>
                            <div className='item'>
                                <h6>CUSTOMER SERVICE</h6>
                                <ul className='list-unstyled mt-4'>
                                    <li><a className='text-black-50' href=''>Help &amp; Contact Us</a></li>
                                    <li><a className='text-black-50' href=''>Returns &amp; Refunds</a></li>
                                    <li><a className='text-black-50' href=''>Online Stores</a></li>
                                    <li><a className='text-black-50' href=''>Terms &amp; Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3'>
                            <div className='item'>
                                <h6>COMPANY</h6>
                                <ul className='list-unstyled mt-4'>
                                    <li><a className='text-black-50' href=''>About Us</a></li>
                                    <li><a className='text-black-50' href=''>Blog</a></li>
                                    <li><a className='text-black-50' href=''>Order Tracking</a></li>
                                    <li><a className='text-black-50' href=''>FAQ Page</a></li>
                                    <li><a className='text-black-50' href=''>Contact Us</a></li>
                                    <li><a className='text-black-50' href=''>Login</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3'>
                            <div className='item'>
                                <h6>SOCIAL MEDIA</h6>
                                <ul className='list-unstyled mt-4'>
                                    <li><a className='text-black-50' href=''>Twitter</a></li>
                                    <li><a className='text-black-50' href=''>Instagram</a></li>
                                    <li><a className='text-black-50' href=''>Tumblr</a></li>
                                    <li><a className='text-black-50' href=''>Pinterest</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 mb-5'>
                            <div className='item'>
                                <h6>ARCHIVE</h6>
                                <ul className='list-unstyled mt-4'>
                                    <li><a className='text-black-50' href=''>Designer Shoes</a></li>
                                    <li><a className='text-black-50' href=''>Gallery</a></li>
                                    <li><a className='text-black-50' href=''>Pricing</a></li>
                                    <li><a className='text-black-50' href=''>Feature Index</a></li>
                                    <li><a className='text-black-50' href=''>Login</a></li>
                                    <li><a className='text-black-50' href=''>Help &amp; Support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </section>

            <section id='footer-down'>
                <div className='container'>
                    <div className='row py-2'>
                        <div className='col-lg-4 text-center text-lg-left'>
                            {filteredData1.length > 0 && filteredData1.map((item, index) => (
                                <p key={index}>{item.value}</p>
                            ))}
                        </div>
                        <div className='col-lg-4 text-center'>
                            {filteredData2.length > 0 && filteredData2.map((item, index) => (
                                <img key={index} src={item.value} alt="Payment" />
                            ))}
                        </div>
                        <div className='col-lg-4 text-center text-lg-right mt-3 mt-lg-0'>
                            <a className='text mr-5' href='https://www.linkedin.com/in/roya-maharramova-b28714284/'>LINKEDIN</a>
                            <a className='text' href='https://www.facebook.com'>FACEBOOK</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
