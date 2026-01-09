import React from 'react'
import '../assets/scss/_home.scss'
import BlogSection from '../components/BlogSection'
import Category from '../components/Category'
import Expert from '../components/Expert'
import Instagram from '../components/Instagram'
import Say from '../components/Say'
import Slider from '../components/Slider'
import Subscribe from '../components/Subscribe'
import HomeVideoComp from '../components/video/HomeVideoComp'

function Home() {
    return (
        <div>
            <main>
                <Slider />
                <Category />
                <HomeVideoComp />
                <Expert />
                <Subscribe />
                <BlogSection />
                <Say />
                <Instagram />
            </main>
        </div>
    )
}
export default Home
