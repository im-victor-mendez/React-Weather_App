import React from 'react'
import './Hightlights.scss'

import Air_Pressure from './Air_Pressure/Air_Pressure'
import Humidity from './Humidity/Humidity'
import Visibility from './Visibility/Visibility'
import Wind from './Wind/Wind'

function Hightlights() {
  return (
    <section id='hightlights'>
      <h1>Today's Hightlights</h1>
      <div>
        <Wind />
        <Humidity />
        <Visibility />
        <Air_Pressure />
      </div>
    </section>
  )
}

export default Hightlights