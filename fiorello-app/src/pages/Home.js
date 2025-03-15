// import React, { useState, useEffect } from 'react'
import '../assets/scss/_home.scss'
import Blog from '../components/blog/Blog'
import Category from '../components/category/Category'
import Expert from '../components/expert/Expert'
import Instagram from '../components/instagram/Instagram'
import Say from '../components/say/Say'
import Slider from '../components/slider/Slider'
import Subscribe from '../components/subscribe/Subscribe'
import HomeVideoComp from '../components/video/HomeVideoComp'

function Home() {
    // const [data, setData] = useState(null)
    // const [isPending, setIsPending] = useState(false)
    // const [error, setError] = useState(false)
    // useEffect(() => {
    //     setIsPending(true)
    //     projectFirestore.collection('recipes').get().then(snapshot => {
    //         if (snapshot.empty) {
    //             setError('No recipes to load')
    //             setIsPending(false)
    //         } else {
    //             let results = []
    //             snapshot.docs.forEach(doc => {
    //                 // console.log(doc)
    //                 results.push({ ...doc.data(), id: doc.id })
    //             })
    //             setData(results)
    //             setIsPending(false)
    //         }
    //     }).catch(err => {
    //         setError(err.message)
    //         setIsPending(false)
    //     })
    // }, [])
    return (
        <div>
            <main>
                <Slider />
                <Category />
                {/* <Product /> */}
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
