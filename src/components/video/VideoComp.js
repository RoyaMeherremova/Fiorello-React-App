import React, { useEffect, useState } from 'react'
import '../../assets/scss/_videoCopm.scss'
import hearth from '../../assets/images/video/h1-custom-icon.png'
export default function VideoComp() {
    return (
        <div>
            <div className="col-lg-6">
                <div className="about-text">
                    <h1>Suprise Your <span>Valentine!</span> Let us arrange a smile.</h1>
                    <p className="py-2">Where flowers are our inspiration to create lasting memories. Whatever the occasion...</p>
                    <ul className="list-unstyled">
                        <li className="mt-3">
                            <img className='mr-2' src={hearth} />
                            Hand picked just
                            for you.</li>
                        <li className="mt-3">
                            <img className='mr-2' src={hearth} />
                            Unique flower
                            arrangements</li>
                        <li className="mt-3">
                            <img className='mr-2' src={hearth} />
                            Best way to say
                            you care.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
