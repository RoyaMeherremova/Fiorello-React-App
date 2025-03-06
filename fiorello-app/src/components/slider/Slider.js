import React, { useState, useEffect } from 'react'
import { projectFireStore } from '../../firebase/config'
// import Carousel from 'react-bootstrap/Carousel';
import '../../assets/scss/_slider.scss'
// import { Typography } from '@mui/material';
// import slider1 from '../../assets/images/slider/h3-slider-background-2.jpg'
// import slider2 from '../../assets/images/slider/h3-slider-background-2.jpg'
// import slider3 from '../../assets/images/slider/h3-slider-background-3.jpg'
// import sliderLogo from '../../assets/images/slider/h2-sign-img.png'

function Slider() {
    const [sliders, setSliders] = useState([])
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        setIsPending(true)
        projectFireStore.collection('sliders').get().then(snapshot => {
            console.log(snapshot)
            if (snapshot.empty) {
                setError('No recipes to load')
                setIsPending(false)
            } else {
                let results = []
                snapshot.docs.forEach(doc => {
                    console.log(doc)
                    results.push({ ...doc.data(), id: doc.id })
                })
                setSliders(results)
                setIsPending(false)
            }
        }).catch(err => {
            setError(err.message)
            setIsPending(false)
        })
    }, [])

    return (
        <>
            <img
                className="d-block w-100"
                src="src/assets/images/slider/h2-sign-img.png"
                alt="First slide"
            />



            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {sliders.map(ing => <h1>{ing.Title}</h1>)}
            <img
                className="d-block w-100"
                src='../../../../assets/images/slider/h3-slider-background-2.jpg'
                alt="First slide"
            />
            {/* <section id='slider'>
                <Carousel>
                    {sliders.map((item, i) => (<Carousel.Item fade>
                        <img
                            className="d-block w-100"
                            src='../../../assets/images/slider/h3-slider-background-2.jpg'
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className='slide-content'>
                                <Typography>i</Typography>
                                <p>{item.Title}</p>
                                <img src='slider1' alt="First slide" />
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>))}
                </Carousel>




            </section> */}
        </>


    )
}

export default Slider;


