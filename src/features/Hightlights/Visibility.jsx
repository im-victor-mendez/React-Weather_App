import React from 'react'
import { useSelector } from 'react-redux'

function Visibility() {
    const selector = useSelector(state => state.location)
    const visibility = selector.visibility

  return (
    <section id='visibility'>
        <h1>Visibility</h1>
        <h2>
            {visibility} miles
        </h2>
    </section>
  )
}

export default Visibility