import React from 'react'
import '../assets/scss/_home.scss'
import AboutComp from '../components/aboutComp/AboutComp'
import Blog from '../components/blog/Blog'
import Category from '../components/category/Category'
import Product from '../components/common/Product'
import Expert from '../components/expert/Expert'
import Instagram from '../components/instagram/Instagram'
import Say from '../components/say/Say'
import Slider from '../components/slider/Slider'
import Subscribe from '../components/subscribe/Subscribe'

function Home() {
    return (
        <div>
            <main>
                <Slider />
                <Category />
                <Product />
                <AboutComp />
                <Expert />
                <Subscribe />
                <Blog />
                <Say />
                <Instagram />
            </main>
        </div>
    )
}
export default Home
