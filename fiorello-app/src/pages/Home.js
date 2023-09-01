import React from 'react'
import '../assets/scss/_home.scss'
import About from '../components/about/About'
import Category from '../components/category/Category'
import Product from '../components/common/Product'
import Slider from '../components/slider/Slider'

function Home() {
    return (
        <div>
            <main>
                <Slider />
                <Category />
                <Product />
                <About />
            </main>
        </div>
    )
}
export default Home
