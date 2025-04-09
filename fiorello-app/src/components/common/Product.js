import React from 'react'
import '../../assets/scss/_product.scss'
function Product({ products }) {
    return (
        <div>
            <section id='products'>
                <div className='container my-5'>
                    <div className='row'>
                        {products.slice(0, 4).map((item) => (
                            <div className='col-3' key={item.id}>
                                <div className='product'>
                                    <div className='prod-img'>
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <h6>{item.name}</h6>
                                    <span className='add-cart'>
                                        <a href="#">Add to cart</a>
                                    </span>
                                    <div className='price'>
                                        <span>${item.price}</span>
                                    </div>
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