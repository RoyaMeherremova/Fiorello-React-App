import React from 'react'
import '../../assets/scss/_product.scss'
import product1 from '../../assets/images/product/shop-14-img.jpg'
import product2 from '../../assets/images/product/shop-13-img.jpg'
import product3 from '../../assets/images/product/shop-12-img.jpg'
import product4 from '../../assets/images/product/shop-11-img.jpg'
import product5 from '../../assets/images/product/shop-10-img.jpg'
import product6 from '../../assets/images/product/shop-9-img.jpg'
import product7 from '../../assets/images/product/shop-8-img.jpg'
import product8 from '../../assets/images/product/shop-7-img.jpg'

function Product() {
    return (
        <div>
            <section id='products'>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='product'>
                                <div className='prod-img'>
                                    <img src={product1} />
                                </div>
                                <h6>MAJESTY PALM</h6>
                                <span className='add-cart'><a>Add to cart</a></span>
                                <div className='price'><span>$<span>259</span></span></div>
                            </div>
                        </div>
                        <div className='col-3'>
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
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product