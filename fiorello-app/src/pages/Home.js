import React from 'react'
import '../assets/scss/_home.scss'
import About from '../components/about/About'
import Blog from '../components/blog/Blog'
import Category from '../components/category/Category'
import Product from '../components/common/Product'
import Expert from '../components/expert/Expert'
import Slider from '../components/slider/Slider'
import Subscribe from '../components/subscribe/Subscribe'

function Home() {
    return (
        <div>
            <main>
                <Slider />
                <Category />
                <Product />
                <About />
                <Expert />
                <Subscribe />
                <Blog />
            </main>
        </div>
    )
}
export default Home
