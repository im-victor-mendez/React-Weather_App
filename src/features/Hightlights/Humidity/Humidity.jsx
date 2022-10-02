import React from 'react'
import './Humidity.scss'
import { useSelector } from 'react-redux'

function Humidity() {
    const selector = useSelector(state => state.location)
    const humidity = selector.humidity

    return (
        <section id='humidity' className='section'>
            <h1>Humidity</h1>
            <h2>
                {humidity}%
            </h2>
            <div id='bar'>
                <div id='percentages'>
                    <p>0</p>
                    <p>50</p>
                    <p>100</p>
                </div>
                
                <div
                style={
                    {
                        height: '8px',
                        width: '100%',
                        backgroundColor: '#E7E7EB'
                    }
                }>
                    <div
                    style={
                        {
                            height: '8px',
                            width: `${humidity}px`,
                            backgroundColor: '#FFEC65',
                        }
                    }></div>
                </div>
                <p>%</p>
            </div>
        </section>
    )
}

export default Humidity