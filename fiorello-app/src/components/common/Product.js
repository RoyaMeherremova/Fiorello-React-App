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
                                        <img src={item.image} />
                                    </div>
                                    <h6>{item.name}</h6>
                                    <span className='add-cart'><a>Add to cart</a></span>
                                    <div className='price'><span>$<span>{item.price}</span></span></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product