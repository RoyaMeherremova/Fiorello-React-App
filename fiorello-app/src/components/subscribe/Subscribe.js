import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/scss/_blog.scss";
import '../../assets/scss/_subscribe.scss'

function Subscribe() {
    const [sectionBackgrounds, setSectionBackgrounds] = useState([]);
    const baseURL = "https://localhost:7292";
    useEffect(() => {
        axios.get(`${baseURL}/api/SectionBackground/GetALL`)
            .then((response) => {
                setSectionBackgrounds(response.data);
            })
    }, []);

    const filteredData = sectionBackgrounds.filter(item => item.key === 'HomSubscribe');
    return (
        <div>
            {filteredData.length > 0 &&
                filteredData.map((item, index) => (
                    <section id="subscribe" style={{ background: `url(${item.value})` }}>
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
                ))
            }

        </div >
    )
}

export default Subscribe