import React from 'react'
import './Visibility.scss'
import { useSelector } from 'react-redux'

function Visibility() {
    const selector = useSelector(state => state.location)
    const visibility = selector.visibility

  return (
    <section id='visibility' className='section'>
        <h1>Visibility</h1>
        <h2>
            {visibility} miles
        </h2>
    </section>
  )
}

export default Visibility