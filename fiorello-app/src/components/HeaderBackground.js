import React from 'react'
import '../assets/scss/_headerBack.scss'

export default function HaederBackground({ value, desc }) {
    return (
        <div>
            <div className='header'>
                <h1 className='title'>{value}</h1>
                <span className='subtitle'>{desc}</span>
            </div>
        </div>
    )
}
