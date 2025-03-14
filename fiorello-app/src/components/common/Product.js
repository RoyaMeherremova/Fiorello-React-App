import React from 'react'
import '../../assets/scss/_product.scss'
function Product({ products }) {
    return (
        <div>
            <section id='products'>
                <div className='container my-5'>
                    <div className='row'>

                        {products.map((item) => (
                            <div className='col-3'>
                                <div className='product'>
                                    <div className='prod-img'>
                                        <img src={item.Image} />
                                    </div>
                                    <h6>{item.Name}</h6>
                                    <span className='add-cart'><a>Add to cart</a></span>
                                    <div className='price'><span>$<span>{item.Price}</span></span></div>
                                </div>
                            </div>
                        ))}






                        {/* <div className='col-3'>
                            <div className='product'>
                                <div className='prod-img'>
                                    <img src={product2} />
                                </div>
                                <h6>MAJESTY PALM</h6>
                                <span className='add-cart'><a>Add to cart</a></span>
                                <div className='price'><span>$<span>259</span></span></div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='product'>
                                <div className='prod-img'>
                                    <img src={product3} />
                                </div>
                                <h6>MAJESTY PALM</h6>
                                <span className='add-cart'><a>Add to cart</a></span>
                                <div className='price'><span>$<span>259</span></span></div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='product'>
                                <div className='prod-img'>
                                    <img src={product4} />
                                </div>
                                <h6>MAJESTY PALM</h6>
                                <span className='add-cart'><a>Add to cart</a></span>
                                <div className='price'><span>$<span>259</span></span></div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='product'>
                                <div className='prod-img'>
                                    <img src={product5} />
                                </div>
                                <h6>MAJESTY PALM</h6>
                                <span className='add-cart'><a>Add to cart</a></span>
                                <div className='price'><span>$<span>259</span></span></div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='product'>
                                <div className='prod-img'>
                                    <img src={product6} />
                                </div>
                                <h6>MAJESTY PALM</h6>
                                <span className='add-cart'><a>Add to cart</a></span>
                                <div className='price'><span>$<span>259</span></span></div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='product'>
                                <div className='prod-img'>
                                    <img src={product7} />
                                </div>
                                <h6>MAJESTY PALM</h6>
                                <span className='add-cart'><a>Add to cart</a></span>
                                <div className='price'><span>$<span>259</span></span></div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='product'>
                                <div className='prod-img'>
                                    <img src={product8} />
                                </div>
                                <h6>MAJESTY PALM</h6>
                                <span className='add-cart'><a>Add to cart</a></span>
                                <div className='price'><span>$<span>259</span></span></div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product