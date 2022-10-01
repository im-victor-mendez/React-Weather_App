import React from 'react'
import { useSelector } from 'react-redux'

function Air_Pressure() {
    const selector = useSelector(state => state.location)
    const air = selector.air

  return (
    <section id='air-pressure'>
        <h1>Air Pressure</h1>
        <h2>
            {air} mb
        </h2>
    </section>
  )
}

export default Air_Pressure