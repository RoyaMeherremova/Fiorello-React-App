import React from 'react'
import '../../assets/scss/_product.scss'

function Product({ products }) {
    return (
        <section id='products'>
            <div className='row' >
                <div className='product-list' style={{ gap: '2%' }}>
                    {products.map((item) => (
                        <div className='product' key={item.id}>
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
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Product
