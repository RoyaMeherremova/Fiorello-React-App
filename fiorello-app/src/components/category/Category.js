import React from 'react'
import '../../assets/scss/_category.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function Category() {
    return (
        <div>
            <section id='category'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-9'>
                            <ul>
                                <li>
                                    <a>All</a>

                                </li>
                                <li>
                                    <a>Popular</a>

                                </li>
                                <li>
                                    <a> Winter</a>

                                </li>
                                <li>
                                    <a>Various</a>
                                </li>
                                <li>
                                    <a> EXOTIC</a>

                                </li>
                                <li>
                                    <a> GREENS</a>

                                </li>
                                <li>
                                    <a> CACTUSES</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-3'>
                            <ul className='filter'>
                                <li>
                                    <a>Filter</a>
                                </li>
                                <li>
                                    <li>
                                        <a><FontAwesomeIcon style={{ marginBottom: "1px" }} icon={faCaretDown}></FontAwesomeIcon></a>
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    )
}

export default Category