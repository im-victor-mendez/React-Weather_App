import React from 'react'
import './Wind.scss'

import { useSelector } from 'react-redux'

function Wind() {
    const selector = useSelector(state => state.location)
    const wind = selector.wind

  return (
    <section id='wind'className='section'>
        <h1>Wind status</h1>
        <h2>
          <h2 className='data'>{wind.velocity}</h2>
           mph</h2>
        <div id='direction'>
            <i
            className='material-symbols-outlined'
            style={{transform: `rotate(${wind.direction}deg)`}}
            >Assistant_Navigation</i>
            <h1>{wind.direction} deg</h1>
        </div>
    </section>
  )
}

export default Wind