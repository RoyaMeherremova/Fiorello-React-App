import React from 'react'
import '../assets/scss/_home.scss'
import Blog from '../components/blog/Blog'
import Category from '../components/category/Category'
import Product from '../components/common/Product'
import Expert from '../components/expert/Expert'
import Instagram from '../components/instagram/Instagram'
import Say from '../components/say/Say'
import Slider from '../components/slider/Slider'
import Subscribe from '../components/subscribe/Subscribe'
import HomeVideoComp from '../components/video/HomeVideoComp'

function Home() {
    return (
        <div>
            <main>
                <Slider />
                <Category />
                <Product />
                <HomeVideoComp />
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
